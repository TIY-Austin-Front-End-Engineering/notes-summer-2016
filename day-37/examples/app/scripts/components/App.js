import React from 'react';

export default React.createClass({
  // created to make sure i don't unlisten to the wrong function
  updateSession: function() {
    this.setState({session: store.session.toJSON()})
  },
  // setting up listeners
  componentDidMount: function() {
    store.session.on('change', this.updateSession)
  },
  // turning off listeners
  componentWillUnmount: function() {
    store.session.off('change', this.updateSession)
  },
  render: function() {
    return (
      <div>
        <Header session={this.props.session}/>
      </div>
    )
  }
})
