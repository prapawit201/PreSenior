const express = require('express')
const app = express()
const books = require('./db')
const  cors = require('cors')
const bodyParser = require('body-parser')
var MongoClient = require("mongodb").MongoClient;

 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect("mongodb://127.0.0.1:27017", (error, client) => {

    if (error) throw error;
  var db = client.db("obd2-test");


  app.get('/', (req, res) => {
    res.send('Hello World')
})

// //TODO : การเรียกข้อมูลใน DB โดยใช้ postman เข้ามาดู
// // : เป็นการเรียกดูหนังสือทั้งหมดใน DB ว่ามีทั้งหมดเท่าไหร่โดยเรียกเป็น array 
// app.get('/books', (req, res) => {
//     res.json(books)
// })

// // : เป็นการเรียกดูหนังสือที่เราต้องการโดยเรียกเป็น id ใน DB โดยใช้คำสั่ง GET
// app.get('/books/:id', (req, res) => {
//     res.json(books.find(book => book.id === req.params.id))
// })

// // : เป็นการเพิ่มหนังสือลงไปใน DB โดยใช้คำสั่ง POST
// app.post('/books', (req, res) => {
//     books.push(req.body)
//     res.status(201).json(req.body)
// })

// // : เป็นการเเก้ไขข้อมูลหนังสือใน DB โดยใช้คำสั่ง PUT
// app.put('/books/:id', (req, res) => {
//     const updateIndex = books.findIndex(book => book.id === req.params.id)
//     res.json(Object.assign(books[updateIndex], req.body))
// })

// // : เป็นการลบข้อมูลหนังสือใน DB โดยใช้คำสั่ง DELETE
// app.delete('/books/:id', (req, res) => {
//     const deletedIndex = books.findIndex(book => book.id === req.params.id)
//     books.splice(deletedIndex, 1)
//     res.status(204).send()
// })
app.post('/test',function(req, res, next) {
  console.log(req.body)

    db.collection("obd2-test").insertOne(
        {
            ArduinoNo: req.body.ArduinoNo,
            Temperature: req.body.Temperature,
            Humidity: req.body.Humidity,
        },
        (err, result) => {
          if (err) return res.status(500).send(err.toString());
          console.log('ok')
          res.sendStatus(200);
        }
      );
  });

  app.get('/data',function(req, res, next) {
    console.log(req.body)
  
      db.collection("obd2-test").find()
      .toArray((err, result) => {
        if (err) return res.status(500).send(err.toString());

      
    
        
       
        res.status(200).send(result);
      })
    });
//! : เป็นการเชื่อม port ว่าเราจะไป portไหน 
app.listen(5555, () => {
    console.log('Start server at port 5555.')
})

})