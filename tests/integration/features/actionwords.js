import Ember from "ember";

var Actionwords = Ember.Object.extend({
  theCalculatorsPage: function (assert) {
    visit('/');
  },
  theMasteringPriceShouldBePriceTTC: function (assert, price) {
    andThen(function() {
      assert.equal(find('#mastering-price').text(), price + ' €', 
        "The mastering price is computed");
    });
  },
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
  theNthSliceIsNumber: function (assert, nth, number) {
    var input;
    switch(nth) {
      case 'first':
        input = 'input.first';
        break;
      case 'second':
        input = 'input.second';
        break;
      case 'third':
        input = 'input.third';
        break;
      case 'fourth':
        input = 'input.fourth';
        break;
    }
    andThen(function() {
      fillIn(input, number);
    });
  },
  dDPPriceIsP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('#ddp-price').text(), p1 + ' €', 
        "The ddp price is computed");
    });
  },
  youUncheckTheDDPOption: function (assert) {
    click('#ddp-checkbox');
  },
  aDDPWarningIsPrinted: function (assert) {
    andThen(function() {
      assert.ok(find('#ddp-message.hidden').length === 0,
        'The DDP message should be printed');
    });
  },
  theWAVSendingPriceIsPrice: function (assert, price) {
    andThen(function() {
      assert.equal(find('#wave-price').text(), price + ' €', 
        "The wave price is computed");
    });
  },
  theHTPriceIsP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('#ht-price').text(), p1 + ' € HT', 
        "The ht price is computed");
    });
  },
  theTTCPriceIsP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('#ttc-price').text(), p1 + ' € TTC', 
        "The ttc price is computed");
    });
  },
  youCheckTheOnlineOption: function (assert) {
    click('#online-checkbox');
  },
  aOnlineMessageIsPrinted: function (assert) {
    andThen(function() {
      assert.ok(find('#online-message.hidden').length === 0,
        'The online message should be printed');
    });
  },
  theOnlinePriceIsP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('#online-price').text(), p1 + ' €', 
        "The online price is computed");
    });
  },
  youCheckTheAlternativeOption: function (assert) {
    click('#alternative-checkbox');
  },
  youCheckTheStemsOption: function (assert) {
    click('#stems-checkbox');
  },
  shippingPriceIsP1: function (assert, p1) {
    andThen(function() {
      assert.equal(find('#shipping-price').text(), p1 + ' €', 
        "The shipping price is computed");
    });
  },
  youCheckTheShippingOption:function (assert) {
    click('#shipping-checkbox');
  }
});

export default Actionwords;