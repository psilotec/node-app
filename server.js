var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

// Configure app to use bodyParser()
// gets the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
var port = process.env.PORT || 8080;

// ROUTES FOR API
// get an instance of the express Router
var router = express.Router();

// Test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'api test successful' });
});

// More routes for API will happen here

// REGISTER ROUTES
// all routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Server running on port ' + port);
