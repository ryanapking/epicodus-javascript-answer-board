import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  isFavorite: Ember.computed('favorites.question.length', function() {
    if (this.get('favorites.questions').includes(this.get('question'))) {
      return true;
    } else {
      return false;
    }
  })
});
