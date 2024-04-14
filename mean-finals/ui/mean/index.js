// STEPS:

// Install node and agular/cli
// Signup for a mongodb account (Select I'm just exploring)
// CHoose free version and retain Cluster0 name
// Add a user account for the cluster
// Browse collections
// Create a databse MyDb
// Create a collection books
// Add a couple of documents into the collection
// Get connection string

// Create backet folder called api
// TYpe npm init -y
// npm install express --save
// npm install cors
// npm install mongodb@4.1.0 --save
// npm instdall multer --save

// open the project on VSCode

// Create a file called index.js

// Run the backend - node index.js


// import all packages installed
var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

//Create an instance of express app
var app=Express();
//Make use of the CORS module
app.use(cors());

//Indicate the connection string from mongodb
var CONNECTION_STRING = "mongodb+srv://sef:NewWave123@cluster0.jaheaoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//Indicate the name of the database
var DATABASENAME = "MyDb";

//instantiate the mongodbclient
var database;

//create a listener
app.listen(5038, ()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log(`Yay!`);
    })
})

// app.listen(5038, () => {
//     Mongoclient.connect(CONNECTION_STRING, (error, client) => {
//         if (error) {
//             console.error("Error connecting to MongoDB:", error);
//             return;
//         }
//         database = client.db(DATABASENAME);
//         console.log("Connected to MongoDB successfully!");
//     });
// });

//ROUTES TO ALL ACTIONS

//get all dbase data
app.get('/api/books/GetBooks',(req, res) => {
    database.collection("books").find({}).toArray((error,result)=>{
        res.send(result);
    })
})


app.post('/api/books/AddBook', multer().none(), async (req, res) => {
    try {
    const numOfDocs = await database.collection("books").countDocuments();
    await database.collection("books").insertOne({
    id: (numOfDocs + 1).toString(),
    title: req.body.title,
    description: req.body.descr,
    price: req.body.price
    
    });
    res.json("Added Successfully");
    } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ error: "Failed to add book" });
    }
    });

// app.post('/api/books/AddBook', multer().none(), async (req, res) => {
//     try {
//         const numOfDocs = await database.collection("books").countDocuments();
//         await database.collection("books").insertOne({
//             id: (numOfDocs + 1).toString(),
//             title: req.body.title,
//             description: req.body.description, // Add description field
//             price: req.body.price // Add price field
//         });
//         res.json("Added Successfully");
//     } catch (error) {
//         console.error("Error adding book:", error);
//         res.status(500).json({ error: "Failed to add book" });
//     }
// });


app.delete('/api/books/DeleteBook', (req, res)=>{
    database.collection("books").deleteOne({
        id:req.query.id
    });
    res.json("Deleted successfully!");
})