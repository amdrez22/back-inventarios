const { Router } = require('express')

const { 
    createInventario,
    getInventarios,
    getInventarioByID,
    updateInventarioByID,
    deleteInventarioByID

} = require('../controllers/inventario')

const router = Router()


router.post('/', createInventario)

router.get('/', getInventarios)

router.get('/:id', getInventarioByID)

router.put('/:id', updateInventarioByID)

router.delete('/:id', deleteInventarioByID)




module.exports = router