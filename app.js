const bodyParser = require("body-parser");
const app = require('express')();
const http = require('http');
require('dotenv').config();


const port = 8082 || 8181;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//
// //get SQL pool
 const sequelize = require('./config/db-config');
//
// //import all other routes
 require("./startup/routes")(app);



const httpServer = http.createServer( app);
//Join tables
require("./startup/table_connections")(app);


//Sync models
sequelize.sync().then(result => {
    //Start server
    httpServer.listen(port, () => {
        console.log(`Mutuality in HTTP is listening on port: ${port}`);
    });
}).catch(err => {console.log(err);})

process.on('uncaughtException', function (err) {
    console.log(err);
});




