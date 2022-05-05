const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path')
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.use('/', router);
//if they go to '/lol'
router.get('/lol', function(req, res){
  res.sendFile(path.join(__dirname, '/lol.html'));
});
app.use('/lol', router);
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
  console.log("to end press Ctrl + C");
});
