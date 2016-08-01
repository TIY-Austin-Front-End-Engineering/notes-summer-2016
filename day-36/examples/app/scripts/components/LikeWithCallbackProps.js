import React from 'react';

export default React.createClass({
  render: function() {
    let like = 'like';
    if (this.props.likes !== 1) {like += 's';}
    return (
      <div>
        <input
          type="button"
          value={`${this.props.likes} ${like}`}
          onClick={this.props.callback}/>
      </div>
    )
  }
});
