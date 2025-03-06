const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const taskRoute = require('./routes/taskRoute');
const { auth } = require('./middleware/auth');

const app = express();

require("dotenv").config();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

require('./config/dbConnection').dbConnect();

const PORT = process.env.PORT || 4000;

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/task', auth, taskRoute);

app.get('/', (req, res) => {
  return res.json({
    success: true,
    msg: "Your server is up and running"
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
