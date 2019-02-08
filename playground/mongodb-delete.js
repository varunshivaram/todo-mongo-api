const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp' , (err,db) =>{
    if (err) {
    return console.log('Unable to connect to database server')
    }
    console.log('connected to Mongodb server');

    // db.collection('ToDos').deleteOne({text: 'something to do'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('ToDos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').findOneAndDelete({name: 'Varun'}).then((result) => {
    //     console.log(result);
    // })
    // db.collection('Users').deleteMany({name: 'Varun'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').findOneAndDelete({_id: new ObjectID("5c5d2a562e02b91821b4edca")}).then((result) => {
    //     console.log(result);
    // })



   // db.close();

    
});
