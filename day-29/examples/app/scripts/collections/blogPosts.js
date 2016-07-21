import Backbone from 'backbone';
import BlogPost from '../models/blogPost';

export default Backbone.Collection.extend({
  url: 'http://baas.kinvey.com/appdata/kid_HkVBqdqD/blogPosts',
  model: BlogPost
});
