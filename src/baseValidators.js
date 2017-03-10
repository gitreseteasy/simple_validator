'use strict'

const ACCEPTABLE_CRITERIA_KEYS = {
  "length": "YEP",
  "lengthMin": "YEP",
  "lengthMax": "YEP",
  "equals": "YEP",
  "type": "YEP"
};

module.exports.length = function(input, requiredLength) {
  if(input === null
    || input === undefined
    || typeof requiredLength !== 'number'
    || requiredLength < 0){
    return false;
  } else {
    var type = Object.prototype.toString.call(input);

    switch(type) {
      case '[object String]':
        return input.length === requiredLength;
        break;
      case '[object Array]':
        return input.length === requiredLength;
        break;
      default:
        return false;
    }
  }
}
module.exports.lengthMin = function(input, requiredLength) {
  if(input === null
    || input === undefined
    || typeof requiredLength !== 'number'
    || requiredLength < 0){
    return false;
  } else {
    var type = Object.prototype.toString.call(input);

    switch(type) {
      case '[object String]':
        return input.length >= requiredLength;
        break;
      case '[object Array]':
        return input.length >= requiredLength;
        break;
      default:
        return false;
    }
  }
}
module.exports.lengthMax = function(input, requiredLength) {
  if(input === null
    || input === undefined
    || typeof requiredLength !== 'number'
    || requiredLength < 0){
    return false;
  } else {
    var type = Object.prototype.toString.call(input);

    switch(type) {
      case '[object String]':
        return input.length <= requiredLength;
        break;
      case '[object Array]':
        return input.length <= requiredLength;
        break;
      default:
        return false;
    }
  }
}
module.exports.equals = function(input, criterion) {
  if(Object.prototype.toString.call(input) !== Object.prototype.toString.call(criterion)){
    return false;
  } else {
    const type = Object.prototype.toString.call(input);

    switch(type) {
      case '[object String]':
        return input === criterion;
        break;
      case '[object Array]':
        //check one - same string
        const sameString = criterion.toString() === input.toString();
        //check two - same length
        const sameLength = criterion.length === input.length;
        //check three - all same elements
        const sameElements = function() {
          if(sameLength && sameString) {
            for(var i=0; i<input.length;i++) {
              if(input[i] !== criterion[i])
                return false;
            }
            return true;
          } else {
            return false;
          }
        }();

        return sameString && sameLength && sameElements;
        break;
      case '[object Object]':
        const inputKeys = Object.keys(input);
        const criterionKeys = Object.keys(criterion);

        //check 1 - same number of keys
        const sameKeyAmount = (inputKeys.length === criterionKeys.length);

        //check 2 -  keys are the same
        const sameKeys = module.exports.equals(inputKeys, criterionKeys);

        //check all keys and determine if all keys are the same, even nested ones!:
        const identicalObject = function() {
          if(sameKeyAmount && sameKeys){
            for(var i=0;i<inputKeys.length; i++) {
              if(!module.exports.equals(input[inputKeys[i]], criterion[criterionKeys[i]])) {
                return false;
              }
            }
            return true;
          } else {
            return false;
          }
        }();

        return (sameKeyAmount && sameKeys && identicalObject);
        break;
      case '[object Number]':
        return input === criterion;
        break;
      case '[object Null]':
        return input === criterion;
        break;
      case '[object Undefined]':
        return input === undefined && criterion === undefined;
        break;
      case '[object Boolean]':
        return input === criterion;
        break;
      case '[object Function]':
        return false;//not yet implemented!
        break;
      default:
        return false;
    }
  }
}
module.exports.keysMatch = function(input, criterion) {
  const inputType = Object.prototype.toString.call(input);
  const criterionType = Object.prototype.toString.call(criterion);
  const objectDefinition = '[object Object]';

  if(inputType !== objectDefinition || criterionType !== objectDefinition) {
    return false;
  } else {
    const inputKeys = Object.keys(input);
    const criterionKeys = Object.keys(criterion);

    //check 1 - key lists are same length
    const keyListSameLength = (inputKeys.length === criterionKeys.length);

    //check 2 - keyList string representation is equals
    const stringRepresentationSame = (inputKeys.toString() === criterionKeys.toString());

    return keyListSameLength && stringRepresentationSame;
  }
};
module.exports.typesMatch = function(input, typeString) {
  const types = {
    'string':'[object String]',
    'number': '[object Number]',
    'boolean': '[object Boolean]',
    'array': '[object Array]',
    'object': '[object Object]',
    'undefined': '[object Undefined]',
    'null': '[object Null]',
  };
  const containsValidType = ((typeof typeString === 'string') &&
                            (typeString.length < 20) && //to prevent HUGE input
                            (types[typeString]? true : false));

  if(!containsValidType){
    return false;
  } else {
    const inputType = Object.prototype.toString.call(input);

    return (inputType === types[typeString]);
  }
}
module.exports.check = function(inputValue, cleanCriteriaObject) {
  const criteriaKeys = Object.keys(cleanCriteriaObject);
  for(var i=0;i<criteriaKeys.length;i++) {
    const criterionValue = cleanCriteriaObject[criteriaKeys[i]];

    switch(criteriaKeys[i]) {
      case 'length':
        if(!module.exports.length(inputValue, criterionValue)) {
          return false;
        } else {
          break;
        }
      case 'lengthMin':
        if(!module.exports.lengthMin(inputValue, criterionValue)) {
          return false;
        } else {
          break;
        }
      case 'lengthMax':
        if (!module.exports.lengthMax(inputValue, criterionValue)) {
          return false
        } else {
          break;
        }
      case 'equals':
        if(!module.exports.equals(inputValue, criterionValue)) {
          return false;
        } else {
          break;
        }
      case 'type':
        if(!module.exports.typesMatch(inputValue, criterionValue)) {
          return false;
        } else {
          break;
        }
      default:
        return false;
    }
  }
  return true;
};
module.exports.getCleanedCriteriaObject = function(criteria) {
  var result = {};

  const topLevelKeys = Object.keys(criteria);
  if(topLevelKeys.length > 0) {
    for(var i=0;i<topLevelKeys.length;i++) {
      const topKey = topLevelKeys[i];
      const isCriteriaObject = (Object.prototype.toString.call(criteria[topLevelKeys[i]])
                                === '[object Object]');
      if(isCriteriaObject) {
        const innerObject = criteria[topLevelKeys[i]];
        const innerObjectKeys = Object.keys(innerObject);
        var tempInnerObject = {};
        for(var j=0;j<innerObjectKeys.length;j++) {
          const innerObjectKeyvalue = innerObject[innerObjectKeys[j]]

          if(innerObjectKeys[j] in ACCEPTABLE_CRITERIA_KEYS) {
            Object.assign(tempInnerObject, {[innerObjectKeys[j]]: innerObjectKeyvalue});
          }
        }
        Object.assign(result, tempInnerObject);
      }
    }
    return result;
  } else {
    return result;
  }
};
