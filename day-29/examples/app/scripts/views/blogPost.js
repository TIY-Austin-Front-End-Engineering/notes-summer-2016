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
    return `<h2>${this.model.get('title')}</h2>`;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  events: {
    'click h2': 'edit'
  },
  edit: function(e) {
    router.navigate(`posts/${this.model.get('_id')}/edit`, {trigger: true});
  }
});
