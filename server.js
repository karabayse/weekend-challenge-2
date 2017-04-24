console.log('server');

// dependency --> after downloading express, indicates that this
// will use express
var express = require('express');

// dependency --> used in res.sendFile(path.join(.....))
var path = require('path');

// call & execute express --> the thing we interact with
// that allows us to call methods --> app.use, app.get, app.post
var app = express();

// dependency
var bodyParser = require('body-parser');

// data
var calculatorData = [
  {input1: 'input value 1'},
  {input2: 'input value 2'},
];
// middle ware --> request comes to top of server file and looks for where
// it matches:  before running routes, run this line
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
// serve back our HTML --> responsive; when we go to slash, run this code
// get route
// mailbox below (address is written in the browser)
app.get('/', function(req, res) {
  console.log('in get route');
  // response:  method to call on the res
  res.sendFile(path.join(__dirname, 'public/index.html')); // get this file
  // from the index folder
});


app.post('/calculator', function(req, res) {
  console.log("this is our input request",req.body.Type);
  // variable that changes depending on calculation type
  var calculatedResponse;
  // conditional statements to distinguish amongst calculation types
  // the parseInt() function parses a string and returns an integer
  if (req.body.Type == "add"){
     calculatedResponse = parseInt(req.body.Input1) + parseInt(req.body.Input2);
  }
  else if
     (req.body.Type == "subtract"){
     calculatedResponse = parseInt(req.body.Input1) - parseInt(req.body.Input2);
  }
  else if
     (req.body.Type == "multiply"){
     calculatedResponse = parseInt(req.body.Input1) * parseInt(req.body.Input2);
  }
  else if
     (req.body.Type == "divide"){
     calculatedResponse = parseInt(req.body.Input1) / parseInt(req.body.Input2);
  }
  // "clear" does not seem to be working properly
  else if
     (req.body.Type == "clear"){
     calculatedResponse = ();
   }
    // final thing that happens within function
    res.send(calculatedResponse.toString());
  });


// all servers listen --> port followed by anonymous function
app.listen(3001, function() {
  console.log('listening on port 3001');
});  // server is listening and waiting

// test by running node server.js in Terminal --> going to localhost:3001
