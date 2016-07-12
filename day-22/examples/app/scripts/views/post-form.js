import $ from 'jquery';

import user from '../models/username';

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
  const data = {
    author: user.username,
    title: $('.new-post-title').val(),
    body: $('textarea').val(),
    timestamp: new Date()
  };
  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/blogPosts',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function(response) {
      console.log(response);
    }
  });
});

export default $newPost;
