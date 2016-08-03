import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    authToken: '',
    username: 'New User'
  }
})
