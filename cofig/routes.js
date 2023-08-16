const express = require('express')
const router = express.Router()

const taskController = require('../app/controller/taskCrl')
const categoryController = require('../app/controller/categoryCltr')

router.get('/api/tasks', taskController.list)
router.post('/api/tasks', taskController.create)
router.get('/api/tasks/:id', taskController.show)
router.put('/api/tasks/:id', taskController.update)
router.delete('/api/tasks/:id', taskController.destroy)

router.get('/api/category', categoryController.list)
router.post('/api/category', categoryController.create)
router.get('/api/category/:id', categoryController.show)
router.put('/api/category/:id', categoryController.update)
router.delete('/api/category/:id', categoryController.destroy)

module.exports = router 