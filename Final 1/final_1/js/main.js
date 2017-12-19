// When the user submits the form
$('#options-form').on('submit', function (event) {
  event.preventDefault();
  // Find out what the user selected for #drive-train and save it
  var driveTrain = $('#drive-train').val();
  var engine = $('#engine').val();
  var transmission = $('#transmission').val();
  var color = $('#color').val();
  var interior = $('#interior').val();
  var options = $('#options').val();

  console.log(driveTrain);
  console.log(engine);
  console.log(transmission);
  console.log(color);
  console.log(interior);
  console.log(options);

  // if (#driveTrain === "AWD") {
  // } else if (#color === "Green") {
  // } else if (#engine === "4-cylinder") {}
});


// Hide .modal-bg
$('.modal-bg').hide();

// When the user clicks .open-modal
$('.open-modal').on('click', function (e) {
  e.preventDefault();
    // Fade in .modal-bg
    $('.modal-bg').fadeIn(500);
});
$('#close').on('click', function () {
	$('.modal-bg').fadeOut(500);
});

$('.signup').hide();

// not working :(

$('.open-signup').on('click', function (e) {
  e.preventDefault();
    // Fade in .modal-bg
    $('.signup').fadeIn(500);
});
$('#close').on('click', function () {
	$('.signup').fadeOut(500);
});
