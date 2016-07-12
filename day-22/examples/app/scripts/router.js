import $ from 'jquery';

import $newPost from './views/post-form';
import $login from './views/login';
import $nav from './views/nav';
import renderPosts from './views/post-list';
import $post from './views/post';

function router() {
  const hash = location.hash;
  if (hash === '#login') {
    $('.container').empty().append($login);
  } else if (hash === '#posts') {
    renderPosts();
  } else if (hash === '#posts/new') {
    $('.container').empty().append($nav).append($newPost);
  } else if (hash === '#posts/:id') {
    $('.container').empty().append($nav).append($post);
  }
}

export default router;
