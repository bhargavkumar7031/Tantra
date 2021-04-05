import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'dummy',
		email: 'dummy@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'dummy2',
		email: 'dummy2@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users
