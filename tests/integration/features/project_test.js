import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';
import Actionwords from './actionwords';
var App, actionwords = Actionwords.create();
 
module('Calcul de devis mastering', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test('Initialisation de la calculatrice (uid:bb889084-65f8-40e6-a976-b38e82660e53)', function (assert) {
  actionwords.etantDonneLaCalculatrice(assert);
  actionwords.leTitreDoitEtreP1(assert, "Calcul de devis mastering");
});



