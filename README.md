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

