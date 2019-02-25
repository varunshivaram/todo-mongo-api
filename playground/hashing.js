// const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')

data = {
    id:4
}

var token = jwt.sign(data , '123abc')
console.log(token);

decode = jwt.verify(token ,'123abc')
console.log('decode',decode)
// var message = 'I am user number 3'
// var hash = SHA256(message).toString();

// console.log(message);
// console.log(hash)