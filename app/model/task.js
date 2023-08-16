const mongoose = require('mongoose')  //it gives schema base solution to model your application data

const Schema = mongoose.Schema  // it defines shape of the document within the collection
const taskSchema = new Schema({  // create constructor function, it has object has parameter,within oject we have to specify all properties
      title: {
         type: String,
         required: [true, 'title is mandatory']         //server side validation
      },
      description: {
         type: String
      },
      completed: {
         type: Boolean
      },
      dueDate: {
         type: Date
      },
      createdAt: {
         type: Date,
         default: Date.now  // keep default value
      }
     // ,
    //   categoryId: {
    //     type: Schema.Types.ObjectId,
    //     ref : 'Category',      // referring to model
    //     required: true
    //   }
}, {timestamps:true})
                         // model name., schema
const Task = mongoose.model('Task', taskSchema)  // to use our schema definition we ned convert our blogschema into model 

module.exports = Task