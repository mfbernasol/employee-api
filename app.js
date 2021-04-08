const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(express.urlencoded({extended:true}));
app.use(cors());
mongoose.connect('mongodb+srv://test-user:user1234@cluster0.jdj0v.mongodb.net/employee', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const employeeSchema = {
    lastName: String,
    firstName: String, 
    email: String, 
    workID: String,
    datePositiveTest: {
      type: Date
    },
    dateNegativeTest: 
    {
      type: Date
    },
    vacStatus: {
      type: Boolean,
      default: false
    },
    infected: {
      type: Boolean,
      default: false
    }, 
    dateOfVac: {
      type: Date
    },
    inQuarantine: {
      type: Boolean,
      default: false
    },
    quarDate: {
      type: Date
    },
    quarEndDate: {
      type: Date
    }
    
  }

const Employee = mongoose.model("Employee", employeeSchema);
app.get("/",function(req,res){
  res.send("Hello World");
});

//GET employees
 app.get("/employees",function(req,res) {
    Employee.find(function(err,foundEmployees){
        if(!err){
            res.send(foundEmployees);
        }else{
            res.send(err);
        }
       
    });
 });

 //POST 
 app.post("/employees",function(req,res){

  const newEmployee = new Employee({
    lastName: req.body.lname,
    firstName: req.body.fname,
    email: req.body.email,
    workID: req.body.workID,
    datePositiveTest: req.body.datePositiveTest,
    dateNegativeTest: req.body.dateNegativeTest,
    vacStatus: req.body.vacStatus,
    dateOfVac: req.body.dateVac,
    infected: req.body.infected,
    inQuarantine: req.body.quaratine,
    quarDate: req.body.quarDate,
    quarEndDate: req.body.quarEndDate


  });
  newEmployee.save(function(err){
    if(!err){
      res.send("Successfully added employee")
    }else{
      res.send(err);
    }
  });
 });


  
const port = process.env.PORT || 4000
// const port2 = 5300
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`));
