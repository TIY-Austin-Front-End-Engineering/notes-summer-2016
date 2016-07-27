import React from 'react';

const Color = React.createClass({
  render: function() {
    console.log(this.props.params.hexCode);
    let styles = {
      height: '500px',
      border: 'solid 1px black',
      background: `#${this.props.params.hexCode}`
    };
    return (
      <div style={styles}></div>
    )
  }
});

export default Color;
