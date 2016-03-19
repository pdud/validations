import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  user: computed({
    get() {
      return Ember.Object.create();
    }
  })
});
