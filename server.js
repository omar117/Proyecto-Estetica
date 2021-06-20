const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const misRutas = require("./routes/rutas");

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/my-app/dist/my-app/"));
app.use('/', misRutas);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
