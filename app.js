const bodyParser = require("body-parser");
const app = require('express')();
/*const csrf = require('csurf')*/
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const session = require('express-session');



const port = process.env.PORT || 8181;
/*const csrfProtection = csrf({cookie:true});*/
//
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// initialize sequelize with session store
//get SQL pool
const sequelize = require('./config/db-config');


//import error 404 page route
const {Sequelize} = require("sequelize");

//import all other routes
require("./startup/routes")(app);

const httpsServer = https.createServer( app);







//Sync models
sequelize.sync().then(result => {
    //Start server
    httpsServer.listen(port, () => {

        console.log(`Mutuality in HTTPS is listening at https://localhost:${port}`);
    });
}).catch(err => {console.log(err);})

process.on('uncaughtException', function (err) {
    console.log(err);
});


