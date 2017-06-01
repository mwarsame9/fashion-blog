import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       content: this.get('content'),
       author: this.get('author'),
       post: this.get('post')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});
