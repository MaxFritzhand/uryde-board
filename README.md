---
title: API Reference

language_tabs:
- shell
- ruby
- python
- javascript

toc_footers:
- <a href='#'>Sign Up for a Developer Key</a>
- <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
- errors

search: true
---

# Introduction

This is the prototyping docs made for uRyde API endpoints, which will allow you to post rides and get rides in our database

We currently own have docs the shell scripts up, but hope to have other languages soon


# Authentication

> To authorize, use this code:

```ruby
Coming Soon..
```

```python
Coming Soon..
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
-H "Authorization: <ApiKey>"
```

```javascript
Coming Soon..
```

> Make sure to replace `<ApiKey>` with your API key.

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

<!-- # Kittens -->
# Rides

## Get All Rides

```ruby
Comming Soon...
```

```python
Comming Soon...
```

```shell
curl "http://example.com/api/rides"
-H "Authorization: <AccessToken>"
```

```javascript
Comming Soon...
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

### Query Parameters

  Parameter | Default | Description
  --------- | ------- | -----------
  include_cats | false | If set to true, the result will also include cats.
  available | true | If set to false, the result will include kittens that have already been adopted.

  <aside class="success">
  Remember — to get all rides you need to be authorized
  </aside>
