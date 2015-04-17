import Ember from "ember";

var Actionwords = Ember.Object.extend({
  theTitlePageShouldBeP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('h2').text(), p1, 
        "Page contains the title");
    });
  },
  theTitleTotalIsP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('#total-count').text(), p1, 
        "The title total is computed");
    });
  },
  theMasteringPriceShouldBePrice: function (assert, price) {
    andThen(function() {
      assert.equal(find('#mastering-price').text(), price, 
        "The mastering price is computed");
    });
  },
  theFirstSliceIsNumber: function (assert, number) {
    andThen(function() {
      fillIn('input.first', number);
    });
  },
  theCalculatorsPage: function (assert) {
    visit('/');
  }
});

export default Actionwords;