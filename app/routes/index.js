import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    goaway: function() {
      this.transitionTo('away');
    }
  }
});
