import Ember from 'ember';

export default Ember.Component.extend({
  sortedAnswers: Ember.computed.sort('answers', function(a,b) {
    var aRating = a.get('upvotes') - a.get('downvotes');
    var bRating = b.get('upvotes') - b.get('downvotes');
    return bRating - aRating;
  }),
  actions: {
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
    downvote(answer) {
      this.sendAction('downvote', answer);
    }
  }
});
