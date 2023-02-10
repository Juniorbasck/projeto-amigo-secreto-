const { Router } = require('express'); 

const routes = Router(); 


routes.get('/health', (req, res) => {
    return res.status(200).json({messager: "Serve está on" })
} )

module.exports = routes; 