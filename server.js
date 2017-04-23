console.log('server');

// dependencies --> after downloading express, indicating that this will use express
var express = require('express');
var path = require('path');
var app = express();  // call & execute express --> the thing we interact with
// that allows us to call methods
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
  var calculatedResponse;
  if (req.body.Type == "add"){
     calculatedResponse = parseInt(req.body.Input1) + parseInt(req.body.Input2);
  }
  res.send(calculatedResponse.toString()); // final thing that happens within function
// else if, etc.
});







// all servers listen:
app.listen(3001, function() {  // port followed by anonymous function
  console.log('listening on port 3001');
});  // server is listening and waiting

// test by running node server.js in Terminal --> going to localhost:3001
