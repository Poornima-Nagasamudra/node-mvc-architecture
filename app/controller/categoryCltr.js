const Category = require('../model/category')

const categoryController = {}


categoryController.list = (req, res) => {
    Category.find() 
      .then((cat) => {
        res.json(cat)
      })
      .catch((err) => {
        res.json(err)
      })
}

categoryController.create = (req, res) => {
    const body = req.body
    const category = new Category(body)
    category.save()
    .then((cat) => {
        res.json(cat)
      })
      .catch((err) => {
        res.json(err)
      })
}

categoryController.show = (req, res) => {
    const id = req.params.id
    Category.findById(id)
    .then((cat) => {
        res.json(cat)
      })
      .catch((err) => {
        res.json(err)
      })
}

categoryController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id, body)
    .then((cat) => {
        res.json(cat)
      })
      .catch((err) => {
        res.json(err)
      })
}

categoryController.destroy = (req, res) => {
    const id = req.params.id
    Category.findByIdAndDelete(id)
    .then((cat) => {
        res.json(cat)
      })
      .catch((err) => {
        res.json(err)
      })
}

module.exports = categoryController