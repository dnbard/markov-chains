var _ = require('lodash'),
    Node = require('./node'),
    nodeSplitter = /\w/i;

function MarkovChains(){
    this.nodes = []
}

MarkovChains.prototype.add = function(data){
    if (_.isArray(data)){
        _.each(data, this.process);
    } else if (typeof data === 'string'){
        this.process(data);
    }

    return this;
}

MarkovChains.prototype.process = function(data){
    this.nodes.push(new Node({
        data: data,
        splitter: nodeSplitter
    }));
}

module.exports = new MarkovChains();
