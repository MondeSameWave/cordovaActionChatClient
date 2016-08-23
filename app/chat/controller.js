import Ember from 'ember';
import subscribe from 'ember-cordova/utils/subscribe';


const {
  Route,
  inject
} = Ember;

export default Ember.Controller.extend({
	cordova: inject.service(),
	keyboard: inject.service('cordova/keyboard'),


  logReady: subscribe('cordova.deviceready', function() {
    console.log('ready');
  }),

  logKeyboard: subscribe('keyboard.open', function() {
  	console.log(`From the controller the keyboard emmited a listner: ${this.get('keyboard.onKeyboardShow')}`);
  })
});
