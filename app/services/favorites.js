import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],
  answers: [],
  addQuestion(question) {
    this.get('questions').addObject(question);
  },
  removeQuestion(question) {
    this.get('questions').removeObject(question);
  },
  addAnswer(answer) {
    this.get('answers').addObject(answer);
  },
  removeAnswer(answer) {
    this.get('answers').removeObject(answer);
  }
});
