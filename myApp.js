let express = require('express');
const path = require('path');
let app = express();

app.use('/public',express.static(path.join(__dirname + '/public')));


// app.get("/", (request, response) => {

//     console.log("Hello World");
//     return response.send("Hello Express");
// }
// );


app.get('/',  function(req, res){
    const options = {
        root : path.join(__dirname, 'views' )
    };
    const fileName = "index.html";
    res.sendFile(fileName, options, function(err){
        if(err){
            console.log('Error Sending file:', err);
        }
        else{
            console.log('Sent:', fileName);
        }
    })
})


app.get('/json', (requ, res) => {
    console.log("json")

    
    let message = "Hello json";

    if(process.env.MESSAGE_STYLE === "uppercase"){
         message = message.toUpperCase();
    }
    res.json({message : message});
}

)

 module.exports = app;
