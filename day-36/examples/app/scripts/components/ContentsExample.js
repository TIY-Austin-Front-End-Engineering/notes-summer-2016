import React from 'react';

export default React.createClass({
  handleInput: function(e) {
    if (e.which === 13) {
      console.log('hi')
    }
  },
  render: function() {
    return (
      <div>
        <input onKeyUp={this.handleInput} type="text" placeholder="what's your favorite color?"/>
      </div>
    )
  }
});
