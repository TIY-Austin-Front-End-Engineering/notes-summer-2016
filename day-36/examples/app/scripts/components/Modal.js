import React from 'react';

export default React.createClass({
  containerStyles: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0,0,0,.5)'
  },
  contentStyles: {
    background: 'white',
    width: '75%',
    margin: '0 auto',
    height: '75vh',
    marginTop: '12.5%'
  },
  render: function() {
    return (
      <div className="modal-container" style={this.containerStyles}>
        <div className="modal-content" style={this.contentStyles}>
          {this.props.children}
        </div>
      </div>
    )
  }
});
