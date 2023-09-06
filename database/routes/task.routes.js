const { Router } = require('express')
const {
    createTask,
    deleteTask,
    findTask,
    listTasks,
    updateTask
} = require('../controllers/task.controllers')

const router = Router()


router.get('/', listTasks)
router.get('/:id', findTask)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router