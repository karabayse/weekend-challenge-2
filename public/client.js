console.log('client');


$(document).ready(onReady);

// global variable type --> defined within setTypeTo functions
var type;

function onReady(){
  console.log('hello');

// event listeners for calculator buttons
  $('#submit').on('click', submitFunction);
  $('#add').on('click', setTypeToAdd);
  $('#subtract').on('click', setTypeToSubtract);
  $('#multiply').on('click', setTypeToMultiply);
  $('#divide').on('click', setTypeToDivide);
  $('#clear').on('click', setTypeToClear);
}

// function to add input values
function setTypeToAdd(){
  type = "add";
  console.log(type);
}

// function to subtract input values
function setTypeToSubtract(){
  type = "subtract";
  console.log(type);
}

// function to multiply input values
function setTypeToMultiply(){
  type = "multiply";
  console.log(type);
}

// function to divide input values
function setTypeToDivide(){
  type = "divide";
  console.log(type);
}

// function to clear input values
function setTypeToClear(){
  type = "clear";
  console.log(type);
}

function submitFunction(){
  var firstInput = $('#firstNumberInput').val();
  console.log('first value',firstInput);
  var secondInput = $('#secondNumberInput').val();
  console.log('second value', secondInput);
  console.log("the type is",type);

// object to send via ajax call --> includes first input, second input
// and the type of task being performed: add, subtract, multiply, divide
  var calculatorRequest = {Input1:firstInput, Input2:secondInput, Type:type };
  console.log(calculatorRequest);

// ajax call to construct request and send as JSON file -->
// communicates with server --> acts as postman
  $.ajax({
    method:  'POST',
    url:  'http://localhost:3001/calculator',
    data:  calculatorRequest,
    success: function(response) {
      console.log(response);
      $("#resultsDiv").append("<h1>"+response+"</h1>"); // must concatenate
    }
  });
}
