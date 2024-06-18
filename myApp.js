let express = require('express');
let app = express();

app.get("/", (request, response) => {

    console.log("Hello World");
    return response.send("Hellp");
}
);































 module.exports = app;
