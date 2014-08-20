'use strict';
var Filter = require('broccoli-filter');
var amdclean = require('amdclean');

function AmdCleanFilter(inputTree) {
  if (!(this instanceof AmdCleanFilter)) {
    return new AmdCleanFilter(inputTree);
  }
  this.inputTree = inputTree;
}

AmdCleanFilter.prototype = Object.create(Filter.prototype);
AmdCleanFilter.prototype.constructor = AmdCleanFilter;

AmdCleanFilter.prototype.extensions = ['js'];
AmdCleanFilter.prototype.targetExtension = 'js';

AmdCleanFilter.prototype.processString = function (str) {
  var result = amdclean.clean({code: str});
  return result;
};

module.exports = AmdCleanFilter;
