import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    plusOne(){
      let newValue = this.controller.get('counter') + 1;
      this.controller.set('couter', newValue);

    }
  }
});
