import Backbone from 'backbone';
import PostItemView from './postItemView';
import postsCollection from '../collections/posts';

const PostsView = Backbone.View.extend({
  initialize: function() {
    console.log(this);
    // var self = this;
    //listen to models or collections for changes
    postsCollection.on('add', () => {
      console.log(this.cid, 'i heard you added a model');
      this.render();
    });
    //initiate any fetching that needs to happen
    postsCollection.fetch();
  },
  // by default tagname is div, we're just being explicit here
  tagName: 'div',
  className: 'posts-list',
  template: function() {
    return `
    <h2>Posts</h2>
    <ul>
    </ul>
    `;
  },
  render: function() {
    // stuff the element with the template;
    this.$el.html(this.template());
    // make our children and stuff ourselves with them
    postsCollection.forEach((post) => {
      var postItemView = new PostItemView({
        model: post
      });
      postItemView.render();
      this.$('ul').append(postItemView.$el);
    });
    return this;
  }
});

export default PostsView;
