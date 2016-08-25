import Ember from 'ember';

export default Ember.Controller.extend({
  categoryName: 'Cool',
  uppercaseCategoryName: Ember.computed('categoryName', function() {
    console.log('computed was called');
    return this.get('categoryName').toUpperCase();
  }),

  categoryNameChanged: Ember.observer('categoryName', function() {
    console.log('observer was called');
  }),

  // isDisabled: Ember.computed('categoryName', function() {
  //   return this.get('categoryName') === '';
  // }),
  isDisabled: Ember.computed.empty('categoryName'),
});
