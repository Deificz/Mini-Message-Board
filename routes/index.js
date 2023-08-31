var express = require('express');
var router = express.Router();
const Message = require('../models/message')
const db = require('../config/db.js')

//CHECK DB IF IT'S CONNECTED
db.on('error',() => {
  console.error('Connection error');
})
db.once('open', () => {
  console.log('Connected')
})

//GET THE DATA FROM THE DB AND RENDER
router.get('/', async function(req, res, next) {
  try{
    const messages = await Message.find();
    res.render('index', { messages: messages });
  }catch{
    console.error('Message retrieval failed');
  }
});

//ADD MESSAGE TO THE DATABASE USING POST 
router.post('/new', async function(req,res,next){
  const userName = req.body.userName;
  const userMessage = req.body.userMessage;
  
  try{
    const newMessage = new Message({
      text: userMessage,
      user: userName,
      added: new Date(),
    });
    await newMessage.save();
    res.redirect('/');
  }catch{
    res.status(500).json({ error: 'Message failed' });
  }
});

module.exports = router;
