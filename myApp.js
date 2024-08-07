let express = require('express');
let bodyParser = require('body-parser')
const path = require('path');
let app = express();

app.use('/public',express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (request, response) => {

//     console.log("Hello World");
//     return response.send("Hello Express");
// }
// );
app.get('/now', (req,res,next) => {
    req.time = new Date().toString();
    next();
},function(req,res){    
    res.send({time : req.time})
})


app.get('/name', (req,res)=>{
    var firstName = req.query.first;
  var lastName = req.query.last;
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
})


app.get('/:word/echo', (req,res) => {
    const {word} = req.params;

    res.json({
        echo : word
    });
});


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


app.get('/json', (req, res, next) => {
    console.log("json")

    const logMsg = `${req.method} ${req.path} - ${req.ip}`;
    let message = "Hello json";
    console.log(logMsg);
    if(process.env.MESSAGE_STYLE === "uppercase"){
         message = message.toUpperCase();
    }
    res.json({message : message});
    next();
}

)

 module.exports = app;
