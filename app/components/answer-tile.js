import Ember from 'ember';

export default Ember.Component.extend({
  deleteRequested: false,
  actions: {
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
