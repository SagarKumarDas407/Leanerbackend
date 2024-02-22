const express= require("express");
const hbs = require("hbs");

const router = require("./routes/auth");
const app = express();

const PORT = 3000;


//use router file
app.use("",router)

// use partials folder
hbs.registerPartials(__dirname + "/views/partials");

// use public folder
app.use(express.static("public"));

// set views file
app.set("view engine","hbs");

app.listen(PORT, () => {
    console.log(`server is running at http://${PORT}`)
});
