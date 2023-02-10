const startDB = require('./mongoosedb')

class loaders{
    start(){
        startDB(); 
    }
}

module.exports = new loaders(); 
