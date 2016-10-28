import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,
  formError: false,
  actions: {
    newQuestion() {
      if (
        this.get('question')
        && this.get('notes')
        && this.get('author')
      ) {
        var params = {
          question: this.get('question'),
          notes: this.get('notes'),
          author: this.get('author')
        };
        this.send('resetQuestionForm');
        this.sendAction('newQuestion', params);
      } else {
        this.set('formError', true);
      }
    },
    showForm() {
      this.set('formShowing', true);
    },
    resetQuestionForm() {
      this.set('question', '');
      this.set('notes', '');
      this.set('author', '');
      this.set('formShowing', false);
      this.set('formError', false);
    }
  }
});
