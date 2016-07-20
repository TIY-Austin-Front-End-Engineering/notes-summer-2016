import Backbone from 'backbone';
import postsCollection from '../collections/posts';

const PostDetailView = Backbone.View.extend({
  initialize: function(postId) {
    // get the model from the collection or create it if necessary,
    this.model = postsCollection.get(postId);
    // fetch the model
    // listen to the model for changes and re-run render when it is successful
    this.model.on('change', (model) => {
      this.render();
    });
  },
  tagName: 'article',
  className: 'post-detail',
  template: function() {
    return `
      <h2>${this.model.get('title')}</h2>
      <div class="post-meta-data">
        <span class="likes">${this.model.get('likes')} likes</span>
        <input type="button" class="like" value="like">
        <span class="article-author">${this.model.get('author')}</span>
        <time class="article-timestampe">${this.model.get('timestamp')}</time>
      </div>
      <p>
        ${this.model.get('body')}
      </p>
    `;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  events: {
    'click .like': 'like'
  },
  like: function() {
    this.model.like();
  }
});

export default PostDetailView;
