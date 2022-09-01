const mongoose = require('mongoose'); 
const storeModel = require('./models/storeModel') 
const userModel = require('./models/userModel') 

mongoose.connect('mongodb://localhost/homework3', {useNewUrlParser: true});
//create a docment >> use .save or .creat() to save the data as a doc. in the database

// Create Docs.

userModel.create({
    firstName: "Hadel",
    lastName: "Al Rajhi",
    DoB : 1998-4-15,
    isMarried : true,
}, (error, blogpost) =>{ console.log(error,blogpost)
})

userModel.create({
    firstName: "Bilal",
    lastName: "Al-Aweni",
    DoB : 1989-4-15,
    isMarried : true,
}, (error, blogpost) =>{ console.log(error,blogpost)
})

userModel.create({
    firstName: "Hadel",
    lastName: "Al-Hajri",
    DoB : 1990-4-15,
    isMarried : false,
}, (error, blogpost) =>{ console.log(error,blogpost)
})

storeModel.create({
 productName: "Panadol night",
 amount: 14000,
 lastUpdated : 2022-8-20,
 distributors : ["Souq.com", "noon.com", "Amazon.com"],
}, (error, blogpost) =>{ console.log(error,blogpost)
})
storeModel.create({
    productName: "Panadol Extra",
    amount: 16000,
    lastUpdated : 2022-8-1,
    distributors : ["Aldawaa", "Nahdi"],
}, (error, blogpost) =>{ console.log(error,blogpost)
})
storeModel.create({
    productName: "Panadol cold flu",
    amount: 10000,
    lastUpdated : 2022-8-31,
    distributors : ["Ghodaf Pharmacy","United Pharmacy"],
}, (error, blogpost) =>{ console.log(error,blogpost)
})

// Finde married ppl
// const cursor = db.collection('userModel').find({ isMarried: true});
const Married  = userModel.find({ isMarried: true}, (error, blogspot) =>{ 
    console.log(error,blogspot)
})
let id = storeModel.path('_id').instance // ObjectID
let id_ = userModel.path('_id').instance // ObjectID

// let id = "5cb436980b33147489eadfbb";
// const found = doc._id instanceof mongoose.Types.ObjectId;

BlogPost.findByIdAndUpdate(id,{ title: distributors.$push["lemon Pharmacy"]
}, 
(error, blogspot) =>{ 
    console.log(error,blogspot)
})

BlogPost.findByIdAndDelete(id_, (error, blogspot) =>{
     console.log(error,blogspot)
})