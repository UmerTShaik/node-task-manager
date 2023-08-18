// //CRUD operations
// const {MongoClient, ObjectId}  = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);
// const database = 'task-maanger';

// const id = new ObjectId();
// //console.log(id);
// //console.log(id.getTimestamp());

// async function getData()
// {
//   let result = await client.connect();
//   console.log("Connected successfully to server")
//   const db = result.db(database);
//   const collection = db.collection("products");
//   const collection1 = db.collection("users");

//   db.collection('users').deleteMany({
//     age:"27"
//   }).then((result)=>{
//     console.log(result)
//   }).catch((error)=>{
//     console.log(error)
//   })





//   // const udpatePromsie = db.collection('products').updateOne({
//   //   _id: new ObjectId("64d28a39ebf45fb08429f4f3")
//   // }, {
//   //     $inc: {
//   //       age: 1
//   //     }
//   // }).then((result)=>{
//   //   console.log(result)
//   // }).catch((error)=>{
//   //   console.log(error)
//   // })
// //  const updateManyPromise = db.collection('users').updateMany({
// //     name:"Roar"
// //  },{
// //   $set:{
// //     name:'Mike'
// //   }
// //  }).then((result)=>{
// //     console.log(result.modifiedCount)
// //  }).catch((error)=>{
// //     console.log(error)
// //  })

// //   db.collection('products').insertOne({
// //     _id:id,
// //     name:'Tariq',
// //     age:'29'
// //   } ) 
    
// //   db.collection('users').findOne({name: 'Tariq'}, (error, user) =>{
// //     if(error){
// //         return console.log('Unable to fetch')
// //     }

// //     console.log(user)
// //   })
//   //  const response = await collection.find({name:'Tariq'}).toArray();
//   //  console.log(response);
//   //  const response1 = await collection.find({name:'Tariq'}).count();
//   //  console.log(response1);
// }

// getData();











// //
// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient;//gives acces to CRUD functions

// // const connectionUrl = 'mongodb://127.0.0.1:27017';
// // const databaseName = 'task-manager';

// // MongoClient.connect(connectionUrl, {useNewUrlParser:true,useUnifiedTopology:true}, (error, client)=>{
// //     if(error){
// //         console.log('Unable to connect to database!')
// //     }
// //     console.log('Connected correctly!')

// // })