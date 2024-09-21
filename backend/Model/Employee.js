const mongoose= require('mongoose')

const Employeeschema=new mongoose.Schema({

    email:String,
    password:String
})
const EmployeeModel=mongoose.model("employee",Employeeschema)
module.exports=EmployeeModel