const dbConn=require('../database/connection')
const ControllerData=async(req,res)=>{
    const data=req.body;
    try{
       const result=await dbConn.insertInDb(data);
       return res.send(result)
    }
    catch(err){
        console.log(err);
    }
}

// "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1640781204638-employee.json

// Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""

// Query the collection ""employee"" and list all the documents
// Query the collection ""employee"" and list the employees who are having salary more than 30000
// Query the collection ""employee"" and list the employees who are having experience more than 2 years.
// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 
// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.
// Delete all the documents from ""employee"" where last company is Y"
const secondControllerData=async(req,res)=>{
    const data={"salary":{$gt:"30000"}};

    try{
       const result=await dbConn.fetchInDb(data);
       return res.send(result)
    }
    catch(err){
        console.log(err);
    }
}

const thirdControllerData=async(req,res)=>{
    const data={"overallExp":{$gt:"2"}};

    try{
       const result=await dbConn.fetchInDb(data);
       return res.send(result)
    }
    catch(err){
        console.log(err);
    }
}

const fourControllerData=async(req,res)=>{
    const data={$and:[{"yearGrad":{"$gt":"2015"}},{"overallExp":{"$gt":"1"}}]}
    ;

    try{
       const result=await dbConn.fetchInDb(data);
       return res.send(result)
    }
    catch(err){
        console.log(err);
    }
}
const fiveControllerData=async(req,res)=>{
    const filter={$and:[{"salary":{"$gte":"65000"}},{"salary":{"$lte":"70000"}}]}
    const value={$set:{"salary":"50000"}}

    try{
       const result=await dbConn.fetchInDb(filter,value);
       return res.send(result)
    }
    catch(err){
        console.log(err);
    }
}

const sixControllerData=async(req,res)=>{
    const data={"lastName":"Y"}

    try{
       const result=await dbConn.deleteInDb(data);
       return res.send(result)
    }
    catch(err){
        console.log(err);
    }
}



module.exports={ControllerData,secondControllerData,thirdControllerData,fourControllerData,fiveControllerData,sixControllerData}