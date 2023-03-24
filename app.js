const express=require('express')
const app=express();
const employee=require('./routers/employee')
const bodyparser=require('body-parser')
app.use(bodyparser.json());

app.use(employee)
app.listen(3001,()=>{
    console.log("server is connected 3001 ")
})