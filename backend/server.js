import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'

const app = express()

dotenv.config()
connectDB()

app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => {
	res.send('API is running...')
})

const PORT = process.env.PORT || 5000
app.listen(
	PORT,
	console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
