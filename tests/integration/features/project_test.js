import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';
import Actionwords from './actionwords';
var App, actionwords = Actionwords.create();
 
module('Mastering quote computation', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test('Calculator initialization (uid:bb889084-65f8-40e6-a976-b38e82660e53)', function (assert) {
  actionwords.theCalculatorsPage(assert);
  actionwords.theTitlePageShouldBeP1(assert, "Calcul de devis mastering");
});

test('Show the title total number (uid:d470e52e-3d0b-4afd-852e-b3b797a65b61)', function (assert) {
  actionwords.theCalculatorsPage(assert);
  actionwords.theFirstSliceIsP1(assert, "4");
  actionwords.theSecondSliceIsP1(assert, "2");
  actionwords.theThirdSliceIsP1(assert, "1");
  actionwords.theFourthSliceIsP1(assert, "3");
  actionwords.theTitleTotalIsP1(assert, "10");
});



