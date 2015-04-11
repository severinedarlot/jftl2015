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
  actionwords.theTitleTotalIsP1(assert, "0");
  actionwords.theMasteringPriceShouldBePriceTTC(assert, "0");
});

test('Show the title total number (uid:d470e52e-3d0b-4afd-852e-b3b797a65b61)', function (assert) {
  actionwords.theCalculatorsPage(assert);
  actionwords.theNthSliceIsNumber(assert, "first", "4");
  actionwords.theNthSliceIsNumber(assert, "second", "2");
  actionwords.theNthSliceIsNumber(assert, "third", "1");
  actionwords.theNthSliceIsNumber(assert, "fourth", "3");
  actionwords.theTitleTotalIsP1(assert, "10");
});

function pricesForOneTitle (assert, nth, price) {
  actionwords.theCalculatorsPage(assert);
  actionwords.theNthSliceIsNumber(assert, String(nth), "1");
  actionwords.theMasteringPriceShouldBePriceTTC(assert, String(price));
}

test('Prices for one title: Less than 4 minutes (uid:0270aee3-aed0-43a8-9196-90ee6348cc25)', function (assert) {
  pricesForOneTitle.apply(this, [assert, 'first', 63]);
});

test('Prices for one title: Between 4 and 8 minutes (uid:251963de-5584-481a-9095-9381784e3f30)', function (assert) {
  pricesForOneTitle.apply(this, [assert, 'second', 78.75]);
});

test('Prices for one title: Between 8 and 12 minutes (uid:b52179b3-aa18-451e-b1f2-09655331838c)', function (assert) {
  pricesForOneTitle.apply(this, [assert, 'third', 94.5]);
});

test('Prices for one title: More than 12 minutes (uid:23fdff01-7636-494b-8c9a-9e086e1ae9d2)', function (assert) {
  pricesForOneTitle.apply(this, [assert, 'fourth', 110.25]);
});


function thePriceByTitleDecreasesAccordingTheTitleNumber (assert, title_count, total_price) {
  actionwords.theCalculatorsPage(assert);
  actionwords.theNthSliceIsNumber(assert, "first", String(title_count));
  actionwords.theMasteringPriceShouldBePriceTTC(assert, String(total_price));
}

test('The price by title decreases according the title number: One (uid:8faaca20-002a-40dd-862b-b7c8d67c2989)', function (assert) {
  thePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 1, 63]);
});

test('The price by title decreases according the title number: Two is 62*2 (uid:c0c07640-5b4b-4ad3-b42c-e4dfd43be837)', function (assert) {
  thePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 2, 124]);
});

test('The price by title decreases according the title number: Six is 58*6 (uid:93c49689-c593-4398-8458-89c49258e31f)', function (assert) {
  thePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 6, 348]);
});




