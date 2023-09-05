const { Router } = require('express')
const {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser
} = require('../controllers/usuarios.controllers')

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)

module.exports = router