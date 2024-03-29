const { Router } = require('express'); 

const constrolePessoas = require('./Controlers/controlePessoas')

const routes = Router(); 

app.get('/send')

routes.get('/health', (req, res) => {
    return res.status(200).json({messager: "Serve está on" })
} )

routes.post('/pessoas', constrolePessoas.cadastro) 
routes.get('/pessoas', constrolePessoas.listar) 
routes.get('/pessoas/:id', constrolePessoas.mostrar) 
routes.put('/pessoas/:id', constrolePessoas.update) 
routes.delete('/pessoas/:id', constrolePessoas.excluir) 

module.exports = routes; 