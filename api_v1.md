# V1 APi Spec

## Todo

### Ride
- Model
```
         {
          "departureLocation": "3394 SW 342th Ave. San Francisco, CA 33029",
          "departureLongitude": 23.46,
          "departureLatitude": 56.16,
          "departureTime": "11-06-2016 5:00 pm",
          "arrivalLocation": "213 Johnson St. Apt 2 San Jose, CA 34323",
          "arrivalLongitude": 23.46,
          "arrivalLatitude": 56.16,
          "seatsAvailable": 5,
          "createdBy": "<user.id>",
          "oneWay": true,
          "passengers": [...]
        }
```     
- [ ] GET /Rides = get all rides in database
- Parameters
    - departureLocation = search for rides leaving the location
    - arrivalLocation = search for rides arriving at this location
    - user = search rides created by this user (uid)
    - oneWay = is ride one way? (init always false = 2 way)
    - seatsAvailable = search for rides with seat availability greater than param value

- Queries
    - departures near current location
    - arrivals in near a specific location (given by user)
    - rides by specific created by a specific user
      
- [ ] GET /Ride/:id || /Ride?id={someId} = get a certain ride with a particuliar id
- Parameters
    - id = of ride to query
      
- [ ] POST /Ride = create a new ride
- Parameters
    - Ex of required params in body
    ```
    {
      "departureLocation": "20 Rue Barbette, 75003 Paris, France",
      "arrivalLocation": "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
      "departureTime": "01-01-1915 11:23 pm",
      "seatsAvailable": 3,
      "createdBy": "<user.id>",
      "oneWay: true
      "
    }
    ```
      
- [ ] PUT /Ride/:id = update a certain ride
- Parameters
    - id of ride to update
    - follow required fields of model at the top

### Passenger
- Model
```
{     
      passengers: [...], // userIds
      rideId: {someRideId}
}
```
      

- [ ] GET /Passenger/:rideId = get users in a certain ride
- Parameters
    - rideId affiliated with passengers returns JSONArray of user ids
    
- [ ] POST /Passenger/:rideId = add user to a certain ride
- Parameters
      - userid to append to passengers array 
      ```
      {
            "userId": {someId}
      }
      ```
- [ ] DELETE /Passenger/:rideId = delete a passenger from a certain ride
- Parameters
    - delete passenger from passengers array
    ```
      {
            "userId": {someId}
      }
      ```

### User
- Model
```
    {
      "firstName": "20 Rue Barbette, 75003 Paris, France",
      "lastName": "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
      "currentLocation": "01-01-1915 11:23 pm",
      "selectedRides": 3,
      "createdBy": "<user.id>"
    }
```
- [ ] GET /User/:id = get user in db
- Parameters
    - id of user to query 
  
- [ ] POST /User/ = add user to db
- Parameters
    - using model params create user 
    
- [ ] DELETE /User/:id = delete user in db
- Parameters
    - id of user to delete

- [ ] PUT /User/:id = update user in db
- Parameters
    - id of user to update
