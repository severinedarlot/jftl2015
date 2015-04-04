import Ember from "ember";

var Actionwords = Ember.Object.extend({
  etantDonneLaCalculatrice: function (assert) {
    visit('/');
  },
  leTitreDoitEtreP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('h2').text(), p1, "Page contains the title");
    });
  }
});

export default Actionwords;