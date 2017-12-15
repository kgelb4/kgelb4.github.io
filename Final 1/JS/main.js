// When the user clicks the hamburger icon .hamburger add the class active (.active) to the nav (nav) to slide the Sidebar
// When the user clicks .close (x), removeClass
// When the user clicks (.click) the button ('button') cars (.cars), hide (hide()) "SUVS" abd "Trucks/Minivans"

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



  // If you get stuck refer to lesson 11 ice cream solution
  // If driveTrain is equal to (===) "AWD" AND exteriorColor is equal to "green"
    // Fade in the modal with the green AWD car
});
