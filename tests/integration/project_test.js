import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import Actionwords from './actionwords';
var App, actionwords = Actionwords.create();
 
module('Mastering quote computation - It 1', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test('Calculator initialization (uid:6c744a01-7a85-437d-927a-3f70706d589b)', function (assert) {
  actionwords.theCalculatorsPage(assert);
  actionwords.theTitlePageShouldBeP1(assert, "Calcul de devis mastering");
});



