import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  notes: DS.attr(),
  timestamp: DS.attr(),
  answers: DS.hasMany()
});
