import { expect } from 'chai';
import getDependencies from '../app/scripts/dependencies';

var deps1 = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

var deps2 = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

describe('getDependencies function', function() {
  it('should exist', () => {
    expect(getDependencies).to.exist;
  });
  it('should be a function', () => {
    expect(getDependencies).to.be.a('function');
  });
  it('should find dependencies for unnested object', () => {
    expect(getDependencies(deps1)).to.deep.equal([
      'optimist@0.3.7',
      'inflection@1.2.6'])
  });
  it('should find dependencies for nested object', () => {
    expect(getDependencies(deps2)).to.deep.equal([
      'optimist@0.3.7',
      'wordwrap@0.0.2',
      'inflection@1.2.6'])
  })
})
