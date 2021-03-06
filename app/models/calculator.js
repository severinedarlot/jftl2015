import Ember from 'ember';

var Calculator = Ember.Object.extend({
  basicPrice: 63, 
  miniPrice: 40,  
  tva: 20,
  ddpPackage: 35,
  ddpByTitle: 5,

  firstSliceCount: 0,
  secondSliceCount: 0,
  thirdSliceCount: 0,
  fourthSliceCount: 0,
  stems: false,
  ddp: true,
  shipping: false,

  totalCount: function () {
    return parseInt(this.get('firstSliceCount')) + 
      parseInt(this.get('secondSliceCount')) + 
      parseInt(this.get('thirdSliceCount')) + 
      parseInt(this.get('fourthSliceCount'));
  }.property('firstSliceCount', 'secondSliceCount', 'thirdSliceCount', 'fourthSliceCount'),

  stemsTotalPrice: function () {
    if (this.get('stems')) {
      return Math.ceil(this.get('titlesPrice') * 20 / 100);
    } 
    return 0;
  }.property('stems', 'titlesPrice'),

  alternativePrice: function () {
    if (this.get('alternative')) {
      return Math.ceil(this.get('titlesPrice') * 10 / 100);
    } 
    return 0;
  }.property('alternative', 'titlesPrice'),

  shippingPrice: function () {
    if (this.get('shipping')) {
      return 10;
    } else {
      return 0;
    }
  }.property('shipping'),

  ddpPrice: function () {
    if (this.get('ddp') && this.get('totalCount') > 0) {
      return this.get('ddpPackage') + this.get('totalCount') * this.get('ddpByTitle');
    } else {
      return 0;
    }
  }.property('ddp', 'totalCount'),

  titlesPrice: function () {
    var songPrice = this.get('basicPrice') - this.get('totalCount') + 1;
    if (songPrice < this.get('miniPrice')) {
      songPrice = this.get('miniPrice');
    }
    return songPrice * this.get('totalCount') + 
      this.secondExtra(songPrice) + this.thirdExtra(songPrice) + this.fourthExtra(songPrice);
  }.property('totalCount'),

  onlinePrice: function () {
    if(this.get('online')) {
      return -Math.ceil(this.get('beforeOnline') * 15 / 100);
    } else {
      return 0;
    }
  }.property('online', 'beforeOnline'),

  beforeOnline:  function () {
    return this.get('titlesPrice') + this.get('stemsTotalPrice') + this.get('ddpPrice') + this.get('alternativePrice');
  }.property('titlesPrice', 'stemsTotalPrice', 'ddpPrice', 'alternativePrice'),

  htPrice: function () {
    return this.get('beforeOnline') + this.get('shippingPrice') + this.get('onlinePrice');
  }.property('beforeOnline', 'shippingPrice', 'onlinePrice'),

  ttcPrice: function () {
    return this.get('htPrice') + this.get('htPrice') * this.get('tva') / 100;
  }.property('htPrice'),

  secondExtra: function (songPrice) {
    return 1/4 * songPrice * parseInt(this.get('secondSliceCount'));
  },

  thirdExtra: function (songPrice) {
    return 1/2 * songPrice * parseInt(this.get('thirdSliceCount'));
  },

  fourthExtra: function (songPrice) {
    return 3/4 * songPrice * parseInt(this.get('fourthSliceCount'));
  }

});

export default Calculator;