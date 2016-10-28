import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newAnswer(question) {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question: question
      };
      this.sendAction('newAnswer', params);
    }
  }
});
