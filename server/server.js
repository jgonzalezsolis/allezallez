const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser')

require('./config/mongoose.config');
require ('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials:true, origin: 'http://localhost:5173'}));
app.use(cookieParser());

const userRoutes = require("./routes/user.routes");
userRoutes(app);

const AllMyRouteRoutes = require("./routes/route.routes");
AllMyRouteRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );