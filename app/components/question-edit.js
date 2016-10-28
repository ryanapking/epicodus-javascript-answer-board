import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestion(question) {
      var params = {
        question: this.get('newQuestion'),
        notes: this.get('newNotes'),
        author: this.get('newAuthor')
      };
      this.sendAction('editQuestion', question, params);
    }
  }
});
