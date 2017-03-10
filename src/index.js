'use strict'
var baseValidators = require('./baseValidators');

module.exports.validate = function(input, criteria){
  const inputType = Object.prototype.toString.call(input);
  const criteriaType = Object.prototype.toString.call(criteria);

  if(inputType !== '[object Object]' || criteriaType !== '[object Object]') {
    return false;
  } else {
    const keysMatch = baseValidators.keysMatch(input, criteria);
    if(keysMatch) {
      const topLevelCriteriaKeys = Object.keys(criteria);
      const cleanCriteriaObject = function() {
        var result = Object.assign({}, criteria);//trying not to edit argument directly
        for(var i=0;i<topLevelCriteriaKeys.length;i++) {
          result[topLevelCriteriaKeys[i]] = baseValidators.getCleanedCriteriaObject(criteria);
        }
        return result;
      }();

      for(var i=0;i<topLevelCriteriaKeys.length;i++) {
        const keyValue = input[topLevelCriteriaKeys[i]];

        if(!baseValidators.check(keyValue, cleanCriteriaObject[topLevelCriteriaKeys[i]])) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
};
module.exports.length = function(input, requiredLength) {
  return baseValidators.length(input, requiredLength);
};
module.exports.lengthMin = function(input, requiredLength) {
  return baseValidators.lengthMin(input, requiredLength);
};
module.exports.lengthMax = function(input, requiredLength) {
  return baseValidators.lengthMax(input, requiredLength);
};
module.exports.equals = function(input, criterion) {
  return baseValidators.equals(input, criterion);
};
module.exports.keysMatch = function(input, criterion) {
  return baseValidators.keysMatch(input, criterion);
};
module.exports.typesMatch = function(input, typeString) {
  return baseValidators.typesMatch(input, typeString);
};
module.exports.getCleanedCriteriaObject = function(criteriaObject) {
  return baseValidators.getCleanedCriteriaObject(criteriaObject);
};
