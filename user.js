// import the mongooes package
const mongoose = require ('mongoose');
// **** SChema

//definde the class schema title and body
const Schema = mongoose.Schema;
// Defind the structure of the collection
const userScema = new Schema({
    firstName: String,
    lastName: String,
    DoB : Date,
    isMarried : Boolean,
}) ;

//  schema auto id 
userScema.path('_id');

// creating a module / converting Schema into a module to construct documents
const userModel = mongoose.model('userScema',userScema);


// Exporting the Schema name of the collection 
module.exports = userModel;
