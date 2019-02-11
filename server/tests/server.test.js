const expect = require('expect');
const request = require('supertest')
const {ObjectID} = require('mongodb')

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
},{
    _id: new ObjectID(),
    text:'Second test to do'
}];

beforeEach((done) => {
    Todo.deleteMany({}).then(() => {
       return Todo.insertMany(todos)
    }).then(() => done());
});

describe('POST /todos' , () => {
    it('should add a new todo' , (done) => {
        var text = 'Test Todo test'

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)
            })
            .end((err,res) => {
                if (err){
                    return done(err);
                }
               
            
            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));

        });
    });

    it('should not create todo with invalid data' , (done) => {
        request(app)
         .post('/todos')
         .send({})
         .expect(400)
         .end((err,res) => {
            if (err){
               return done(err);
            }
    
            

            Todo.find().then((todos) => {
                expect(todos.length).toBe(2)
                done();
             }).catch((e) => done(e))
        });

    });

    
});

describe('GET /todos/' , () => {
    it('should return all todos' , (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(todos.length).toBe(2);
            })
            .end(done);

    })
})

describe('GET todos/:id' , () => {
    it('should return the todo' , (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text)
            })
            .end(done);
    })

    it('should return 404 if todo does not exist' , (done) => {
        var hexID = new ObjectID().toHexString()

        request(app)
            .get(`/todos/${hexID}`)
            .expect(404)
            .end(done)
    })

    it('should return 404 if ID isnot valid',(done) => {
        request(app)
        .get('/todos/123')
        .expect(404)
        .end(done);
    })
})