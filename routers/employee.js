const express=require('express')
const Controller=require('../controller/employee')
const route=express.Router();



route.post("/employee1",Controller.ControllerData);
route.get("/employee2",Controller.secondControllerData);
route.get("/employee3",Controller.thirdControllerData);
route.get("/employee4",Controller.fourControllerData);
route.put("/employee5",Controller.fiveControllerData);
route.put("/employee6",Controller.sixControllerData);



module.exports=route;