import Backbone from 'backbone';
import moment from 'moment';

const PostItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'post-list-item',
  template: function() {
    return `
    <h3 class="post-list-title">
      <a href="#posts/${this.model.get('_id')}">${this.model.get('title')}</a>
    </h3>
    <span class="author">${this.model.get('author')}</span>
    <time class="timestamp">${moment(new Date(this.model.get('timestamp'))).fromNow()}</time>
    `;
  },
  render: function() {
    this.$el.html(this.template());
  }
});

export default PostItemView;
