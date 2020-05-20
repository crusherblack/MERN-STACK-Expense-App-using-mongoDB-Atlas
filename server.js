const patch = require('path'); //path
const express = require('express'); //express
const dotenv = require('dotenv'); //custom env
const colors = require('colors'); //colors pada console
const morgan = require('morgan'); //log request
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

//routes
const transactions = require('./routes/transactions');

//pake express
const app = express();

app.use(express.json()); //allow body parser

//log request
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//main routes transactions
app.use('/api/v1/transactions', transactions);

//setting untuk production agar bisa konek ke react js
//pastikan jalan npm run build pada client agar hal dibawah bisa jalan
//tinggal jalanin npm start.. ntar server otomatis aktif ntar dia load apapun route yang masuk ke client/build/html
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html')));
}

//definisikan port
const PORT = process.env.PORT || 5000;

//kasih log ketika jalanin app
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
