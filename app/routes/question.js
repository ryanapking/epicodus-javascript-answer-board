import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    upvote(answer) {
      var currentUpvotes = answer.get('upvotes');
      answer.set('upvotes', currentUpvotes + 1);
      answer.save();
    },
    downvote(answer) {
      var currentDownvotes = answer.get('downvotes');
      answer.set('downvotes', currentDownvotes + 1);
      answer.save();
    },
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    },
    deleteQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    newAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
    }
  }
});
