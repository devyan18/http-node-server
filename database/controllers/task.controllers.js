const { TaskModel } = require('../models/Task')

async function createTask (req, res) {
    const { title, done } = req.body

    await TaskModel.create({ title, done })

    res.send('created task')
}

async function listTasks (req, res) {

    const allTasks = await TaskModel.findAll()

    res.json(allTasks)
}

async function findTask (req, res) {
    const id = req.params.id

    const task = await TaskModel.findByPk(id)

    res.json(task)
}

async function updateTask (req, res) {
    const id = req.params.id
    const { title, done } = req.body

    await TaskModel.update({ title, done }, {
        where: {
            id: id
        }
    })

    res.send('updated task')
}

async function deleteTask (req, res) {
    const id = req.params.id

    await TaskModel.destroy({
        where: {
            id: id
        }
    })

    res.send('deleted task')
}


module.exports = {
    createTask,
    listTasks,
    findTask,
    updateTask,
    deleteTask
}
