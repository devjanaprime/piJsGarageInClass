console.log( 'garage.js sourced' );
// garage array
var garage=[];

var addCar = function(){
  console.log( 'in addCar' );
  // create car object from user input
  var newCar = {
    year: document.getElementById( 'yearIn' ).value,
    make: document.getElementById( 'makeIn' ).value,
    model: document.getElementById( 'modelIn' ).value,
    picURL: document.getElementById( 'picURLIn' ).value,
    description: document.getElementById( 'descriptionIn' ).value
  }; // end newCar
  // alert user if necessary fields are left blank
  if( newCar.year == '' || newCar.make == '' || newCar.model == '' ){
    alert( 'Please fill stuff in, yo' );
  } // end missing inputs
  else{
    // continue if needed fields are filled in
    clearInputs();
    // push car into garage
    garage.push( newCar );
    // display cars
    displayCars();
  } // end all needed inputs filled is
} // end addCar

var clearInputs = function(){
  console.log( 'in clearInputs' );
  document.getElementById( 'yearIn' ).value='';
  document.getElementById( 'makeIn' ).value='';
  document.getElementById( 'modelIn' ).value='';
  document.getElementById( 'picURLIn' ).value='';
  document.getElementById( 'descriptionIn' ).value='';
} // end clearInputs

var displayCars = function(){
  console.log( 'in displayCars' );
  console.log( garage );
  // empty our div element
  document.getElementById( 'allCars' ).innerHTML='';
  // for each car in the garage, add a list item with year, make, and modelIn
  for( var i = 0; i < garage.length; i++ ){
    // car information (year, make, model)
    var carInfo = '<h2>' + garage[ i ].year + ' ' + garage[ i ].make + ' '
    + garage[ i ].model + '</h2><img src="' + garage[ i ].picURL + '"><p>'
    + garage[ i ].description + '</p>';
    // append car info to output div
    document.getElementById( 'allCars' ).innerHTML += carInfo;
  } // end for
} // end displayCars
