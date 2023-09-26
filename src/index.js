const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');
const { City, Airports } = require('./models/index')
// const CityRepository = require('./repository/city-repository')
const setupAndStartServer = async () => {

    //create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', apiRoutes);
    app.listen(PORT, () => {
        console.log(`server started at port ${PORT}`);
        /*console.log(process.env);
         const repo = new CityRepository();
         repo.createCity({name : "Akola"});
         repo.deleteCity(6)*/

        //  db.sequelize.sync({alter : true});
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter : true});
        }

    });
}

setupAndStartServer();