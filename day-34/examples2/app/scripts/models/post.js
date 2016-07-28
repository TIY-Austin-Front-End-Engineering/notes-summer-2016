import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
  defaults: {
    postUrl: 'http://placekitten.com/300/300'
  }
})
