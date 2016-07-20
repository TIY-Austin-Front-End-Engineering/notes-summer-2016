import $ from 'jquery';
import settings from '../settings';

import user from '../models/username';

let $signup = $(`
  <div class="login">
    <form class="login-form">
      <h2>Signup</h2>
      <input id="username" type="text" name="username" placeholder="username"/>
      <input id="password" type="password" name="password" placeholder="password"/>
      <input type="submit" name="submit" value="submit">
    </form>
  </div>
`);


$signup.find('input[type="submit"]').on('click', function(evt) {
  evt.preventDefault();
  let username =  $login.find('#username').val();
  let password =  $login.find('#password').val();
  var encrypted = btoa(settings.appId + ':' + settings.appSecret);
  $.ajax({
    type: 'POST',
    url: `https://baas.kinvey.com/user/${settings.appId}/`,
    data: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      Authorization: `Basic ${encrypted}`
    },
    contentType: 'application/json',
    success: function(response) {
      user.username = username;
      user.authtoken = response._kmd.authtoken;
      location.hash = '#posts';
      console.log('it worked, you created a user');
    },
    error: function() {
      console.log('it errored, you did not make a user');
    }
  });
});

export default $signup;
