const router = require('express').Router()
const Order = require('../db/models/order')

// Gettting all the items
router.get('/', async (req, res, next) => {
	try {
		const { data } = await Order.findAll()
		res.send(data)
	} catch (error) {
		next(error)
	}
})

// Getting an item by id
router.get('/:id', async (req, res) => {
	let id = req.params.id
	let order = await Order.findById(id).catch((error) => {
		res.json(error)
	})
	res.json(order)
})

// Adding a new item
router.post('/', async (req, res) => {
	let { id, user_id, item_id, status } = req.body
	await Order.create({
		id: id,
		userId: user_id,
		itemId: item_id,
		status: status,
	})
		.then((newOrder) => {
			res.json(newOrder)
		})
		.catch((error) => {
			res.json(error)
		})
})

// TODO
// //updating an existing item
// router.put('/',(req, res)=>{
//     res.json()
// });

// //deleting an existing item
// router.delete('/',(req, res)=>{
//     res.json()
// });

module.exports = router
