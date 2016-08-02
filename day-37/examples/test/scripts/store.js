import { expect } from 'chai';
import store from '../../app/scripts/store';

describe('store module', function() {
  it('should exist', () => {
    expect(store).to.exist
  });
  it('should have a session property', () => {
    expect(store).to.have.property('session');
  })
})

describe('store.session', function() {
  it('should have a default logged in value of false', () => {
    expect(store.session.get('loggedIn')).to.be.false
  })
})
