import Ember from 'ember';

const {
  Component,
  inject,
  set,
  computed,
  run
} = Ember;

export default Component.extend({
  keyboard: inject.service('cordova/keyboard'),
  keyboardIsShowing: false,
  dummy: true,


  didInsertElement() {
    this._super();
    console.log(`keyboard object: ${this.get('keyboard')}`);

    this.get('keyboard').on('keyboardDidShow', this.keyboardDidShow);
    this.get('keyboard').on('keyboardDidHide', this.keyboardDidHide);
  },

  willDestroyElement() {
    this.get('keyboard').off('keyboardDidShow', this.keyboardDidShow);
    this.get('keyboard').off('keyboardDidHide', this.keyboardDidHide);

    this._super();
  },

  keyboardDidShow() {
    this.set('keyboardIsShowing', true);
    console.log(`keyboardDidShow triggered: ${this.get('keyboardIsShowing')}`);
  },

  keyboardDidHide() {
    this.set('keyboardIsShowing', false);
    console.log(`keyboardDidHide triggered: ${this.get('keyboardIsShowing')}`);
  },

  // log: computed('keyboardDidShow', function() {
  // 	this.toggleProperty('keyboardIsShowing');
  // 	console.log(`bra`);
  // }),

  actions: {
  	setKeyboardStatusToTrue() {
  		this.set('keyboardIsShowing', true);
  	},

  	setKeyboardStatusToFalse() {
  		this.set('keyboardIsShowing', false);
  	}
  }
});
