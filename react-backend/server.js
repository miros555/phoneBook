var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
var ObjectID = require('mongodb').ObjectID;
//var MongoClient = require('mongodb').MongoClient;
const MongoClient = require("mongodb").MongoClient;

var app = express();
var db;

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }));




var artists = [
  //{"status":"success","message":"https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_2723.jpg"}
{
  phone: "+9408-6535-9805",
  name: "Ramon Lee",
  company:"Reno",
  email:"ramon.lee@example.com",
  photo:"https://randomuser.me/api/portraits/men/78.jpg"
},
{
  phone: "+9031-858-05-56",
  name: "Amy Jean-Baptiste",
  company:"Domus",
  email:"amy.jean-baptiste@example.com",
  photo:"https://randomuser.me/api/portraits/women/84.jpg"
},
{
  phone: "+9031-858-05-56",
  name: "Leevi Rintala",
  company:"Jirone",
  email:"leevi.rintala@example.com",
  photo:"https://randomuser.me/api/portraits/men/18.jpg"
},
{
  phone: "+9031-858-05-56",
  name: "Melissa Kraft",
  company:"Quiner",
  email:"melissa.kraft@example.com",
  photo:"https://randomuser.me/api/portraits/women/68.jpg"
},
{
  phone: "+4031-120-0991",
  name: "Willis Nathaniel",
  company:"Amazon",
  email:"nathaniel.willis@example.com",
  photo:"https://randomuser.me/api/portraits/men/45.jpg"
}

];


/*
app.get('/artists', function (req, res) {
  res.send(artists);
});
*/

app.get('/artists', function (req, res) {
  db.collection('artists').find().toArray(function (err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
})

/*
app.get('/artists/:id', function (req, res) {
  var artist = artists.find(function (artist) {
    return artist.id === Number(req.params.id);
  })
  console.log(artist);
  res.send(artist);
});
*/

app.get('/artists/:id', function (req, res) {
  db.collection('artists').findOne({ _id: ObjectID(req.params.id) }, function (err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  })
})

app.put('/artists/:id', function (req, res) {
  db.collection('artists').updateOne(
    { _id: ObjectID(req.params.id) },
    { phone: req.body.phone,
    name: req.body.name,
    company:req.body.company,
    email:req.body.email,
    photo:req.body.photo },
    function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    })
})

app.delete('/artists/:id', function (req, res) {
  db.collection('artists').deleteOne(
    { _id: ObjectID(req.params.id) },
    function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    res.sendStatus(200);
  })
})

app.get('/', function (req, res) {
  res.send('Hello API');
});


app.post('/artists', urlencodedParser, function (req, res) {
  var artist = {
    //d: Date.now(),
    phone: req.body.phone,
    name: req.body.name,
    company:req.body.company,
    email:req.body.email,
    photo:req.body.photo
   }

//artists.push(artist);
db.collection('artists').insert(artist, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(artist);
  })
})



app.put('/artists/:id', function (req, res) {
  var artist = artists.find(function (artist) {
    return artist.id === Number(req.params.id)
  });
  artist.phone = req.body.phone;
  artist.name = req.body.name;
  artist.company = req.body.company;
  artist.email = req.body.email;
  artist.photo = req.body.photo;
  res.send(artist);
})

app.delete('/artists/:id', function (req, res) {
  artists = artists.filter(function (artist) {
    return artist.id !== Number(req.params.id)
  })
  res.sendStatus(200);
})


/*
app.listen(3012, function () {
  console.log('API app started')
})
*/



MongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
  if (err) {
    return console.log(err);
  }
  //var db;
  db = database;
  app.listen(3012, function () {
    console.log('API app started');
  })
})
