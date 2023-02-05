var currentDate = $('#currentDay');

// handle displaying the date
function displayTime() {
    var todayIs = moment();
    currentDate.text(todayIs);
}

displayTime;
