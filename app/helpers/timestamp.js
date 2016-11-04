import Ember from 'ember';

export function timestamp(params/*, hash*/) {
  // using moment instead of this helper would be more efficient and offer more flexibility, but this demonstrates basic use of a helper
  var timestamp = params[0];
  var date = new Date(timestamp)
  console.log(date);
  return Ember.String.htmlSafe('<span>' + date.toString().slice(4, 24) + '</span>');
}

export default Ember.Helper.helper(timestamp);
