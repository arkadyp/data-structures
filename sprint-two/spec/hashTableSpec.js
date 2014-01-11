var expect = chai.expect;

describe("hashTable", function() {
  var hashTable;
  var people = [["Steven", "Tyler"], ["George", "Harrison"], ["Mr.", "Doob"], ["Dr.", "Sunshine"], ["John", "Resig"], ["Brendan", "Eich"], ["Alan", "Turing"]];
  var similarPeople = [["Steven", "Tyler"], ["Steven", "Seagal"], ["Mr.", "Doob"], ["Dr.", "Sunshine"], ["John", "Resig"], ["John", "McEnroe"]];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert', 'remove', and 'retrieve", function() {
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
  });

  it("should store values that were inserted", function() {
    hashTable.insert("Steven", "Seagal");
    expect(hashTable.retrieve("Steven")).to.equal("Seagal");
  });

  it("should not contain values that were not inserted", function() {
    hashTable.insert("Steven", "Spielberg");
    expect(hashTable.retrieve("Steven")).not.to.equal("Seagal");
  });

  it("should not contain values that were removed", function() {
    hashTable.insert("Steven", "Tyler");
    hashTable.remove("Steven");
    expect(hashTable.retrieve("Steven")).to.equal(null);
  });

  it("should handle hash function collisions", function(){
    expect(window.getIndexBelowMaxForKey).to.be.ok;
    var v1 = 'val3', v2 = 'aal';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
  });

  // (Extra credit! Remove the extra 'x' when you want the following tests to run)
  it("should double in size when needed", function() {
    for (var i = 0; i < people.length; i++){
      var firstName = people[i][0], lastName = people[i][1];
      hashTable.insert(firstName,lastName);
    }
    expect(hashTable._limit).to.equal(16);
    expect(hashTable.retrieve("Steven")).to.equal("Tyler");
  });

  it("should halve in size when needed", function() {
    for (var i = 0; i < people.length; i++){
      var firstName = people[i][0], lastName = people[i][1];
      hashTable.insert(firstName,lastName);
    }
    expect(hashTable._limit).to.equal(16);
    hashTable.remove("George");
    hashTable.remove("Dr.");
    hashTable.remove("Steven");
    hashTable.remove("John");
    hashTable.remove("Mr.");
    expect(hashTable._limit).to.equal(8);

    expect(hashTable.retrieve("Steven")).to.equal(null);
  });

  //New test to handle insert with the same keys
  it("should update the value only if same key", function() {
    for (var i = 0; i < similarPeople.length; i++){
      var firstName = similarPeople[i][0], lastName = similarPeople[i][1];
      hashTable.insert(firstName,lastName);
    }
    console.log(hashTable);
    expect(hashTable.retrieve("Steven")).to.equal("Seagal");
    expect(hashTable.retrieve("Mr.")).to.equal("Doob");
    expect(hashTable.retrieve("John")).to.equal("McEnroe");
  });


});
