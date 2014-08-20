'use strict';
var Filter = require('broccoli-filter');
var amdclean = require('amdclean');

function AmdCleanFilter(inputTree, options) {
  if (!(this instanceof AmdCleanFilter)) {
    return new AmdCleanFilter(inputTree, options);
  }
  this.inputTree = inputTree;
  this.options = options || {};
}

AmdCleanFilter.prototype = Object.create(Filter.prototype);
AmdCleanFilter.prototype.constructor = AmdCleanFilter;

AmdCleanFilter.prototype.extensions = ['js'];
AmdCleanFilter.prototype.targetExtension = 'js';

AmdCleanFilter.prototype.processString = function (str) {
  this.options.code = str;
  var result = amdclean.clean(this.options);
  return result;
};

module.exports = AmdCleanFilter;
