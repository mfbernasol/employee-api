const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}));

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

//  app.get("/employees",function(req,res) {
//     Employee.find(function(err,foundEmployees){
//         if(!err){
//             res.send(foundEmployees);
//         }else{
//             res.send(err);
//         }
       
//     });
//  });


  
const port = process.env.PORT || 4000
// const port2 = 5300
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`));
