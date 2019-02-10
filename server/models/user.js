var mongoose = require('mongoose')

var User = mongoose.model('User', {
    email: {
        type:String,
        required: true,
        minlength: 1,
        trim:true
    }
})

module.exports = {User};

// var newUser = new User({
//     email:'  csvarun@example.com  '
// })

// newUser.save().then((doc) => {
//     console.log('Added new user' , doc)
// },(e) => {
//     if(e){
//         console.log('Unable to add user')
//     }
// })