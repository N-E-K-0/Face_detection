const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const register = require('./controllers/register');
const signin = require('./controllers/signin');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'test',
    database : 'smart-brain'
  }
});

knex.select('*').from('users')
.then(data => {
	// console.log(data);
})

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=> {
	res.send(database.users);
})

app.post('/signIn',(req,res) => {
	signin.handleSignin(req,res,bcrypt,knex)
})

app.post('/register', (req,res) => { 
	register.handleRegister(req,res,knex,bcrypt) 
})

app.get('/profile/:id', (req,res) => {
	const { id } = req.params;
	let found = false;
	database.users.forEach(user => {
		if(user.id === id){
			found = true;
			return res.json(user);
		}
	})  
	if(!found){
		res.status(400).json('no data found');
	}
})

const app1 = require('http')
	.createServer((req,res) => {
		res.send('hi there!');
	})

const PORT = process.env.PORT

app1.listen(PORT, () => {
	console.log(`app is running on port ${PORT}`);
});
console.log(PORT);

  