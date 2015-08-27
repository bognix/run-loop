import Ember from 'ember';

export default Ember.Component.extend({

  name: 'james',
  surname: 'bond',

  greetings: function() {
    console.log('greetings called', this.get('name'), this.get('surname'));
    return 'My name is ' + this.get('surname') + ' ' + this.get('name') + ' ' + this.get('surname');
  }.property('name', 'surname'),

  //SYNC BUCKET
  showBObserver: function() {
    console.log('show B observer called');
  }.observes('showB'),

  hello: function() {
    console.log('hello');
  },

  hi: function() {
    console.log('hi');
  },

  actions: {
    render: function() {
      this.set('showB', false);
      console.log('showB', this.get('showB'));

      Ember.run.schedule('afterRender', this, this.hello);
      Ember.run.schedule('sync', this, this.hi);

      if (true) {
        //RENDER BUCKET
        //debugger;
        this.set('showB', true);
        console.log('showB', this.get('showB'));
      }

      this.set('showB', false);
      console.log('showB', this.get('showB'));
    },

    propertySet: function() {
      this.set('name', 'foo');
      this.set('surname', 'bar');
    },

    propertySetTwice: function() {
      this.set('name', 'foo');
      this.set('surname', 'bar');
      console.log('property set', this.get('name'), this.get('surname'));
      this.set('name', 'james');
      this.set('surname', 'bond');
      console.log('property set', this.get('name'), this.get('surname'));
    },

    transition: function() {
      this.sendAction('goaway');
    }
  }

});
