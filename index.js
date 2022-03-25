const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));

//when you use cors for the first time on any browser, the cross-origin will be enabled on the browser for this server
//even after removing the app.use(cors()), the browser will still recognize the server 
app.use(cors()); //that will make COR-enabled for all origins)

//app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log("http://localhost:3000/");
});




app.post("/addUser", (req, res) => {
    try {
        let rawData = fs.readFileSync(path.resolve(__dirname, "users.json"));
        let users = JSON.parse(rawData);


        users.users.push(req.body)

        //console.log(books);
        let toPut = JSON.stringify(users);
        fs.writeFileSync(path.resolve(__dirname, "users.json"), toPut);
        //res.send(books);
    }
    catch (err) {
        console.log(err);
    }

});

app.post("/addIp", (req, res) => {
    try {
        let rawData = fs.readFileSync(path.resolve(__dirname, "users.json"));
        let users = JSON.parse(rawData);


        users.ipHistory.push(req.body)

        console.log(users.ipHistory);
        let toPut = JSON.stringify(users);
        fs.writeFileSync(path.resolve(__dirname, "users.json"), toPut);
        //res.send(books);
    }
    catch (err) {
        console.log(err);
    }

});
