import Backbone from 'backbone';

export default Backbone.Model.extend({
  urlRoot: 'http://baas.kinvey.com/appdata/kid_HkVBqdqD/blogPosts',
  idAttribute: '_id',
  defaults: {
    title: ''
  }
});
