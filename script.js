var currentDate = $('#currentDay');
var currentHr = moment().format('HH');
const rowZ = $('.row')
// var saveButton1 = $('#9');
// var saveButton2
// var saveButton3
// var saveButton4 = $('#9');
// var saveButton5 = $('#9');
// var saveButton1 = $('#9');
// var saveButton1 = $('#9');
// var saveButton1 = $('#9');
// var saveButton1 = $('#9');

console.log(currentHr)
console.log(rowZ)

// handle displaying the date
currentDate.text(moment().format('dddd, MMMM Do'));



// Function to compare event time with actual time
// function timeConcept() {
//     var rowID = rowZ.attr('id');
//     console.log(rowID)
//     if (currentHr > rowID) {
//         rowZ.removeClass("future");
//         rowZ.removeClass("present");
//         rowZ.addClass("past");
//     } else if (currentHr < rowID) {
//         rowZ.removeClass("present");
//         rowZ.removeClass("past");
//         rowZ.addClass("future");
//     } 
//     else {
//         rowZ.removeClass("future");
//         rowZ.removeClass("past");
//         rowZ.addClass("present");
//     }
//   };


$('.saveBtn').on("click", function(event) {
    event.preventDefault();
    console.log(this)
    var appointment = $(this).siblings('textarea').val();
    var appointment_hr = $(this).attr('id')
    localStorage.setItem(appointment_hr, appointment);
    console.log(appointment_hr + " " + appointment)
    console.log(appointment)
});

// Loading saved events from local storage
function loadEvents() {
    $('#9hr').val(localStorage.getItem('9AM'));
    $('#10hr').val(localStorage.getItem('10AM'));
    $('#11hr').val(localStorage.getItem('11AM'));
    $('#12hr').val(localStorage.getItem('12AM'));
    $('#13hr').val(localStorage.getItem('1PM'));
    $('#14hr').val(localStorage.getItem('2PM'));
    $('#15hr').val(localStorage.getItem('3PM'));
    $('#16hr').val(localStorage.getItem('4PM'));
    $('#17hr').val(localStorage.getItem('5PM'));
}





// $('#10').on("click", function(event) {
//     event.preventDefault();
//     var appointment = document.getElementById("10AM").value;
//     localStorage.setItem("10AM", appointment);
//     // appointment.text = localStorage.getItem("9AM");
//     alert("OKAY")
//     // console.log($('.row').attr('id');)
// });
// $('#11').on("click", handleFormSubmition);
// $('#12').on("click", handleFormSubmition);
// $('#13').on("click", handleFormSubmition);
// $('#14').on("click", handleFormSubmition);
// $('#15').on("click", handleFormSubmition);
// $('#16').on("click", handleFormSubmition);
// $('#17').on("click", handleFormSubmition);


// function handleFormSubmition(event) {
//     event.preventDefault();
//     var appointment = document.getElementById("9AM").value;
//     localStorage.setItem("9AM", appointment);
//     // appointment.text = localStorage.getItem("9AM");
//     alert("OKAY")
//     console.log(appointment)
// }
// // // handle displaying the date
// // function displayTime() {
// //     var todayIs = moment().format('DD MMM YYYY');
// //     currentDate.text(todayIs);
// // }

// // displayTime;
rowZ.each(function () {
    var rowID = rowZ.attr('id');
    console.log(rowID)
    if (currentHr > rowID) {
        rowZ.removeClass("future");
        rowZ.removeClass("present");
        rowZ.addClass("past");
    } else if (currentHr < rowID) {
        rowZ.removeClass("present");
        rowZ.removeClass("past");
        rowZ.addClass("future");
    }
    else {
        rowZ.removeClass("future");
        rowZ.removeClass("past");
        rowZ.addClass("present");
    }
 
});
$(document).ready(loadEvents)