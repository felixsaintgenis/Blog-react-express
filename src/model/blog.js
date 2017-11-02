import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let BlogSchema = new Schema({

Title: String,
Content: String,
Author: String,




});

module.exports = mongoose.model('Blog', BlogSchema);
