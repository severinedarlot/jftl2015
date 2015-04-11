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


function forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber (assert, title_count, total_price) {
  actionwords.theCalculatorsPage(assert);
  actionwords.theNthSliceIsNumber(assert, "first", String(title_count));
  actionwords.theMasteringPriceShouldBePriceTTC(assert, String(total_price));
}

test('For the first slice, the price by title decreases according the title number: One: 63 (uid:8faaca20-002a-40dd-862b-b7c8d67c2989)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 1, 63]);
});

test('For the first slice, the price by title decreases according the title number: Two: 2 * (63-1) (uid:c0c07640-5b4b-4ad3-b42c-e4dfd43be837)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 2, 124]);
});

test('For the first slice, the price by title decreases according the title number: Six: 2 * (63 - 5) (uid:93c49689-c593-4398-8458-89c49258e31f)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 6, 348]);
});

test('For the first slice, the price by title decreases according the title number: Eleven: 11 * (63 - 10) (uid:3b694b9b-3b03-4933-a77d-76e85c227c5a)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 11, 583]);
});

test('For the first slice, the price by title decreases according the title number: Seven: 7 * (63 - 6) (uid:3e5ef3ce-ad86-4a5f-997e-46f8480d7eed)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 7, 399]);
});

test('For the first slice, the price by title decreases according the title number: 12 * (63 - 11) (uid:6392658a-a01f-41e1-9b1c-e31e3a7f9539)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 12, 624]);
});

test('For the first slice, the price by title decreases according the title number: 13 * (63 - 12) (uid:2fc65158-596c-44f6-9b95-0d47bcb2f1c4)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 13, 663]);
});

test('For the first slice, the price by title decreases according the title number: 14 *(63 - 13) (uid:3807201a-dfdd-4a3b-ba1b-a05026a4c20d)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 14, 700]);
});

test('For the first slice, the price by title decreases according the title number: 20 * (63 - 20) (uid:488032fd-02b3-4df5-987a-7deaa0962c03)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 20, 880]);
});

test('For the first slice, the price by title decreases according the title number: 24 * (63 - 19) (uid:7bdc4921-a19b-4c95-9e69-e22af81c4bae)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 24, 960]);
});

test('For the first slice, the price by title decreases according the title number: 25 * 40 (uid:88986b06-a8b1-4230-b3a7-d294a16a2fcc)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 25, 1000]);
});

test('For the first slice, the price by title decreases according the title number: 26 * 40 (uid:fba5408c-b0a1-497b-864a-c98b7fbec9d2)', function (assert) {
  forTheFirstSliceThePriceByTitleDecreasesAccordingTheTitleNumber.apply(this, [assert, 26, 1040]);
});




