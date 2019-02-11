const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/TodoApp',{ useNewUrlParser: true } );

module.exports = {mongoose};