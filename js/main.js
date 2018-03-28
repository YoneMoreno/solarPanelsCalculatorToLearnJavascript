/*jslint browser:true */
"use strict";


function addMonths(elem) {
    var annualUseKw = 0, dailyUseKw, monthlyUseKw = 0;
    var months = document.getElementById(elem).getElementsByTagName('input');
    for (var i = 0; i < months.length; i++) {
        monthlyUseKw = Number(months[i].value);
        annualUseKw += monthlyUseKw;
    }
    dailyUseKw = annualUseKw / 365;
    return dailyUseKw;
}

function sunHours() {
    var hours;
    var theZone = document.forms.solarForm.zone.selectedIndex;
    theZone += 1; //We get from the zone selection
// the option selected which is an index in the array 0-based
// and we need to get zones from 1 to 6

    switch (theZone) {
        case 1:
            hours = 6;
            break;
        case 2:
            hours = 5.5;
            break;
        case 3:
            hours = 5;
            break;
        case 4:
            hours = 4.5;
            break;
        case 5:
            hours = 4.2;
            break;
        case 6:
            hours = 3.5;
            break;
        default:
            hours = 0;
    }
    return (hours);
}

function calculateSolar() {
    var dailyUseKw = addMonths('mpc');
    console.log('Our daily use of kw: ', dailyUseKw);


    var sunHoursPerDay = sunHours();
    console.log('Our hours of sun per day are: ', sunHoursPerDay);
}
