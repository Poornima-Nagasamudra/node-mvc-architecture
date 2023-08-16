const Task = require('../model/task')

const taskController = {}

taskController.list = (req, res) => {          // setup api
    Task.find() //mongoose
        .then((tasks)=> {
           res.json(tasks) //express
        })
        .catch((err)=>{
          res.json(err)
        })

}

taskController.create = (req, res) => {
    const body = req.body
    const task = new Task(body) //passing body as argument  so that task object created
    task.save()         // this is mongoose method
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
    
}

taskController.show = (req, res) => {         // by using id we can get
    const id = req.params.id 
    Task.findById(id)       // inbuilt method provided by mongoose
        .then((task)=>{
           res.json(task)
        })
        .catch((err)=>{
           res.json(err)
        })
}

taskController.update = (req, res) => {     // this is for updating 
    const id = req.params.id 
    const body = req.body 
    Task.findByIdAndUpdate(id, body, {new: true, runValidators:true })   // inbuilt method for put
        .then((task)=>{
          res.json(task)
        })
        .catch((err)=>{
          res.json(err)
        })
}

taskController.destroy = (req,res) => {  //this for deleting
    const id = req.params.id 
    Task.findByIdAndDelete(id)          //inbuilt method for delete
        .then((task)=>{
          res.json(task)
        })
        .catch((err)=>{
          res.json(err)
        })
}

module.exports = taskController
