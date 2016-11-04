import Ember from 'ember';

export default Ember.Component.extend({
  deleteRequested: false,
  favorites: Ember.inject.service(),
  isFavorite: Ember.computed('favorites.answers.length', function() {
    if (this.get('favorites.answers').includes(this.get('answer'))) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {

    favoriteAnswer(answer) {
      if (this.get('favorites').answers.includes(answer)) {
        this.get('favorites').removeAnswer(answer);
      } else {
        this.get('favorites').addAnswer(answer);
      }
    },
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
    downvote(answer) {
      this.sendAction('downvote', answer);
    },
    deleteAnswer(answer) {
      this.set('deleteRequested', false);
      this.sendAction('deleteAnswer', answer);
    },
    requestDelete() {
      this.set('deleteRequested', true);
      var currentComponent = this;
      setTimeout(function() {
        currentComponent.send('cancelDelete');
      }, 5000);
    },
    cancelDelete() {
      this.set('deleteRequested', false);
    }
  }
});
