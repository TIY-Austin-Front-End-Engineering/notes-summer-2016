import Backbone from 'backbone';
import Post from '../models/post';

const Posts = Backbone.Collection.extend({
  model: Post,
  url: 'https://tiny-za-server.herokuapp.com/collections/blogPosts'
});

let postsCollection = new Posts();

export default postsCollection;
