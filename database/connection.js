const {MongoClient}=require('mongodb');


const url="mongodb+srv://saravanan10722:sara1072@cluster0.bwbfetf.mongodb.net/?retryWrites=true&w=majority";
const client=new MongoClient(url);
const insertInDb=async(data)=>{
    await client.connect();
    const database=client.db("employee");
    const collection=database.collection("info");
   

    const result=await collection.insertMany(data);
    client.close();
    return result;

}

const fetchInDb=async(data)=>{
    await client.connect();
    const database=client.db("employee");
    const collection=database.collection("info");
    const result=await collection.find(data).toArray();
    client.close();
    return result;

}
const updateInDb=async(filter,value)=>{
    await client.connect();
    const database=client.db("employee");
    const collection=database.collection("info");
    const result=await collection.updateMany(filter,value);
    client.close();
    return result;

}
const deleteInDb=async(filter)=>{
    await client.connect();
    const database=client.db("employee");
    const collection=database.collection("info");
    const result=await collection.deleteMany(filter);
    client.close();
    return result;

}

module.exports={insertInDb,fetchInDb,updateInDb,deleteInDb}