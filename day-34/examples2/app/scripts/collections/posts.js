import Backbone from 'backbone';
import Post from '../models/post';

export default Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-za-server.herokuapp.com/collections/unicorns'
})
