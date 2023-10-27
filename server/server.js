const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const AllMyRouteRoutes = require("./routes/route.routes");
AllMyRouteRoutes(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );