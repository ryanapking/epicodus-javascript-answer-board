import Ember from 'ember';

export default Ember.Component.extend({
  answerFormShowing: false,
  actions: {
    newAnswer(question) {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question: question
      };
      this.set('answerFormShowing', false);
      this.sendAction('newAnswer', params);
    },
    showAnswerForm() {
      this.set('answerFormShowing', true);
    }
  }
});
