import React from 'react';
import Modal from '../Modal';
import ContentsExample from '../ContentsExample';


export default React.createClass({
  render: function() {
    console.log('hi');
    return (
      <Modal>
        <ContentsExample/>
      </Modal>
    )
  }
})
