var Node = function(value) {
  this.value = value;
  this.edges = [];
};

var Graph = function(){
  this.nodes = {};
  this.nodeCount = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = new Node(newNode);
  var nodeName = JSON.stringify(newNode);
  this.nodes[nodeName] = node;
  
  if(!(toNode === undefined)) { //if toNode is passed in, connect it to new node
    var toNodeName = JSON.stringify(toNode);
    this.addEdge(nodeName, toNodeName);
  } else if(this.nodeCount === 1) {  //automatically create an edge if there is only one node in graph
    _.each(this.nodes, function(firstNode){ //only one node is in graph at this point
      this.addEdge(nodeName, JSON.stringify(firstNode.value));
    });
  }

  this.nodeCount++;
};

Graph.prototype.contains = function(target){
  return (JSON.stringify(target) in this.nodes);
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

Graph.prototype.addEdge = function(target1, target2){
  var node1, node2;
  _.each(this.nodes, function(node) {
    if(node.value === target1) {
      node1 = new Node(target1);
    } else if(node.value === target2) {
      node2 = new Node(target2);
    }
  });

  if(node1 && node2) {
    node1.edges.push(node2);
    node2.edges.push(node1);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};