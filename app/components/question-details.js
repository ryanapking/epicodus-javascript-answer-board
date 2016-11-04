import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  isFavorite: Ember.computed('favorites.questions.length', function() {
    if (this.get('favorites.questions').includes(this.get('question'))) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {
    favoriteQuestion(question) {
      console.log(question);
      var favorites = this.get('favorites');
      if (favorites.questions.includes(question)) {
        console.log('includes');
        favorites.removeQuestion(question);
      } else {
        console.log('does not include');
        favorites.addQuestion(question);
      }
    }
  }
});
