import $ from 'jquery';
import moment from 'moment';

function renderPosts(postsCollection) {
    let $postList = $(`
    <div class="post-list">
      <h2>Posts</h2>
      <ul>
      </ul>
    </div>
  `);

    function renderSinglePost(post) {
        let $postItem = $(`
          <li class="post-list-item">
            <h3 class="post-list-title">
              <a href="#posts/${post.get('_id')}">${post.get('title')}</a>
            </h3>
            <span class="author">${post.get('author')}</span>
            <time class="timestamp">${moment(new Date(post.get('timestamp'))).fromNow()}</time>
          </li>
        `);
        $postList.find('ul').append($postItem);

    }
    postsCollection.on('add', renderSinglePost);
    postsCollection.forEach(renderSinglePost);

    return $postList;
}

export default renderPosts;
