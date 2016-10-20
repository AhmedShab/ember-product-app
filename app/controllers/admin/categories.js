import Ember from 'ember';

export default Ember.Controller.extend({

  categoryList: Ember.A(['First Category', 'Second Category']),




  // categoryName: 'Cool',
  // uppercaseCategoryName: Ember.computed('categoryName', function() {
  //   console.log('computed was called');
  //   let category = this.get('categoryName');
  //   return category;
  // }),

  // categoryNameChanged: Ember.observer('categoryName', function() {
  //   console.log('observer was called');
  // }),

  // isDisabled: Ember.computed('categoryName', function() {
  //   return this.get('categoryName') === '';
  // }),
  isDisabled: Ember.computed.empty('categoryName'),

  actions: {
    myNewAction(){
      console.log('new action');
      this.send('plusOne');
    },

    addNewCategory(category){
      // console.log('my category', category);
      // console.log(this.get('categoryList'));
      // debugger;
      this.get('categoryList').pushObject(category);
    },

    removeCategory(index){
      this.get('categoryList').removeAt(index);
    }
  }

});
