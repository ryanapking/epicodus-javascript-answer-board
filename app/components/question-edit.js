import Ember from 'ember';

export default Ember.Component.extend({
  editShowing: false,
  deleteRequested: false,
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
      this.sendAction('deleteQuestion', question);
    },
    requestDelete() {
      this.set('deleteRequested', true);
    },
    cancelDelete() {
      this.set('deleteRequested', false);
    }
  }
});
