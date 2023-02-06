var currentDate = $('#currentDay');
// var saveButton1 = $('#9');
// var saveButton2
// var saveButton3
// var saveButton4 = $('#9');
// var saveButton5 = $('#9');
// var saveButton1 = $('#9');
// var saveButton1 = $('#9');
// var saveButton1 = $('#9');
// var saveButton1 = $('#9');

// handle displaying the date
currentDate.text(moment().format('dddd, MMMM Do'));


// $('#9').on("click", handleFormSubmition(SubmitEvent,'9AM'));
$('#10').on("click", handleFormSubmition);
$('#11').on("click", handleFormSubmition);
$('#12').on("click", handleFormSubmition);
$('#13').on("click", handleFormSubmition);
$('#14').on("click", handleFormSubmition);
$('#15').on("click", handleFormSubmition);
$('#16').on("click", handleFormSubmition);
$('#17').on("click", handleFormSubmition);


function handleFormSubmition(event, x) {
    event.preventDefault();
    var appointment = document.getElementById("9AM").value;
    // var appointmentJSON = JSON.stringify(appointment)
    localStorage.setItem("9AM", appointment);
    // appointment.text = localStorage.getItem("9AM");
    alert("OKAY")
    console.log(appointment)
}
// // handle displaying the date
// function displayTime() {
//     var todayIs = moment().format('DD MMM YYYY');
//     currentDate.text(todayIs);
// }

// displayTime;
