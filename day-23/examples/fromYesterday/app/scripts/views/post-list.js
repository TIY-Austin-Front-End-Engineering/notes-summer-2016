import $ from 'jquery';
import moment from 'moment';

import $nav from './nav';

function renderPosts() {
  let $postList = $(`
    <div class="post-list">
      <h2>Posts</h2>
      <ul>
      </ul>
    </div>
  `);

  $('.container').empty().append($nav).append($postList);

  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/blogPosts',
    success: function(data) {
      data.forEach((post, i, arr) => {
        let $postItem = $(`
          <li class="post-list-item">
            <h3 class="post-list-title">${post.title}</h3>
            <span class="author">${post.author}</span>
            <time class="timestamp">${moment(new Date(post.timestamp)).fromNow()}</time>
          </li>
        `);
        $postList.find('ul').append($postItem);
      })
    },
    error: function(error) {
      console.log('something went wrong fetching posts', error);
    }
  });
}

export default renderPosts;
