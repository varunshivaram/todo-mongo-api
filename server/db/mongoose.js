const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoApp',{ useNewUrlParser: true } );

module.exports = {mongoose};