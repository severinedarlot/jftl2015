import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';
import Actionwords from './actionwords';
var App, actionwords = Actionwords.create();;
 
module('mastering-fee-calculator', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test('Basic album (uid:c0b3f3e2-1fcc-4570-a9d0-3189fe56975c)', function (assert) {
  actionwords.etantDonneLaCalculatrice(assert);
  actionwords.quandOnAjouteP1TitresDeMoinsDe4Minutes(assert, "12");
  actionwords.alorsLeTotalTTCDoitEtreP1TTC(assert, "862.8");
});



