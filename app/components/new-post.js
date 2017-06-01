import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        city: this.get('city') ? this.get('city') : "",
        content: this.get('content') ? this.get('content') : "",
        category: this.get('category') ? this.get('category') : "",
        image: this.get('image') ? this.get('image') : "",
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});
