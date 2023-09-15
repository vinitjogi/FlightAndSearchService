const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository')
const setupAndStartServer = async () => {

    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    // const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`server started at port ${PORT}`);
        // console.log(process.env);
        // const repo = new CityRepository();
        // repo.createCity({name : "Akola"})
    });
}

setupAndStartServer();