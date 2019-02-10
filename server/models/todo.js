var mongoose = require('mongoose')

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        minlength: 1,
        required: true
    },
    completed:{
        type: Boolean ,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

module.exports = {Todo};

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// }) 

// newTodo.save().then((doc) => {
//     console.log('Save new Todo', doc)
// }, (e) => {
//     if (e) {
//         console.log('Unable to save Todo')
//     }
// })