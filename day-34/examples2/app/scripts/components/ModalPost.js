import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div class="modal-container">
        <div class="modal">
          <figure class="post-img">
            <img src="http://placekitten.com/300/300"/>
            <figcaption>
              <div class="tags">#blessed</div>
              <div class="comments">I LOVE IT!</div>
            </figcaption>
          </figure>
        </div>
      </div>
    )
  }
});
