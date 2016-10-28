import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    }
  }
});
