var Node = function(value){
  this.value = value;
  this.edges = [];
};

var Graph = function(){
  this.nodes = {};
  this.nodeCount = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = new Node(newNode);
  var nodeName = this.returnName(newNode);
  this.nodes[nodeName] = node;
  
  if(!(toNode === undefined)) { //if toNode is passed in, connect it to new node
    var toNodeName = this.returnName(toNode);
    this.addEdge(nodeName, toNodeName);
  } else if(this.nodeCount === 1) {  //automatically create an edge if there is only one node in graph
    var graph = this;
    _.each(this.nodes, function(firstNode){ //only one node is in graph at this point
      graph.addEdge(nodeName, graph.returnName(firstNode.value));
    });
  }

  this.nodeCount++;
};

Graph.prototype.contains = function(target){
  return (this.returnName(target) in this.nodes);
};

Graph.prototype.removeNode = function(target){
  var nodeName = this.returnName(target);
  if(nodeName in this.nodes) {
    delete this.nodes[nodeName];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(target1, target2){
  var node1Name = this.returnName(target1);
  var node2Name = this.returnName(target2);
  var node1 = this.nodes[node1Name];
  var node2 = this.nodes[node2Name];
  
  if(node1 && node2) {
    node1.edges.push(node2);
    node2.edges.push(node1);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.returnName = function(name){
  return JSON.stringify(name);
};