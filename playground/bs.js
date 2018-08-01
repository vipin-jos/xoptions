// https://github.com/MattL922/implied-volatility
// https://www.npmjs.com/package/black-scholes
// https://github.com/MattL922/black-scholes
// https://github.com/MattL922/greeks
// https://github.com/stevenmiller888/black-scholes


const bs = require('black-scholes');
const {getImpliedVolatility} = require('../libs/implied-volatility');
const {getDelta,getGamma,getTheta,getVega,getRho} = require('../libs/greeks');

var underlyingPrice = 11346;
var strikePrice = 11300;
var optionPrice = 117.05;
var daysToExpireInDays = 29;
var riskFreeInterestRate = 0.1;
var callOrPut = 'put';

var daysToExpireInYears = daysToExpireInDays/365;

var iv = getImpliedVolatility(optionPrice,underlyingPrice,strikePrice,daysToExpireInYears,riskFreeInterestRate,callOrPut);
var ivtodisplay = iv*100;
ivtodisplay = ivtodisplay.toFixed(2);
console.log('IV : ',ivtodisplay);

var delta = getDelta(underlyingPrice,strikePrice,daysToExpireInYears,iv,riskFreeInterestRate,callOrPut);
var gamma = getGamma(underlyingPrice,strikePrice,daysToExpireInYears,iv,riskFreeInterestRate);
var theta = getTheta(underlyingPrice,strikePrice,daysToExpireInYears,iv,riskFreeInterestRate,callOrPut,365);
var vega = getVega(underlyingPrice,strikePrice,daysToExpireInYears,iv,riskFreeInterestRate);
var rho = getRho(underlyingPrice,strikePrice,daysToExpireInYears,iv,riskFreeInterestRate,callOrPut,100);
console.log(delta,gamma, theta,vega,rho);

var oneSD = underlyingPrice*iv*Math.sqrt(daysToExpireInYears);
var oneSDLL = underlyingPrice-oneSD;
var oneSDUL = underlyingPrice+oneSD;

var twoSD = oneSD*2;
var twoSDLL = underlyingPrice-twoSD;
var twoSDUL = underlyingPrice+twoSD;

var threeSD = oneSD*3;
var threeSDLL = underlyingPrice-threeSD;
var threeSDUL = underlyingPrice+threeSD;

console.log('1SD', oneSD.toFixed(2), oneSDLL.toFixed(2), oneSDUL.toFixed(2));
console.log('2SD', twoSD.toFixed(2), twoSDLL.toFixed(2), twoSDUL.toFixed(2));
console.log('3SD', threeSD.toFixed(2), threeSDLL.toFixed(2), threeSDUL.toFixed(2));


 