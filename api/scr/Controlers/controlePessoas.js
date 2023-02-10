const productModel = require ('../Models/productModel');

class constrolePessoas{
    async cadastro(req, res){
        const criarPessoas = await productModel.create(req.body);

        return res.status(200).json(criarPessoas);
    }

    async listar(){

    }

    async mostrar(){

    }

    async update(){

    }

    async excluir(){
        
    }
}

module.exports = new constrolePessoas(); 
