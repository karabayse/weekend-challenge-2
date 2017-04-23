console.log('client');


$(document).ready(onReady);
var type;

function onReady(){
  console.log("hello");

  $('#submit').on('click',sampleFunction);
  $('#add').on('click', setTypeToAdd);
}

function setTypeToAdd(){
  type = "add";
  console.log(type);
}

//setTypetoSubtract

function sampleFunction(){
  var firstInput = $('#firstNumberInput').val();
  console.log('hey first value',firstInput);
  var secondInput = $('#secondNumberInput').val();
  console.log('hey second value', secondInput);
  console.log("the type is",type);

  var calculatorRequest ={Input1:firstInput, Input2:secondInput, Type:type };
  console.log(calculatorRequest);

  $.ajax({
    method:  'POST',
    url:  'http://localhost:3001/calculator',
    data:  calculatorRequest,
    success: function(response) {
      console.log(response);
      $("#resultsDiv").append("<h1>"+response+"</h1>");
    }
  });
}

// function onReady() {
// //loadCalculator();
// // event listeners
//
//   //$('#subtract').on('click', subtractButton);
//   //$('#multiply').on('click', multiplyButton);
//   //$('#divide').on('click', divideButton);
//   //$('#clear').on('click', clearButton);
// }



// ajax is a call that is constructing the request and sending as JSON file
// how we communicate with the server
  // $.ajax({
  //   method:  'GET',
  //   url:  '/calculator',
  //   data:  objectToSend,
  //   type: 'POST',
  // // when the request comes back successful, execute this function
  //   success: function() {
  //     console.log(response);
  //   }
  // });
//}
