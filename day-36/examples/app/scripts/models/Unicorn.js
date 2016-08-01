import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    likes: 0
  },
  addLike: function() {
    let oldLikes = this.get('likes');
    this.set('likes', oldLikes+1);
  }
})
