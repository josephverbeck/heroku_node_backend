var nodemailer = require('nodemailer');

exports.contact = function(req, res){
    var name = req.body.name;
    var from = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;
    var to = process.env.ACCOUNT_NAME;
    var smptTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: to,
            pass: process.env.AWS_KEY
        }
    });
    console.log(to);
    var mailOptions = {
        from: from,
        to: to,
        subject: name+' | new message! '+phone,
        text: message
    }
    smptTransport.sendMail(mailOptions, function(error, response){
       if(error){
           console.log(error);
       }else{
           res.redirect('/')
       }
        smtpTransport.close();
    });
};

