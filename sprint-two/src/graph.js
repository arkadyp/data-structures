var Node = function(value) {
  this.value = value;
  this.edges = [];
};

var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = new Node(newNode);
  if(!(toNode === undefined)) {
    node.edges.push(toNode);
  }
  this.nodes.push(node);
};

Graph.prototype.contains = function(target){
  var targetFound = false;
  _.each(this.nodes, function(node) {
    if(node.value === target) {
      targetFound = true;
    }
  });
  return targetFound;
};

Graph.prototype.removeNode = function(target){
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].value === target) {
      this.nodes.splice(i, 1);
      break;
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};