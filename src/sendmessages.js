// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken,{
    lazyloading:true
})

const sendmessages = async(message)=>{
try{
    await client.messages.create({
        from: 'whatsapp:+14155238886',  
        body: message,
        to:'whatsapp:+91(my_phone_no.)'
      })
}catch(error){
    console.log(`error while sending message , ${error}`)
}

}

module.exports ={
    sendmessages
}


