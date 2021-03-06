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

function calculatePanel() {
    var userSelection = document.forms.solarForm.panel.selectedIndex;
    var optionArray = document.forms.solarForm.panel.options;
    var power = optionArray[userSelection].value;
    var name = optionArray[userSelection].text;
    var panelPowerName = [power, name];
    return (panelPowerName);
}

function calculateSolar() {
    var dailyUseKw = addMonths('mpc');
    console.log('Our daily use of kw: ', dailyUseKw);


    var sunHoursPerDay = sunHours();
    console.log('Our hours of sun per day are: ', sunHoursPerDay);

    var minKwNeeded = dailyUseKw / sunHoursPerDay;
    console.log('The minimum kw needed: ', minKwNeeded);

    var realKwNeeds = minKwNeeded * 1.25; //There are clouds and
    // rain so we need to increment they kw being generated
    console.log('The real kw needs are: ', realKwNeeds);

    var realWattNeeds = realKwNeeds * 1000;
    console.log('In watts our real needs are: ', realWattNeeds);

    var panel = calculatePanel();
    var panelPower = panel[0];
    var panelName = panel[1];
    console.log('The selected panel is: ', panel,
        ' its power is: ', panelPower,
        ' and its name is: ', panelName);

    var numberPanelsNeeded = Math.ceil(realWattNeeds / panelPower);
    console.log('Total number of panels needed: ' + numberPanelsNeeded);

    var feedback = '';
    feedback += '<p>Based on your average daily use of' +
        ' ' + Math.round(dailyUseKw) + ' kWh,' +
        ' you will need to purchase ' + numberPanelsNeeded + ' '+ panelName +' solar' +
        ' panels to offset 100%' +
        ' of your electricity bill.</p>';
    feedback += '<h2>Additional details</h2>';
    feedback += '<p>Your average daily electricity consumption: ' + dailyUseKw + ' kWh per day</p>';
    feedback += '<p>Average sunshine per day: ' + sunHoursPerDay + ' hours</p>';
    feedback += '<p>Realistic watts needed per hour: ' + realWattNeeds + ' ' +
        'watts/hour</p>';
    feedback += '<p>The ' + panelName + ' panel you selected' +
        ' generates about ' + panelPower + ' watts per hour</p>';

    document.getElementById('feedback').innerHTML = feedback;
}
