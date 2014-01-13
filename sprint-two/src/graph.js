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
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};