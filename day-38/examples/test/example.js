import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Nav from '../app/scripts/components/Nav';
// import store from '../app/scripts/store';

describe('<Nav /> component', function() {
  const wrapper = shallow(<Nav />);
  it('should start with no auth token', () => {
    expect(wrapper.state('authToken')).to.equal('');
  });
  // it('should change authToken when store session changes', () => {
  //   store.session.set('authToken', 'someToken');
  //   store.session.on('change', () => {
  //     expect(wrapper.state('authToken')).to.equal('someToken');
  //   })
  // })
  it('should render a login link when there is no authToken', () => {
    expect(wrapper.find('a[href="/login"]')).to.have.length(1);
  });
  it('should NOT render a logout link when there is no authToken', () => {
    expect(wrapper.find('a[href="/logout"]')).to.have.length(0);
  });
  it('should render a logout link when there is an authToken', () => {
    wrapper.setState({'authToken': 'sometoken'})
    expect(wrapper.find('a[href="/logout"]')).to.have.length(1);
  });
  it('should NOT render a login link when there is an authToken', () => {
    expect(wrapper.find('a[href="/login"]')).to.have.length(0);
  });
})
