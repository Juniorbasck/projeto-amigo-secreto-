const mongoose = require('mongoose'); 

async function startDB(){
    await mongoose.connect('mongodb+srv://adilsonjunior:123444@cluster0.dojrhhw.mongodb.net/test');
}

module.exports = startDB; 
