//require express
const express = require('express');
//invoke express
const app = express();
//port number
const port = process.env.PORT || 3000;

//serve up static
app.use(express.static('public');
//api get route
app.get('/api', function(req, res, send){
  app.send('Hello from API');
});
//catch all 404
app.use(function(req, res, send){
  res.status(404).json({error: {message: "404 Not Found"}})
})
//listen for requests
app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
