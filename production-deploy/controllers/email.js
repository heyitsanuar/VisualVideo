'use strict'

function sendEmail(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    if(email && message && name){
        message = 'Mensaje enviado de '+ email + ' por ' + name + '... ' + message;

        require('gmail-send')({
            user: 'visualvideomx@gmail.com',           // Your GMail account used to send emails
            pass: 'personal102930802312a',           // Application-specific password
            to:   'visualvideomx@gmail.com',           // Send to yourself
            subject: 'Mensaje de Página Web',
            text:    message,  // Plain text
        })({});  

        res.status(200).send({message: 'Mensaje enviado correctamente.'});
    }else{
        res.status(200).send({message: 'Por favor, ingrese todos los campos.'});
    }
    
}

module.exports = {
    sendEmail
};