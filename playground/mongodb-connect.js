// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp' , (err,db) =>{
    if (err) {
    return console.log('Unable to connect to database server')
    }
    console.log('connected to Mongodb server');
});

    // db.collection('ToDos').insertOne({
    //     text:'something to do',
    //     completed:false
    // } , (err,result) => {
    //     if (err) {
    //         return console.log('Unable to write to database' , err)
    //     }
    //     console.log(JSON.stringify(result,undefined,2))
    // });

    // db.close();

//     db.collection('Users').insertOne({
//         name:'Varun',
//         age: 23,
//         location: 'India'
//     } , (err,result) => {
//         if (err) {
//             return console.log('Unable to write to database' , err)
//         }
//         console.log(result.ops[0]._id.getTimestamp());
        
        
//     });

//     db.close();
// })