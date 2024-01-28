const express =require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'employee',
})

app.post('/create',(req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;
  const gender = req.body.gender;
  const empid = req.body.empid;
  const dob = req.body.dob;

  db.query(
    'INSERT INTO employees(name, age, country, position, wage, gender, empid, dob) VALUES(?,?,?,?,?,?,?,?)',
    [name, age, country, position, wage, gender, empid, dob],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting data");
      } else {
        res.status(200).send("Values Inserted");
      }
    }
  );
});


app.get('/employees',(req, res) => {
  db.query("SELECT * FROM employees",(err,result) =>{
    if (err){
      console.log(err);
    }else{
      res.send(result);
    }

  })
})



app.listen(3003, ()=>{
  console.log("Your server is running on port 3001")
});
