const productModel = require ('../Models/productModel');

class constrolePessoas{
    async cadastro(req, res){
        
        const emailjaExiste = await productModel.findOne({ email: email });

        if(emailjaExiste){
            return res.status(400).json({message: "email jáa cadastrado"})
        }

        const {nome, email} = req.body;
        if(!nome || email){
            return res.status(400).json({message: "tem que preencher todo os campos"})
        }
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

    async update(req, res){
        try {
            const { id } = req.params;

            await productModel.findByIdAndUpdate(id, req.body);        

            res.status(200).json({message: "produto editado"});

        } catch (error) {

            return res.status(404).json({message: "falha em editar"});
    
        }

    }

    async excluir(req, res){
        
        try {
            const { id } = req.params;

            const pessosDeletar = await productModel.findByIdAndRemove(id);

            if(!pessosDeletar){
                return res.status(404).json({message: "pessoa não encontrada"}); 
            }

            return res.status(200).json({message: "pessoa removida"});


        } catch (error) {

            return res.status(404).json({message: "falha em deletar"});
        }

    }
}

module.exports = new constrolePessoas(); 
