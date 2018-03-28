/*jslint browser:true */
"use strict";

var annualUseKw = 0, dailyUseKw = 0, monthlyUseKw = 0;

function addMonths(elem) {
    var months = document.getElementById(elem).getElementsByTagName('input');
    console.log(months);

    for (var i = 0; i < months.length; i++) {
        monthlyUseKw = Number(months[i].value);
        annualUseKw += monthlyUseKw;
    }
    dailyUseKw = Math.ceil(annualUseKw / 365);
    return dailyUseKw;
}

var dailyUseKw = addMonths('mpc');
console.log(dailyUseKw);