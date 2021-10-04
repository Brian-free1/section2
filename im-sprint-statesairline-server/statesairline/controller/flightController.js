const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {
    //TODO: 
    if (req.query.departure_times && req.query.arrival_times) {
      const list = flights.filter((flight) => {
        return flight.departure_times === req.query.departure_times && flight.arrival_times === req.query.arrival_times
      })
      return res.status(200).json(list)
    }
    if (req.query.departure && req.query.destination) {
      const list = flights.filter((flight) => {
        return flight.departure === req.query.departure && flight.destination === req.query.destination
      })
      return res.status(200).json(list)
    }


    return res.json(flights);
  },
  // [GET] /flight/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => { 
    //TODO: 
    if (req.params.id) { //params를 통해서 값을 가져올 수 있음
      //서버에서 req.params로 받을 수 있는 것은, 이미 예약된(?) 값이라고 생각 할 수 있다.
      const list = flights.filter((flight)=>{
        return flight.uuid === req.params.id
      })
      return res.status(200).json(list)
    }
    


  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    let data = flights.filter((flight)=>{
      return flight.uuid === req.params.id
    })[0];
    // if(req.body.uuid){
    //   return data[0].uuid === req.body.uuid
    // }
    if(req.body.departure){
      data.departure = req.body.departure
    }
    if (req.body.destination) {
      data.destination = req.body.destination
    }
    if (req.body.departure_times) {
      data.departure_times = req.body.departure_times
    }
    if (req.body.arrival_times) {
      data.arrival_times = req.body.arrival_times
    }
    
    //TODO: 
    
    return res.status(200).json(data);
  }
};
