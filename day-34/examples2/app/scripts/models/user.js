import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/user',
  defaults: {
    userUrl: 'http://fillmurray.com/100/100'
  }
})
