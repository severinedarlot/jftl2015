import Ember from "ember";

var Actionwords = Ember.Object.extend({
  theCalculatorsPage: function (assert) {
    visit('/');
  },
  theTitlePageShouldBeP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('h2').text(), p1, "Page contains the title");
    });
  },
  theFirstSliceIsP1: function (assert, p1) {
    andThen(function() {
      fillIn($('input.first'), p1);
    });
  },
  theSecondSliceIsP1: function (assert, p1) {
    andThen(function() {
      fillIn($('input.second'), p1);
    });
  },
  theThirdSliceIsP1: function (assert, p1) {
    andThen(function() {
      fillIn($('input.third'), p1);
    });  
  },
  theFourthSliceIsP1: function (assert, p1) {
    andThen(function() {
      fillIn($('input.fourth'), p1);
    });
  },
  theTitleTotalIsP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('#total-count').text(), p1, "The title total is computed");
    });
  }
});

export default Actionwords;