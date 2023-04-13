const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));//for serving static files
app.use(express.urlencoded());//help to take form data
//PUG SPECIFIC STUFF
app.set('view engine','pug');//set the template engine as pug
app.set('views',path.join(__dirname,'views'));//set the views directory
//ENDPOINTS
app.get('/applyNow',(req,res)=>{
        const parms = { };
    res.status(200).render('applyNow.pug',parms)
})
app.post('/applyNow',(req,res)=>{
   console.log(req.body)//DATA from the user is access by req.body
   const parms = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('applyNow.pug',parms)
})
//START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})