var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app=Express();

app.use(cors());

var CONNECTION_STRING = "mongodb+srv://daryllmedina6:Asdf-asdf123@cluster0.p576f9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

var DATABASENAME = "MyDb";

var database;

app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING,(error,client) =>{
        database=client.db(DATABASENAME);
        console.log('Yay!');
    })
})

app.get('/api/books/GetBooks',(req,res) => {
    database.collection("books").find({}).toArray((error,result)=>{
    res.send(result);
    })
})

app.post('/api/books/AddBook', multer().none(), async (req, res) => {
    try {
        const numOfDocs = await database.collection("books").countDocuments();
        await database.collection("books").insertOne({
            id: numOfDocs + 1, 
            title: req.body.title,
            description: req.body.description,
            price: parseInt(req.body.price) 
        });
        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Failed to add book" });
    }
});
    
app.delete('/api/books/DeleteBook', async (req, res) => {
    try {
        const result = await database.collection("books").deleteOne({
            id: parseInt(req.query.id)
        });

        if (result.deletedCount === 1) {
            res.json("Deleted successfully!");
        } else {
            res.status(404).json("Book not found");
        }
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Failed to delete book" });
    }
});