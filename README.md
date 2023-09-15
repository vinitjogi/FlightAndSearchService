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

// generating a mode using sequelize cli;
    => npx sequelize model:generate --name <Name of model ex: City> --attributes <all the attributes name:Str>


// migrating the db on server
    => npx sequelize db:migrate

// undo the last migration
    => npx sequelize db:migrate:undo