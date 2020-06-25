const mongoose = require('mongoose')

const testShema = new mongoose.Schema({

            interview:[{
                question: String,
                answer: String,
                score: Number
            }],
            mcq:[{
                question: String,
                options: [],
                correct: String
                
            }]
})

const Test = mongoose.model('Test', testShema)
module.exports = Test