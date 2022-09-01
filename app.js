// Server file
const express = require("express");
const mongoose = require('mongoose'); 
const app = express();
app.use(express.json())
require('dotenv').config()
mongoose.connect(process.env, {useNewUrlParser: true})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});