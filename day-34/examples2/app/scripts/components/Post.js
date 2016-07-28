import React from 'react';

export default React.createClass({
  clickHandler: function(e) {
    console.log('go to the modal now');
  },
  render: function() {
    console.log(this.props.post);
    return (
      <figure className="post-img">
        <img
          onClick={this.clickHandler}
          src={this.props.post.postUrl}/>
        <figcaption>
          {this.props.post.power}
        </figcaption>
      </figure>
    )
  }
});
