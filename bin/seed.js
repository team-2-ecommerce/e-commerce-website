const database = require('../server/db/database')
const User = require('../server/db/models/User')
const Item = require('../server/db/models/Item')
const Order = require('../server/db/models/Order')

/*
    Seeding the database and filling it with dummy data
    ****************** CAUTION ************************
    ALL OF THE FAKE DATA HAS BEEN RANDOMLY GENERATED BY
    https://www.fakenamegenerator.com/gen-random-us-us.php
    ***************************************************
*/

const lemons = [
	{
		id: 1,
		name: 'Eureka Lemon',
		description:
			'The Eureka lemon tree is considered to be a true lemon tree, as it is not the result of any hybridization.',
		price: 1000,
		imageUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Eureka-Lemons.jpg',
	},
	{
		id: 2,
		name: 'Pink Variegated Lemon Tree',
		description:
			'As the lemons ripen, their skin takes on a solid yellow color, while the inner flesh is pale pink.',
		price: 2150,
		imageUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Variegated-Pink-Lemons.jpg',
	},
	{
		id: 3,
		name: 'Lisbon Lemon',
		description:
			'Lisbon lemons are an old heirloom variety, which is believed to have their origins in Portugal. ',
		price: 1980,
		imageUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Lisbon-Lemons.jpg',
	},
	{
		id: 4,
		name: 'Meyer Lemon',
		description:
			' It is a cross between a lemon and a sweet orange such as a mandarin.',
		price: 4200,
		imageUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Meyer-Lemons.jpg',
	},
	{
		id: 5,
		name: 'Primofori Lemon',
		description:
			'This tree hails from Spain, where it is locally known as the Fino lemon tree, the Blanco lemon tree, or the Mesero lemon tree.',
		price: 3000,
		imageUrl:
			'https://www.greenandvibrant.com/sites/default/files/inline-images/types-of-lemon/Primofiore-Lemons.jpg',
	},
	{
		id: 6,
		name: 'Varna Lemon',
		description:
			'This lemon tree is native to Spain, where it is the second most important lemon tree after the Primofiori.',
		price: 1700,
		imageUrl:
			'http://snaturefruits.com/wp-content/uploads/2016/03/LIMON-snature.jpg',
	},
]

const orders = [
	{
		id: 1,
		userId: 1,
		type: 'fulfilled',
	},
	{
		id: 2,
		userId: 2,
		type: 'fulfilled',
	},
	{
		id: 3,
		userId: 3,
		type: 'pending',
	},
	{
		id: 4,
		userId: 4,
		type: 'pending',
	},
	{
		id: 5,
		userId: 5,
		type: 'pending',
	},
	{
		id: 6,
		userId: 6,
		type: 'fulfilled',
	},
]

const users = [
	{
		id: 1,
		name: 'Francisco Grande',
		imageUrl:
			'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
		address: '896 Deercove Drive Dallas, TX 75247',
		email: 'franciscogrande@gmailcom',
		password: 'password',
	},
	{
		id: 2,
		name: 'Deborah Grant',
		imageUrl:
			'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
		address: '4431 Conifer Drive Everett, WA 98208 ',
		email: 'deborahgrant@yahoo.com',
		password: 'password',
	},
	{
		id: 3,
		name: 'Amy Park',
		imageUrl:
			'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
		address: '3805 Ritter Avenue Warren, MI 48092 ',
		email: 'amypark@gmail.com',
		password: 'password',
	},
	{
		id: 4,
		name: 'Colin Carter',
		imageUrl:
			'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
		address: '3304 Main Street Redmond, WA 98052 ',
		email: 'colincarter@mail.com',
		password: 'password',
	},
	{
		id: 5,
		name: 'Randall Jackson',
		imageUrl:
			'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
		address: '1680 Pickens Way Canton, TX 75103',
		email: 'randalljackson@gmail.com',
		password: 'password',
	},
	{
		id: 6,
		name: 'Troy Rodriguez',
		imageUrl:
			'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
		address: '4967 Victoria Street Chicago, IL 60606 ',
		email: 'troyrodriguez@mail.com',
		password: 'password',
	},
]

seed = async () => {
	await database.sync({ forced: true })
	await User.bulkCreate(users)
	await Item.bulkCreate(lemons)
	await Order.bulkCreate(orders)
}

seed()

module.exports = seed
