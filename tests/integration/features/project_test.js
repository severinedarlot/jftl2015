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



