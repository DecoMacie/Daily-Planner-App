var currentDate = $('#currentDay');
var currentHr = moment().format('HH');
const rowZ = $('.row')

// handle displaying the date
currentDate.text(moment().format('dddd, MMMM Do'));

// Function to compare event time with actual time
function timeConcept() {
    var rowID = $(this).attr("id");
    if (currentHr > rowID) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (currentHr < rowID) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    } 
    else {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    
  };

// Saves events to local storage
$('.saveBtn').on("click", function(event) {
    event.preventDefault();
    var appointment = $(this).siblings('textarea').val();
    var appointment_hr = $(this).attr('id')
    localStorage.setItem(appointment_hr, appointment);
    $('#status').text("Event successfully Saved!")
    setTimeout(function() { $('#status').hide(); }, 1500);
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


$.each(rowZ,timeConcept);
$(document).ready(loadEvents)