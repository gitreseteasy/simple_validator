var expect = require('chai').expect;
var validators = require('../src/baseValidators')

describe('baseValidators.length test', function() {
  it('should return true with correct criterion > 0 (string)', function() {
    expect(validators.length('1234', 4)).to.be.true;
  });
  it('should return true if empty string with criterion 0 (string)', function() {
    expect(validators.length('', 0)).to.be.true;
  });
  it('should return false with a negative criterion length (string)', function() {
    expect(validators.length('1234', -10)).to.be.false;
  });
  it('should return false with a non-number length (string)', function() {
    expect(validators.length('1234', 'hello')).to.be.false;
  });
  it('should return true with correct criterion > 0 (array)', function() {
    expect(validators.length([1,2,3,4], 4)).to.be.true;
  });
  it('should return true if empty string with criterion 0 (array)', function() {
    expect(validators.length([], 0)).to.be.true;
  });
  it('should return false with a negative criterion length (array)', function() {
    expect(validators.length([1,2,3,4], -10)).to.be.false;
  });
  it('should return false with a non-number length (null)', function() {
    expect(validators.length('1234', null)).to.be.false;
  });
  it('should return false with a non-number length (undefined)', function() {
    expect(validators.length('1234', undefined)).to.be.false;
  });
  it('should return false with a non-number length (object)', function() {
    expect(validators.length('1234', {test: 'hello'})).to.be.false;
  });
  it('should return false with a non-number length (array)', function() {
    expect(validators.length('1234', [1,2,3,4])).to.be.false;
  });
  it('should return false with incorrect input (number)', function() {
    expect(validators.length(2, 2)).to.be.false;
  });
  it('should return false with incorrect input (object)', function() {
    expect(validators.length({hi:'test'}, 2)).to.be.false;
  });
  it('should return false with incorrect input (null)', function() {
    expect(validators.length(null, 2)).to.be.false;
  });
  it('should return false with incorrect input (undefined)', function() {
    expect(validators.length(undefined, 2)).to.be.false;
  });
  it('should return false with incorrect input (function - arrow)', function() {
    expect(validators.length(() => {}, 2)).to.be.false;
  });
  it('should return false with incorrect input (function - normal)', function() {
    expect(validators.length(function(){}, 2)).to.be.false;
  });
  it('should return false with incorrect input and incorrect criterion', function() {
    expect(validators.length(2, {test:"hi"})).to.be.false;
  });
});
describe('baseValidators.lengthMin test', function() {
  it('should return true with correct criterion > 0 (string) (more than)', function() {
    expect(validators.lengthMin('1234', 1)).to.be.true;
  });
  it('should return true with correct criterion > 0 (string) (equal)', function() {
    expect(validators.lengthMin('1234', 4)).to.be.true;
  });
  it('should return false with correct criterion > 0 (string) (less than)', function() {
    expect(validators.lengthMin('123', 4)).to.be.false;
  });
  it('should return true if empty string with criterion 0 (string)', function() {
    expect(validators.lengthMin('', 0)).to.be.true;
  });
  it('should return false with a negative criterion length (string)', function() {
    expect(validators.lengthMin('1234', -10)).to.be.false;
  });
  it('should return false with a non-number length (string)', function() {
    expect(validators.lengthMin('1234', 'hello')).to.be.false;
  });
  it('should return true with correct criterion > 0 (array) (more than)', function() {
    expect(validators.lengthMin([1,2,3,4], 2)).to.be.true;
  });
  it('should return false with correct criterion > 0 (array) (less than)', function() {
    expect(validators.lengthMin([1,2,3], 4)).to.be.false;
  });
  it('should return true with correct criterion > 0 (array) (equal)', function() {
    expect(validators.lengthMin([1,2,3,4], 4)).to.be.true;
  });
  it('should return true if empty string with criterion 0 (array)', function() {
    expect(validators.lengthMin([], 0)).to.be.true;
  });
  it('should return false with a negative criterion length (array)', function() {
    expect(validators.lengthMin([1,2,3,4], -10)).to.be.false;
  });
  it('should return false with a non-number length (null)', function() {
    expect(validators.lengthMin('1234', null)).to.be.false;
  });
  it('should return false with a non-number length (undefined)', function() {
    expect(validators.lengthMin('1234', undefined)).to.be.false;
  });
  it('should return false with a non-number length (object)', function() {
    expect(validators.lengthMin('1234', {test: 'hello'})).to.be.false;
  });
  it('should return false with a non-number length (array)', function() {
    expect(validators.lengthMin('1234', [1,2,3,4])).to.be.false;
  });
  it('should return false with incorrect input (number)', function() {
    expect(validators.lengthMin(2, 2)).to.be.false;
  });
  it('should return false with incorrect input (object)', function() {
    expect(validators.lengthMin({hi:'test'}, 2)).to.be.false;
  });
  it('should return false with incorrect input (null)', function() {
    expect(validators.lengthMin(null, 2)).to.be.false;
  });
  it('should return false with incorrect input (undefined)', function() {
    expect(validators.lengthMin(undefined, 2)).to.be.false;
  });
  it('should return false with incorrect input (function - arrow)', function() {
    expect(validators.lengthMin(() => {}, 2)).to.be.false;
  });
  it('should return false with incorrect input (function - normal)', function() {
    expect(validators.lengthMin(function(){}, 2)).to.be.false;
  });
  it('should return false with incorrect input and incorrect criterion', function() {
    expect(validators.lengthMin(2, {test:"hi"})).to.be.false;
  });
});
describe('baseValidators.lengthMax test', function() {
  it('should return true with correct criterion > 0 (string) (equal)', function() {
    expect(validators.lengthMax('1234', 4)).to.be.true;
  });
  it('should return false with correct criterion > 0 (string) (more than)', function() {
    expect(validators.lengthMax('123456', 4)).to.be.false;
  });
  it('should return true if empty string with criterion 0 (string)', function() {
    expect(validators.lengthMax('', 0)).to.be.true;
  });
  it('should return false with a negative criterion length (string)', function() {
    expect(validators.lengthMax('1234', -10)).to.be.false;
  });
  it('should return false with a non-number length (string)', function() {
    expect(validators.lengthMax('1234', 'hello')).to.be.false;
  });
  it('should return true with correct criterion > 0 (array) (equal)', function() {
    expect(validators.lengthMax([1,2,3,4], 4)).to.be.true;
  });
  it('should return false with correct criterion > 0 (array) (more than)', function() {
    expect(validators.lengthMax([1,2,3,4,5,6], 4)).to.be.false;
  });
  it('should return true if empty string with criterion 0 (array)', function() {
    expect(validators.lengthMax([], 0)).to.be.true;
  });
  it('should return false with a negative criterion length (array)', function() {
    expect(validators.lengthMax([1,2,3,4], -10)).to.be.false;
  });
  it('should return false with a non-number length (null)', function() {
    expect(validators.lengthMax('1234', null)).to.be.false;
  });
  it('should return false with a non-number length (undefined)', function() {
    expect(validators.lengthMax('1234', undefined)).to.be.false;
  });
  it('should return false with a non-number length (object)', function() {
    expect(validators.lengthMax('1234', {test: 'hello'})).to.be.false;
  });
  it('should return false with a non-number length (array)', function() {
    expect(validators.lengthMax('1234', [1,2,3,4])).to.be.false;
  });
  it('should return false with incorrect input (number)', function() {
    expect(validators.lengthMax(2, 2)).to.be.false;
  });
  it('should return false with incorrect input (object)', function() {
    expect(validators.lengthMax({hi:'test'}, 2)).to.be.false;
  });
  it('should return false with incorrect input (null)', function() {
    expect(validators.lengthMax(null, 2)).to.be.false;
  });
  it('should return false with incorrect input (undefined)', function() {
    expect(validators.lengthMax(undefined, 2)).to.be.false;
  });
  it('should return false with incorrect input (function - arrow)', function() {
    expect(validators.lengthMax(() => {}, 2)).to.be.false;
  });
  it('should return false with incorrect input (function - normal)', function() {
    expect(validators.lengthMax(function(){}, 2)).to.be.false;
  });
  it('should return false with incorrect input and incorrect criterion', function() {
    expect(validators.lengthMax(2, {test:"hi"})).to.be.false;
  });
});
describe('baseValidators.lengthMax test', function() {
  it('should return true if object keys match regardless of key content (same)', function() {
    const obj1 = {hello: 2, test: "falafel"};
    const obj2 = {hello: 2, test: "falafel"};
    expect(validators.keysMatch(obj1, obj2)).to.be.true;
  });
  it('should return true if object keys match regardless of key content (different)', function() {
    const obj1 = {hello: 1, test: "waffles"};
    const obj2 = {hello: 2, test: "falafel"};
    expect(validators.keysMatch(obj1, obj2)).to.be.true;
  });
  it('should return true if both objects are empty', function() {
    const obj1 = {};
    const obj2 = {};
    expect(validators.keysMatch(obj1, obj2)).to.be.true;
  });
  it('should return false with non-matching values', function() {
    const obj1 = {};
    const obj2 = {hi: "content", wat: "hello there"};
    expect(validators.keysMatch(obj1, obj2)).to.be.false;
  });
  it('should return false with wrong input type', function() {
    const obj1 = 2;
    const obj2 = {};
    expect(validators.keysMatch(obj1, obj2)).to.be.false;
  });
  it('should return false with undefined inputs', function() {
    const obj1 = undefined;
    const obj2 = undefined;
    expect(validators.keysMatch(obj1, obj2)).to.be.false;
  });
  //list could be expanded to cover all cases of different pairs
});
describe('baseValidators.equals test', function() {
  it('should return true with equals (number)', function() {
    expect(validators.equals(1,1)).to.be.true;
  });
  it('should return true with equals (number 0)', function() {
    expect(validators.equals(0,0)).to.be.true;
  });
  it('should return true with equals (string)', function() {
    expect(validators.equals('hello','hello')).to.be.true;
  });
  it('should return true with equals (string empty)', function() {
    expect(validators.equals('','')).to.be.true;
  });
  it('should return true with equals (array)', function() {
    expect(validators.equals([1,2,3,4],[1,2,3,4])).to.be.true;
  });
  it('should return true with equals (array empty)', function() {
    expect(validators.equals([],[])).to.be.true;
  });
  it('should return true with equals (undefined)', function() {
    expect(validators.equals(undefined, undefined)).to.be.true;
  });
  it('should return true with equals (null)', function() {
    expect(validators.equals(null, null)).to.be.true;
  });
  it('should return true with equals (boolean true)', function() {
    expect(validators.equals(true, true)).to.be.true;
  });
  it('should return true with equals (boolean false)', function() {
    expect(validators.equals(false, false)).to.be.true;
  });
  it('should return true with equals (object 1 layer)', function() {
    expect(validators.equals({test:"hi", meow:1}, {test:"hi", meow:1})).to.be.true;
  });
  it('should return true with equals (object nested 2)', function() {
    expect(validators.equals({
                                test: 1,
                                meow: "cat",
                                pokemon: {
                                  lampoon:[1,2,3,4],
                                  allYourBasesIsBelongToUs: 23
                                }
                              },
                              {
                                test: 1,
                                meow: "cat",
                                pokemon: {
                                  lampoon:[1,2,3,4],
                                  allYourBasesIsBelongToUs: 23
                                }
                              })).to.be.true;
  });
  it('should return true with equals (object nested 3)', function() {
    expect(validators.equals({
                                atest: 1,
                                bmeow: "cat",
                                cpokemon: {
                                  dlampoon:[1,2,3,4],
                                  eallYourBasesIsBelongToUs: 23,
                                  walletsAreGreat :{
                                    myPotatoIsStillGreen: "cinco",
                                    popTartDemolition: 2.3
                                  }
                                }
                              },
                              {
                                atest: 1,
                                bmeow: "cat",
                                cpokemon: {
                                  dlampoon:[1,2,3,4],
                                  eallYourBasesIsBelongToUs: 23,
                                  walletsAreGreat :{
                                    myPotatoIsStillGreen: "cinco",
                                    popTartDemolition: 2.3
                                  }
                                }
                              })).to.be.true;
  });
  it('should return true with equals (object empty)', function() {
    expect(validators.equals({}, {})).to.be.true;
  });
  it('should return false with UNequals (object)', function() {
    expect(validators.equals({meowth:'cats', darts: {blue:1, red: {wallets: true, torpedo: 58}}},
                             {meowth:'cats', darts: {blue:1, red: {wallets: true, torpedo: 59}}})
                            ).to.be.false;
  });
  it('should return false with UNequals (number)', function() {
    expect(validators.equals(1,2)).to.be.false;
  });
  it('should return false with UNequals (string)', function() {
    expect(validators.equals('cats','dogs')).to.be.false;
  });
  it('should return false with UNequals (falseys)', function() {
    expect(validators.equals(null,undefined)).to.be.false;
  });
  it('should return false with UNequals (array)', function() {
    expect(validators.equals([2,9,7],[1,2,3])).to.be.false;
  });
  it('should return false with UNequals (boolean)', function() {
    expect(validators.equals(true,false)).to.be.false;
  });
});
describe('baseValidators.typesMatch', function() {
  it('should return true if data type matches an input string', function() {
    expect(validators.typesMatch('check this string', 'string')).to.be.true;
  });
  it('should return true if data type matches an input number', function() {
    expect(validators.typesMatch(1, 'number')).to.be.true;
  });
  it('should return true if data type matches an input boolean', function() {
    expect(validators.typesMatch(false, 'boolean')).to.be.true;
  });
  it('should return true if data type matches an input array', function() {
    expect(validators.typesMatch([1,2,3,4], 'array')).to.be.true;
  });
  it('should return true if data type matches an input object', function() {
    expect(validators.typesMatch({}, 'object')).to.be.true;
  });
  it('should return true if data type matches an input undefined', function() {
    expect(validators.typesMatch(undefined, 'undefined')).to.be.true;
  });
  it('should return true if data type matches an input null', function() {
    expect(validators.typesMatch(null, 'null')).to.be.true;
  });
  it('should return false if data type does not match an input string', function() {
    expect(validators.typesMatch(123, 'string')).to.be.false;
  });
  it('should return false if data type does not match an input number', function() {
    expect(validators.typesMatch('hello', 'number')).to.be.false;
  });
  it('should return false if data type does not match an input boolean', function() {
    expect(validators.typesMatch({}, 'boolean')).to.be.false;
  });
  it('should return false if data type does not match an input array', function() {
    expect(validators.typesMatch('string of an array', 'array')).to.be.false;
  });
  it('should return false if data type does not match an input object', function() {
    expect(validators.typesMatch([1,2,3,4], 'object')).to.be.false;
  });
  it('should return false if data type does not match an input undefined', function() {
    expect(validators.typesMatch(0, 'undefined')).to.be.false;
  });
  it('should return false if data type does not match an input null', function() {
    expect(validators.typesMatch('1234', 'null')).to.be.false;
  });
  it('should return false if a nonsense typeString is provided', function() {
    expect(validators.typesMatch('this is a string', 'word pictures')).to.be.false;
  });
  it('should return false with no input', function() {
    expect(validators.typesMatch()).to.be.false;
  });
});
describe('baseValidators.keysMatch', function() {
  it('should return true if keys for input == keys on criterion', function() {
    expect(validators.keysMatch({sessionKey: "thisismysessionkey"}, {sessionKey: {}})).to.be.true;
  });
  it('should return true if keys for input == keys on criterion (more than one)', function() {
    const obj1 = {sessionKey: "thisismysessionkey", potato: 2};
    const obj2 = {sessionKey: {}, potato: {}};
    expect(validators.keysMatch(obj1, obj2)).to.be.true;
  });
  it('should return false if keys for input != keys on criterion', function() {
    const obj1 = {sessionKey: "thisismysessionkey"};
    const obj2 = {user_id: {}};
    expect(validators.keysMatch(obj1, obj2)).to.be.false;
  });
  it('should return false if more keys in criterion', function() {
    const obj1 = {sessionKey: "thisismysessionkey"};
    const obj2 = {sessionKey: {}, potato: {}, cats: {}};
    expect(validators.keysMatch(obj1, obj2)).to.be.false;
  });
  it('should return false if less keys in criterion', function() {
    const obj1 = {sessionKey: "thisismysessionkey", userName: "poopfeast420"};
    const obj2 = {sessionKey: {}};
    expect(validators.keysMatch(obj1, obj2)).to.be.false;
  });
  it('should return true if both are empty objects', function() {
    const obj1 = {};
    const obj2 = {};
    expect(validators.keysMatch(obj1, obj2)).to.be.true;
  });
  it('should return false if no input (undefined inputs)', function() {
    expect(validators.keysMatch()).to.be.false;
  });
});
