/
    -src/
        index.js //server file
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    -tests/ [later]


## database design          
    -Airplane table (id, model_number, capacity, created_at, updated_at)
    -Flight table (id, departure_city_id, destination_city_id, airplane_id, departure, arrival, flight_number)
    -Airport table (id, name, city_id, address)
    -City table (id, name)

// step 1 
    => use `npx sequelize init` to create database related files & folders.
    it will create floders like config, migations, seeders. 
    In config, do changes in config.json, provide your username, password & db name

// step 2
    => use `npx sequelize db:create` to create your database

// generating a model using sequelize cli;
    => `npx sequelize model:generate --name <Name of model ex: City> --attributes <all the attributes name:Str>`

// migrating the db on server
    => `npx sequelize db:migrate` a file will be created inside migrations folder for respective model

// undo the last migration
    => `npx sequelize db:migrate:undo`


## npm packages
    -mysql2 => used for connecting mysql server with sequelize
    -sequelize => setting up database connection for our application (ORM for rdbms ) 