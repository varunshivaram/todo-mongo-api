const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5c5ee58639eb7816e0af5051";

// if (!ObjectID.isValid(id)) {
//     console.log('Invalid ID');
// }

// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log('Todos',todos)
// })

// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     console.log('Todo',todo)
// })

// Todo.findById(id).then((todo)=> {
//     if (!todo) {
//         return console.log("ID not found")
//     }
//     console.log('Todo by ID' , todo)
// }).catch((e) => {
//     console.log(e);
// })

User.findById(id).then((user) => {
    if (!user){
        console.log('User not found')
    }
    console.log('User' , JSON.stringify(user , undefined,2))
},(e) => {
    console.log(e);
})
