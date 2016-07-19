import Backbone from 'backbone';
import session from '../models/username';
import router from '../router';

const LoginView = Backbone.View.extend({
  // tagname is the name of the html element we are trying to create
  tagName: 'form',
  className: 'login-form',
  id: 'coolFormBrah',
  events: {
    'submit': 'submitFunction'
  },
  submitFunction: function(e) {
    let username = this.$('#username').val();
    let password = this.$('#password').val();
    e.preventDefault();
    session.save({username: username, password: password}, {
      success: function(model, response) {
        model.unset('password');
        router.navigate('posts', {trigger: true});
    },
    error: function() {
      console.log('it errored, you did not login a user');
    }});
  },
  //template should return whatever goes inside the html element that the view represents
  template: function() {
    return `
    <h2>Login</h2>
    <input id="username" type="text" name="username" placeholder="username"/>
    <input id="password" type="password" name="password" placeholder="password"/>
    <input type="submit" name="submit" value="submit">
    `;
  },
  // render should stuff the html element with the template, and any children, return this
  render: function() {
    // views have 2 properties that represent the ACTUAL HTML Element of the view
    // this.$el is jquery wrapped element
    this.$el.html(this.template());
    // this.el is the vanilla js element
    // this.el.innerHTML = this.template();
    return this;
  }
});

export default LoginView;
