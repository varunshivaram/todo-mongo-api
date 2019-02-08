const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp' , (err,db) =>{
    if (err) {
    return console.log('Unable to connect to database server')
    }
    console.log('connected to Mongodb server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c5d26633c6070172ddb1f7d')
    },{
        $set:{
            name: 'Tony'
        }
    },{
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=> {
        console.log(result);
    })

    
});