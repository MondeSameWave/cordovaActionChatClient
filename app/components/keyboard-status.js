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

  didInsertElement() {
    this._super();

    var _this = this;
    this.get('keyboard').on('keyboardDidShow', this.keyboardDidShow);
    this.get('keyboard').on('keyboardDidHide', this.keyboardDidHide);
  },

  willDestroyElement() {
  	var _this = this;
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
  actions: {
  	setKeyboardStatusToTrue() {
  		this.set('keyboardIsShowing', true);
  	},

  	setKeyboardStatusToFalse() {
  		this.set('keyboardIsShowing', false);
  	}
  }
});
