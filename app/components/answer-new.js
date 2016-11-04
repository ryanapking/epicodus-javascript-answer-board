import Ember from 'ember';

export default Ember.Component.extend({
  answerFormShowing: false,
  formError: false,
  actions: {
    newAnswer(question) {
      // only checks for answer
      if (this.get('answer')) {
        // if author is empty, 'anonymous' is assigned
        if (!this.get('author')) {
          this.set('author', 'anonymous');
        }
        var params = {
          author: this.get('author'),
          answer: this.get('answer'),
          upvotes: 0,
          downvotes: 0,
          timestamp: Date.now(),
          question: question
        };
        this.send('resetAnswerForm');
        this.sendAction('newAnswer', params);
      } else {
        this.set('formError', true);
      }
    },
    showAnswerForm() {
      this.set('answerFormShowing', true);
    },
    resetAnswerForm() {
      this.set('author', '');
      this.set('answer', '');
      this.set('answerFormShowing', false);
      this.set('formError', false);
    }
  }
});
