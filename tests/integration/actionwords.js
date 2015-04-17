import Ember from "ember";

var Actionwords = Ember.Object.extend({
  theTitlePageShouldBeP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('h2').text(), p1, 
        "Page contains the title");
    });
  },
  theCalculatorsPage: function (assert) {
    visit('/');
  }
});

export default Actionwords;