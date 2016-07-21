import Backbone from 'backbone';
import store from '../store';
import router from '../router';

export default Backbone.View.extend({
  initialize: function(postId) {
    if (!store.blogPosts.get(postId)) {
      store.blogPosts.add({_id: postId});
    }
    this.model = store.blogPosts.get(postId);
    this.model.on('change', () => {
      this.render();
    });
    this.model.fetch();
  },
  template: function() {
    return `
      <h2>
      <input type="text" value="${this.model.get('title')}"/>
      </h2>
      `;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  events: {
    'keyup input': 'savePost'
  },
  savePost: function(e) {
    if (e.which === 13) {
      this.model.save({
        title: this.$('input').val()
      }, {
        success: (e) => {
          router.navigate(`posts/${this.model.get('_id')}`, {trigger: true});
        }
      });
    }
  }
});
