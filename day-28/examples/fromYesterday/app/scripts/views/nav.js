import $ from 'jquery';

import router from '../router';

let $nav = $(`
  <nav>
    <a href="#posts/new">Make a New Post</a>
    <a href="#posts">See all Posts</a>
    <a href="#logout">Logout</a>
  </nav>
`);

export default $nav;
