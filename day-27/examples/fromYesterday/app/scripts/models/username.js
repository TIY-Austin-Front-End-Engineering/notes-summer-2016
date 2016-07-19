import Backbone from 'backbone';
import settings from '../settings';

const Session = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/user/${settings.appId}/login`,
  defaults: {
    username: '',
    authtoken: ''
  },
  // use parse to modify how we react to response from server. whatever we return will be set to the model, whate we don't return will be ignored
  parse: function(response) {
    if (response) {
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id
      };
    }
  }
  // i dont want my session model to know where its id lives, so it will always make a POST request when i .save()
  // idAttribute: '_id'
});

let session = new Session();

export default session;
