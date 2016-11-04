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
      var favorites = this.get('favorites');
      if (favorites.questions.includes(question)) {
        favorites.removeQuestion(question);
      } else {
        favorites.addQuestion(question);
      }
    }
  }
});
