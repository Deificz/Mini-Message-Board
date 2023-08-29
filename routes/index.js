var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Aeron",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Brylle",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

router.get('/', function(req, res, next) {
  res.redirect('/new')
});

router.post('/new', function(req,res,next){
  const userName = req.body.userName;
  const userMessage = req.body.userMessage;
  messages.push({text: userMessage, user: userName, added: new Date()});
  res.redirect('/');
});

module.exports = router;
