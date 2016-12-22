# V1 APi Spec

## Todo

### Ride
[ ] GET /Ride = get all rides in database
- Parameters
      - TBD
- Queries
    - departures near current location
    - arrivals in near a specific location (given by user)
      
[ ] GET /Ride/:id || /Ride?id={someId} = get a certain ride with a particuliar id
- Parameters
    - ride obj id
      
[ ] POST /Ride = create a new ride
- Parameters
    - TBD
      
[ ] PUT /Ride/:id = update a certain ride
- Parameters
    - TBD

### Passenger
[ ] GET /Passenger/:rideId = get users in a certain ride
- Parameters
    - TBD 
    
[ ] POST /Passenger/:rideId = add user to a certain ride
- Parameters
    - TBD 

[ ] DELETE /Passenger/:rideId = delete a passenger from a certain ride
- Parameters
    - TBD 

### User
[ ] GET /User/:id = get user in db
- Parameters
    - TBD 
  
[ ] POST /User/:id = add user to db
- Parameters
    - TBD 
    
[ ] DELETE /User/:id = delete user in db
- Parameters
    - TBD 

[ ] PUT /User/:id = update user in db
- Parameters
    - TBD 
