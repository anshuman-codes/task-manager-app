const sgMail= require('@sendgrid/mail')
const { text } = require('express')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail= (email,name)=>{
    sgMail.send({
        to: email,
        from: 'anshusharma656@gmail.com',
        subject:'Welcome to NoteTask',
        text:`Hi ${name}. Welcome to NoteTask. 
        
        You can seva yout to-do tasks and check them later.Let me know your experience`
    })
}

const sendCancelEmail= (email,name)=>{
    sgMail.send({
        to:email,
        from:'anshusharma656@gmail.com',
        subject:'You deleted your account',
        text:`Hi ${name}. I am sorry to know that you deleted your account at NoteTask.`
    })
}
module.exports= {
    sendWelcomeEmail,
    sendCancelEmail
}