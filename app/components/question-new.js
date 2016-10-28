import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newQuestion() {
      var params = {
        question: this.get('question'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.sendAction('newQuestion', params);
    }
  }
});
