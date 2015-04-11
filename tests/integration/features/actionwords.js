import Ember from "ember";

var Actionwords = Ember.Object.extend({
  theCalculatorsPage: function (assert) {
    visit('/');
  },
  addP1TitlesLessThan4Minutes: function (assert, p1) {
    // TODO: Implement action: "Quand on ajoute " + String(p1) + " titres de moins de 4 minutes"
    throw 'Not implemented';
  },
  theTTCPriceShouldBeP1TTC: function (assert, p1) {

  },
  theTitlePageShouldBeP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('h2').text(), p1, "Page contains the title");
    });
  },
  theLessThan4TitleIs: function (assert) {

  },
  theFirstSliceIsP1: function (assert, p1) {

  },
  theSecondSliceIsP1: function (assert, p1) {

  },
  theThirdSliceIsP1: function (assert, p1) {

  },
  theFourthSliceIsP1: function (assert, p1) {

  },
  theTitleTotalIsP1: function (assert, p1) {

  }
});

export default Actionwords;