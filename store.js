// import the mongooes package
const mongoose = require ('mongoose');
// **** SChema

//definde the class schema title and body
const Schema = mongoose.Schema;
// Defind the structure of the collection
const storeScema = new Schema({
    productName: String,
    amount: Number,
    lastUpdated : Date,
    distributors : Array,
}) ;
//  schema auto id
storeScema.path('_id');

// creating a module / converting Schema into a module to construct documents
const storeModel = mongoose.model('storeScema',storeScema);

// const doc = new Model();
// const found = doc._id instanceof mongoose.Types.ObjectId;

// Exporting the Schema name of the collection 
module.exports = storeModel;
