// needed for react components
import { shallow } from 'enzyme';
// needed always for using the chai library
import { expect } from 'chai';
import React from 'react';
import LikeButton from '../../app/scripts/components/LikeButton';

// describe is a global that comes with mocha (mocha is installed globally on your computer by the spa-scaffold)
// takes a string, of what you are writing a test for, just for descriptive purposes, and a function to run the test
describe('<LikeButton /> component', function() {
  let likeButton = shallow(<LikeButton likes={0} />);
  let likeButton1 = shallow(<LikeButton likes={1} />);
  let likeButton5 = shallow(<LikeButton likes={5} />);
  // it is also a global function that comes with mocha, it runs a specific test
  // it also takes a string and a function, similar to describe
  it('should render a button to the DOM', () => {
    expect(likeButton.is('input')).to.be.true;
    expect(likeButton.is('div')).to.be.false;
  });
  it('should has a class of like-button', () => {
    expect(likeButton.hasClass('like-button')).to.be.true;
  });
  it('should display the correct number of likes', () => {
    expect(likeButton.equals(<input className="like-button" type="button" value="0 likes" />)).to.be.true;
    expect(likeButton1.equals(<input className="like-button" type="button" value="1 like" />)).to.be.true;
    expect(likeButton5.equals(<input className="like-button" type="button" value="5 likes" />)).to.be.true;
  })
});
