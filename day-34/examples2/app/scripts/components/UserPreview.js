import React from 'react';

export default React.createClass({
  clickHandler: function() {
    console.log('go to user profile page');
  },
  render: function() {
    return (
      <figure onClick={this.clickHandler}>
        <img src={this.props.user.userUrl}/>
        <figcaption>
          {this.props.user.name}
        </figcaption>
      </figure>
    )
  }
});
