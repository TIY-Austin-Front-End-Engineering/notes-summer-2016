import Backbone from 'backbone';
import Post from '../models/post';
import settings from '../settings';

const Posts = Backbone.Collection.extend({
  model: Post,
  url: `https://baas.kinvey.com/appdata/${settings.appId}/blogPosts`
});

let postsCollection = new Posts();

export default postsCollection;
