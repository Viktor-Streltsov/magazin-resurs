const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const reviewRouter = require('./reviewRouter')
const payRouter = require('./payRouter')

router.use('/product', productRouter)
router.use('/user', userRouter)
router.use('/review', reviewRouter)
router.use('/pay', payRouter)



module.exports = router