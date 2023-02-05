var currentDate = $('#currentDay');

// handle displaying the date
currentDate.text(moment().format('dddd, MMMM Do'));
// console.log(moment().format('DD MMM YYYY'))


// // handle displaying the date
// function displayTime() {
//     var todayIs = moment().format('DD MMM YYYY');
//     currentDate.text(todayIs);
// }

// displayTime;
