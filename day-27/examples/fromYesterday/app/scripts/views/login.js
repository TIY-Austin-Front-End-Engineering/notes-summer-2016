// this is no longer being used, it was replaced by the LoginView constuctor but is around for reference

import $ from 'jquery';
import settings from '../settings';
import router from '../router';

import session from '../models/username';

let $login = $(`
    <form class="login-form">
      <h2>Login</h2>
      <input id="username" type="text" name="username" placeholder="username"/>
      <input id="password" type="password" name="password" placeholder="password"/>
      <input type="submit" name="submit" value="submit">
    </form>
`);


$login.find('input[type="submit"]').on('click', function(evt) {
  evt.preventDefault();
  let username =  $login.find('#username').val();
  let password =  $login.find('#password').val();
  // var encrypted = btoa(settings.appId + ':' + settings.appSecret);
  session.save({username: username, password: password}, {
    success: function(model, response) {
      model.unset('password');
      // this is the same as using router.navigate
      // location.hash = '#posts';
      router.navigate('posts', {trigger: true});
  },
  error: function() {
    console.log('it errored, you did not login a user');
  }});
  // $.ajax({
  //   type: 'POST',
  //   url: `https://baas.kinvey.com/user/${settings.appId}/login`,
  //   data: JSON.stringify({
  //     username: username,
  //     password: password
  //   }),
  //   headers: {
  //     Authorization: `Basic ${encrypted}`
  //   },
  //   contentType: 'application/json',
  //
  // });
  // $(this).siblings('input').val('');
});

export default $login;
