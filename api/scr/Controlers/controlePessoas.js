const productModel = require ('../Models/productModel');

class constrolePessoas{
    async cadastro(req, res){
        const criarPessoas = await productModel.create(req.body);

        return res.status(200).json(criarPessoas);
    }

    async listar(req, res){
        const pessoas = await productModel.find();

        return res.status(200).json(pessoas);
    }

    async mostrar(req, res){
        try{
            const { id } = req.params; 
        
            const pessoas = await productModel.findById(id);

            if(!pessoas){
                return res.status(404).json({message: "pessoa não achada"})
            }

            return res.status(200).json(pessoas); 

        } catch (error){
            return res.status(404).json({message: "ESTÁ ERRADO"})
        }
    }

    async update(){

    }

    async excluir(){
        
    }
}

module.exports = new constrolePessoas(); 
