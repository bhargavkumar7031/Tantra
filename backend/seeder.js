import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import ConnectDB from './config/db.js'

dotenv.config()
ConnectDB()

const importData = async () => {
	try {
		const createdUsers = await User.insertMany(users)
		const adminUser = createdUsers[0]._id
		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser }
		})

		await Product.insertMany(sampleProducts)
		console.log('Data Imported')
		process.exit()
	} catch (error) {
		console.log(`${error}`)
		process.exit(1)
	}
}

const deleteData = async () => {
	try {
		await Order.deleteMany()
		await Product.deleteMany()
		await User.deleteMany()

		console.log('Data deleted')
		process.exit()
	} catch (error) {
		console.log(`${error}`)
		process.exit(1)
	}
}

if (process.argv[2] === '-d') {
	deleteData()
} else {
	importData()
}
