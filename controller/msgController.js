const express = require('express');
const router = express.Router();
const Message = require('../models/message.js')
const db = require('../config/db.js')
const asyncHandler = require("express-async-handler");

//CHECK DB IF IT'S CONNECTED
db.on('error',() => {
    console.error('Connection error');
  })
  db.once('open', () => {
    console.log('Connected')
  })

//GET THE DATA FROM THE DB AND RENDER
exports.message_get = asyncHandler(async (req,res,next) => {
  const messages = await Message.find();
  res.render('index', { messages: messages });
});

//ADD MESSAGE TO THE DATABASE USING POST 
exports.message_post = asyncHandler(async (req,res,next) => {
  const newMessage = new Message({
    text: userMessage,
    user: userName,
    added: new Date(),
  });
  await newMessage.save();
  res.redirect('/');
});

/* GET users listing. */
exports.message_new = asyncHandler(async (req,res,next) => {
  res.render('form',{})
})