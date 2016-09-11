


# Introduction

This is the prototyping docs made for uRyde API endpoints, which will allow you to post rides and get rides in our database

We currently own have docs the shell scripts up, but hope to have other languages soon

# Authentication

> To authorize, use this code:

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
-H "Authorization: <ApiKey>"
```

> Make sure to replace `<ApiKey>` with your API key.

<!-- # Kittens -->
# Rides

## Get All Rides

```shell
curl "http://example.com/api/rides"
```

> The above command returns JSON structured like this:

```json
[
  {
    "departure_location": "3394 SW 342th Ave. San Francisco, CA 33029",
    "departure_longitude": 23.46,
    "departure_latitude": 56.16,
    "departure_time": "11-06-2016 5:00 pm",
    "arrival_location": "213 Johnson St. Apt 2 San Jose, CA 34323",
    "arrival_longitude": 23.46,
    "arrival_latitude": 56.16,
    "seats_available": 5,
    "created_by": "<user.id>",
    "one_way": true
  },
  {
    "departure_location": "another location",
    "departure_longitude": 23.46,
    "departure_latitude": 56.16,
    "departure_time": "11-06-2016 5:00 pm",
    "arrival_location": "another location",
    "arrival_longitude": 23.46,
    "arrival_latitude": 56.16,
    "seats_available": 5,
    "created_by": "<user.id>",
    "one_way": true
  }
]
```

This endpoint retrieves all rides.

### HTTP Request

`GET http://example.com/api/rides`


## Create a Ride

```shell
curl "http://example.com/api/rides"
-H 'Content-Type: application/json'
-X PUT
-d '{
  "departure_location": "3394 SW 342th Ave. San Francisco, CA 33029",
  "departure_time": "11-06-2016 5:00 pm",
  "arrival_location": "213 Johnson St. Apt 2 San Jose, CA 34323",
  "seats_available": 5,
  "created_by": "<user.id>",
  "one_way": true
  }'

```

> The above command returns JSON structured like this:

```json
  {
    "departure_location": "3394 SW 342th Ave. San Francisco, CA 33029",
    "departure_longitude": 23.46,
    "departure_latitude": 56.16,
    "departure_time": "11-06-2016 5:00 pm",
    "arrival_location": "213 Johnson St. Apt 2 San Jose, CA 34323",
    "arrival_longitude": 23.46,
    "arrival_latitude": 56.16,
    "seats_available": 5,
    "created_by": "<user.id>",
    "one_way": true
  }
```

This endpoint allows users to create rides and POST to board.

### HTTP Request

`GET http://example.com/api/rides`
