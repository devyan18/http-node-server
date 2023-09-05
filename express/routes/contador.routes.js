const { Router } = require('express')
const { controlador, incrementar, disminuir } = require('../controllers/controladores')

const router = Router()

router.get('/', controlador)
router.get('/incrementar', incrementar)
router.get('/disminuir', disminuir)

module.exports = router