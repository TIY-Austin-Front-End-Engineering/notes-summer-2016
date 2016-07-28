import Backbone from 'backbone';
import User from '../models/user';

export default Backbone.Collection.extend({
  model: User,
  url: 'http://tiny-za-server.herokuapp.com/collections/user'
})
