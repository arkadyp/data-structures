var Node = function(value){
  this.value = value;
  this.edges = {};
};

var Graph = function(){
  this.nodes = {};
  this.nodeCount = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = new Node(newNode);
  var nodeName = this.getName(newNode);
  this.nodes[nodeName] = node;
  this.nodeCount++;

  if(!(toNode === undefined)) { //if toNode is passed in, connect it to new node
    var toNodeName = this.getName(toNode);
    this.addEdge(nodeName, toNodeName);
  } else if(this.nodeCount === 2) {  //automatically create an edge if there is only one node in graph
    var graph = this;
    _.each(this.nodes, function(firstNode){ //only two nodes at this point
      if(firstNode.value !== node.value) { //only call addEdge on firstNode/newNode
        graph.addEdge(node.value, firstNode.value);
      }
    });
  }
};

Graph.prototype.contains = function(target){
  return (this.getName(target) in this.nodes);
};

Graph.prototype.removeNode = function(target){
  var nodeName = this.getName(target);
  if(nodeName in this.nodes) {
    delete this.nodes[nodeName];
  }
};

Graph.prototype.getEdge = function(target1, target2){
  var node1Name = this.getName(target1);
  var node1 = this.nodes[node1Name];
  var node2 = this.nodes[this.getName(target2)];
  var edgeFound = false;
  if(node1 && node2) {
    edgeFound = (node1Name in node2.edges);
  }
  return edgeFound;
};

Graph.prototype.addEdge = function(target1, target2){
  var node1Name = this.getName(target1);
  var node2Name = this.getName(target2);
  var node1 = this.nodes[node1Name];
  var node2 = this.nodes[node2Name];
  
  if(node1 && node2) {
    node1.edges[node2Name] = node2;
    node2.edges[node1Name] = node1;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.getName = function(name){
  return JSON.stringify(name);
};