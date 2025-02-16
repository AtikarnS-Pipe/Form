const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "ROOT",
    host: "localhost",
    password: "mydatabase777",
    database: "commentsystem"
})

app.get('/comments',(req, res) => {
    db.query("SELECT * FROM comments",(err, result)=>{
       if(err){
        console.log(err);
       } else{
        res.send(result);
       }
    });
});
app.listen('3001',() =>{
    console.log('Server is running on port 3001 ');
})
app.post('/create',(req, res) =>{
    const email = req.body.email;
    const institute = req.body.institute;
    const occupation = req.body.occupation;

    db.query("INSERT INTO comments (email,institute,occupation) VALUES(?,?,?)",
        [email,institute,occupation],
    (err, result) => {
        if(err){
            console.log(err)
        } else{
            res.send("Values inserted");
        }
    }
    );
})