import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],
  answers: [],
  addQuestion(question) {
    this.get('questions').addObject(question);
    console.log(this.get('questions'));
  },
  removeQuestion(question) {
    this.get('questions').removeObject(question);
    console.log(this.get('questions'));
  },
  addAnswer(answer) {
    this.get('answers').addObject(answer);
    console.log(this.get('answers'));
  },
  removeAnswer(answer) {
    this.get('answers').removeObject(answer);
    console.log(this.get('answers'));
  }
});
