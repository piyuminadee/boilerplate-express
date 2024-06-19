let express = require('express');
const path = require('path');
let app = express();

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




























 module.exports = app;
