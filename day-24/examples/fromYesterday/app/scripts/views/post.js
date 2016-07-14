import $ from 'jquery';

function renderPost(post) {
  let $post = $(`
    <div class="post">
      <article class="post-content">
        <h2>${post.get('title')}</h2>
        <div class="post-meta-data">
          <span class="likes">${post.get('likes')} likes</span>
          <input type="button" class="like" value="like">
          <span class="article-author">${post.get('author')}</span>
          <time class="article-timestampe">${post.get('timestamp')}</time>
        </div>
        <p>
          ${post.get('body')}
        </p>
      </article>
    </div>
  `);

  $post.find('.like').on('click', function(e) {
    post.like();
  });
  return $post;
  // prefer NOT reaching out to the DOM inside of our render functions, instead return the element and let the router do this work:
  // $('.container').append($post);
}
export default renderPost;
