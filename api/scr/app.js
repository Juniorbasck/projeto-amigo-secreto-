const express = require('express');
const routes = require('./routes');
const nodemailer = require ('nodemailer');

const app = express(); 

const user = "adilson.alves.neves.junior@use23top.com";
const pass = "CurryMVP30@"

app.use(express.json()); 
app.use(routes); 

app.get('/send', (req,res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.umbler.com", 
        port: 587,
        auth: {user, pass}
    })

    transporter.sendMail({
        from: user,
        to: "pedro@gmail.com",
        replyTo: "adilson.juniorcomunicacao@gmail.com"
        Subject: "Ola, você ganhou o amigo socreto"
        Text: "Ola, você ganhou o amigo socreto"
    }).then(info=>{
        res.send(info)
    }).catch(error =>{
        res.send(error)
    })
})



module.exports = app; 




























