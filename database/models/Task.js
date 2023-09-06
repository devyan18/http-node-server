const { sequelize } = require('../database')
const { DataTypes } = require('sequelize')

/*
    tarea - task

    title: string
    done: boolean
*/

const TaskModel = sequelize.define('tasks', {
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN
})

module.exports = { TaskModel }