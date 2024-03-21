const express = require('express');
const path = require('path');
const fileParser = require("./01a._\ File_formats_bonanza/01._Program_Files/NodeParser.js ./01.Miscellaneous/")


const app = express()




app.get("/csvParser", (req, res) => {
    fileParser.readCSV("01a._ File_formats_bonanza/me.csv", (err, data) => {
        console.log(data)
        res.send({ "data" : data });
    });
});

app.get("/jsonParser", (req, res) => {
    fileParser.readJSON("01a._ File_formats_bonanza/me.json", (err, data) => {
        console.log(data)
        res.send({ "data" : data });
    });
});

app.get("/xmlParser", (req, res) => {
    fileParser.readXML("01a._ File_formats_bonanza/me.xml", (err, data) => {
        console.log(data)
        res.send({ "data" : data });
    });
});


// ------------------------------------------------------------------------



app.get("/csvFastAPI", async (req, res) => {

    const response = await fetch("http://127.0.0.1:8000/csvParser");

    if (response.ok) {
        const responseData = await response.json();

        res.send({ responseData });
    }
});

app.get("/jsonFastAPI", async (req, res) => {

    const response = await fetch("http://127.0.0.1:8000/jsonParser");

    if (response.ok) {
        const responseData = await response.json();

        res.send({ responseData });
    }
});

app.get("/xmlFastAPI", async (req, res) => {

    const response = await fetch("http://127.0.0.1:8000/xmlParser");

    if (response.ok) {
        const responseData = await response.json();

        res.send({ responseData });
    }
});



const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port:", PORT));