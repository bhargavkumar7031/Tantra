import mongoose from 'mongoose'

const ConnectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})
		console.log(`mongoDB Connected: ${conn.connection.host}`)
	} catch (error) {
		console.log(`Error: ${error.messsage}`)
		process.exit(1)
	}
}

export default ConnectDB
