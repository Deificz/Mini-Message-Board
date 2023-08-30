
//DECLARE MONGOOSE AND SCHEMA
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CREATE NEW SCHEMA
const messageSchema = new Schema({
   
        text: {
            type: String
        },
        user: {
            type: String
        },
        added: {
            type: Date
        }

});

messageSchema.virtual("url").get(function() {
    return `/messages/${this._id}`;
  });

//EXPORT THE CREATED SCHEMA
  module.exports = mongoose.model("Messages", messageSchema);