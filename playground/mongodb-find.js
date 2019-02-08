const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp' , (err,db) =>{
    if (err) {
    return console.log('Unable to connect to database server')
    }
    console.log('connected to Mongodb server');

    // db.collection('ToDos').find({
    //     _id: new ObjectID('5c5d33d2d40a33ba612663c2')
    // }).toArray().then((docs) => {
    //     console.log('ToDos');
    //     console.log(JSON.stringify(docs, undefined , 2));
    // } , (err) => {
    //         console.log('unable to fetch todos' , err)
    //     })
    
    //db.close();

    db.collection('Users').find({ name:'Varun'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
        
    } , (err) => {
            console.log('unable to fetch todos' , err)
        })

    
});

   