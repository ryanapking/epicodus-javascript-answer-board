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
      this.set('formShowing', false);
      this.sendAction('newQuestion', params);
    },
    showForm() {
      this.set('formShowing', true);
    }
  }
});
