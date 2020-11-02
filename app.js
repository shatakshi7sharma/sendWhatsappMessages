const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const webApp = express();

webApp.use(bodyParser.urlencoded({
    extended: true
}));
webApp.use(bodyParser.json());

// Server Port
const PORT = 50000;

// Home route
webApp.get('/', (req, res) => {
    res.send(`Hello World.!`);
});

const webWhatsApp = require('./src/sendmessages');

// post route...................
webApp.post('/whatsapp', async (req, res) => {
    console.log(req.body);
    
    await webWhatsApp.sendmessages('Finally, i recieved message');
});

// Start the server
webApp.listen(PORT, () => {
    try{
        console.log(`Server is up and running at ${PORT}`);
    }catch(error){
        console.log(`error due to server `)
    }
    
});






// const express =require('express');
// const bodyParser =require('body-parser')
// let client = require('twilio')();
// require('dotenv').config();

// const webApp = express();

// webApp.use(bodyParser.urlencoded({
//     extended:true
// }));

// webApp.use(bodyParser.json());

// const PORT =3000;

// webApp.get('/',(req,res)=>{
//     res.send('Hello World 233455')
// })

// webApp.post('/whatsapp',async(req,res)=>{

//     client.messages.create({
//     // username = process.env.user,
//     // password = process.env.password,
//     from: 'whatsapp:'+14155238886,
//     to:'whatsapp:'+917015181301,
//     body:"message from nodejs"

// }).then(message=>console.log(message.sid))
// console.log(message.sid)
// });

// webApp.listen(PORT,()=>{
//     console.log(`Server is up and running at ${PORT}`)
// })






















// const express =require('express');
// const app =express();
// require('dotenv').config();
// 

// client.messages.create({
//     username = process.env.user,
//     password = process.env.password,
//     from: 'whatsapp:+14155238886',
//     to:'whatsapp:'+process.env.PHONE_NUMBER,
//     body:"message from nodejs"
// }).then(message=>console.log(message))





// var username = process.env.username;
// var password = process.env.password;
// var from_number = process.env.TRIAL_PHONE_NUMBER;
// var to_number = process.env.PHONE_NUMBER;
 
// const data = JSON.stringify({
//   "from": { "type": "whatsapp", "number": from_number },
//   "to": { "type": "whatsapp", "number": to_number },
//   "message": {
//     "content": {
//       "type": "text",
//       "text": "Hi! Your lucky number is " + Math.floor(Math.random() * 100)
//     }
//   }
// });
