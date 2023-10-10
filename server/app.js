require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const req = require("express/lib/request");
const app = express();
const PORT = 5000 || process.env.PORT;
app.use(express.static('public'))
app.use(expressLayout);
app.set("layout", "./layout/main");
app.set("view engine", "ejs");
app.use("/main", require('./server/routes/main'))
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});