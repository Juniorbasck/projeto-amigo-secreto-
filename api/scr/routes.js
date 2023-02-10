const { Router } = require('express'); 

const constrolePessoas = require('./Controlers/controlePessoas')

const routes = Router(); 


routes.get('/health', (req, res) => {
    return res.status(200).json({messager: "Serve está on" })
} )

routes.post('/pessoas', )
module.exports = routes; 