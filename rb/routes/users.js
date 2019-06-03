var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
  {
  	phone: "+40957685994",
  	firstname: "samsepi0l",
    surname:"Domityrif",
    company:"Hoyt",
    email:"dhfh@yh.net"
  }, 
  {
    phone: "+40957685994",
    firstname: "samsepi0l",
    surname:"Atyrif",
    company:"Hunday",
    email:"pph@yh.net"
  }, 
  {
    phone: "+40957685994",
    firstname: "samsepi0l",
    surname:"Geterow",
    company:"Hoyt",
    email:"dhfh@yh.net"
  }, 
  {
    phone: "+40957685994",
    firstname: "Leonid",
    surname:"Domityrif",
    company:"Hoyt",
    email:"dhfh@yh.net"
  }, 
  {
    phone: "+40957685994",
    firstname: "samsepi0l",
    surname:"Domityrif",
    company:"Hoyt",
    email:"dhfh@yh.net"
  }, 


  ]);
});

module.exports = router;