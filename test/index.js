var expect = require('chai').expect;
var validators = require('../src/index');

describe('baseValidators.validate test', function() {
  it('should return true if keys are the same', function() {
    const obj1 = {hello: 1};
    const obj2 = {hello: {type: 'number'}};
    expect(validators.validate(obj1, obj2)).to.be.true;
  });
  it('should return true if provided a properly formed criteria with same keys', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'string',
        length: 9
      }
    };
    const obj = {
      sessionKey: '123456789'
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.true;
  });
  it('should return true if type string matches input', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'string'
      }
    };
    const obj = {
      sessionKey: '123456789'
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.true;
  });
  it('should return true if type object matches input', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'object'
      }
    };
    const obj = {
      sessionKey: {}
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.true;
  });
  it('should return true if type number matches input', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'number'
      }
    };
    const obj = {
      sessionKey: 1
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.true;
  });
  it('should return true if type array matches input', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'array'
      }
    };
    const obj = {
      sessionKey: [1,2,3,4]
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.true;
  });
  it('should return true if extra random criteria are added, but rest is valid', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'string',
        lengthMin: 3,
        lengthMax: 10,
        length: 6,
        equals: 'potato',
        iamarandomkeyokay: {test: 'wallets'}
      }
    };
    const obj = {
      sessionKey: 'potato'
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.true;
  });
  it('should return false if type string does not match input', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'string'
      }
    };
    const obj = {
      sessionKey: 1
    };
    expect(validators.validate(obj, wellFormedObject)).to.be.false;
  });
  it('should return false if keys are different', function() {
    const obj1 = {hello: 1};
    const obj2 = {hi : {type: 'string'}};
    expect(validators.validate(obj1, obj2)).to.be.false;
  });
  it('should return false if provided a properly formed criteria with different keys', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'string'
      }
    };
    const obj = {
      sessionKeys: '123456789'
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.false;
  });
  it('should return false if type object does not match input', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'object'
      }
    };
    const obj = {
      sessionKey: "hi"
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.false;
  });
  it('should return false if type number does not match input', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'number'
      }
    };
    const obj = {
      sessionKey: [1,2,3,4]
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.false;
  });
  it('should return false if type array does not match input', function() {
    const wellFormedObject = {
      sessionKey: {
        type: 'array'
      }
    };
    const obj = {
      sessionKey: 23
    }
    expect(validators.validate(obj, wellFormedObject)).to.be.false;
  });
});
