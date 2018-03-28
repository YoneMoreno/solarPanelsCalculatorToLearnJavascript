/*jslint browser:true */
"use strict";

var annualUseKw = 0, dailyUseKw = 0, monthlyUseKw = 0;

var months = document.getElementById('mpc').getElementsByTagName('input');
console.log(months);

for(var i = 0; i < months.length; i++){
    monthlyUseKw = Number(months[i].value);
    annualUseKw += monthlyUseKw;
}
console.log(annualUseKw);