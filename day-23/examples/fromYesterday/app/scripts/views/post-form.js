import $ from 'jquery';
import Post from '../models/post';
import router from '../router';

import user from '../models/username';

function postForm() {
  let $newPost = $(`
    <div class="post-form">
      <h2>Write a new Post</h2>
      <form>
        <input type="text" name="title" class="new-post-title" placeholder="Title">
        <textarea name="body" placeholder="write your heart out"></textarea>
        <input type="submit" name="submit" value="submit">
      </form>
    </div>
  `);

  $newPost.find('input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    var post = new Post({
      author: user.username,
      title: $('.new-post-title').val(),
      body: $('textarea').val()
    });
    post.save(null, {
      success: function(response) {
        console.log('hi');
        router.navigate('posts', {trigger: true});
      },
      error: function() {}
    });
  });

  return $newPost;
}
export default postForm;
