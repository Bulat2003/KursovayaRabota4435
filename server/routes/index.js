const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const cargoRouter = require('./cargoRouter')
const driverRouter = require('./driverRouter')
const ordersRouter = require('./ordersRouter')
const cargoTypeRouter = require('./cargoTypeRouter')
const carRouter = require('./carRouter')
const managerRouter = require('./managerRouter')
const orderStatusRouter = require('./orderStatusRouter')
const payRouter = require('./payRouter')
const payStatusRouter = require('./payStatusRouter')
const clientRouter = require('./clientsRouter')

router.use('/user', userRouter)
router.use('/cargo', cargoRouter)
router.use('/driver', driverRouter)
router.use('/order', ordersRouter)
router.use('/cargotype', cargoTypeRouter)
router.use('/car', carRouter)
router.use('/manager', managerRouter)
router.use('/orderstatus', orderStatusRouter)
router.use('/pay', payRouter)
router.use('/paystatus', payStatusRouter)
router.use('/client', clientRouter)


module.exports = router