import Ember from 'ember';

export default Ember.Component.extend({
  editShowing: false,
  actions: {
    editQuestion(question) {
      var params = {
        question: this.get('newQuestion'),
        notes: this.get('newNotes'),
        author: this.get('newAuthor')
      };
      this.set('editShowing', false);
      this.sendAction('editQuestion', question, params);
    },
    showEdit() {
      this.set('editShowing', true);
    },
    deleteQuestion(question) {
      if (confirm("Are you sure you'd like to delete this question? Doing so will also delete all responses to the question.")) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
