import Backbone from 'backbone';

const PostDetailView = Backbone.View.extend({
  initialize: function(id) {
    // get the model from the collection or create it if necessary,
    // fetch the model
    // listen to the model for changes and re-run render when it is successful
  },
  tagName: 'article',
  className: 'post-detail',
  template: function() {
    return `
      <h2>${post.get('title')}</h2>
      <div class="post-meta-data">
        <span class="likes">${post.get('likes')} likes</span>
        <input type="button" class="like" value="like">
        <span class="article-author">${post.get('author')}</span>
        <time class="article-timestampe">${post.get('timestamp')}</time>
      </div>
      <p>
        ${post.get('body')}
      </p>
    `
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  events: {
    'click .like': 'like'
  },
  like: function() {
    post.like();
  }
});

export default PostDetailView;
