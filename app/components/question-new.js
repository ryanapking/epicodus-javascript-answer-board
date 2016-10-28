import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,
  actions: {
    newQuestion() {
      var params = {
        question: this.get('question'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.send('resetQuestionForm');
      this.sendAction('newQuestion', params);
    },
    showForm() {
      this.set('formShowing', true);
    },
    resetQuestionForm() {
      this.set('question', '');
      this.set('notes', '');
      this.set('author', '');
      this.set('formShowing', false);
    }
  }
});
