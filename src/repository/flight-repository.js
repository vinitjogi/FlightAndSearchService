const { Flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {
  #createFilter(data) {
    // to declare any member function as private we use '#'
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if(data.minPrice && data.maxPrice){
    //     Object.assign(filter, {
    //         [Op.and] : [
    //             { price: {[Op.lte]: data.maxPrice} },
    //             { price: {[Op.gte]: data.minPrice} }
    //         ]
    //     });
    // }

    let priceFilter = [];

    if (data.minPrice) {
      // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }

    if (data.maxPrice) {
      // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });
    return filter;
  }

  async createFlight(data) {
    try {
      // console.log(data);
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateFlights(flightId, data) {
    try {
      await Flights.update(data, {
        where: {
          id: flightId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;

/*

    Object.assign('passing the object that needs to be copied', {assign other properties on copied obejct})
    ex: 
        filter = {arrivalAirportId : 3}
        Object.assign(filter, {departureAirportId : 4});

        filter object will look like:
            {
                arrivalAirportId : 3,
                departureAirportId : 4
            }
    

    where query from getAllFlight:
        {
            where: {
                arrivalAirportId : 3,
                departureAirportId : 4,
                price: {[Op.gte]: data.minPrice} =>prices greater than equal to minPrice
            }
        }
 */
