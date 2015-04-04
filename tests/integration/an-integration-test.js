import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
var App;
 
module('An Integration test', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test("The page has a title", function(assert) {
  assert.expect(1);
  visit('/').then(function() {
    assert.equal(find('h2').text(), "Calcul de devis mastering", "Page contains the title");
  });
});