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

<!-- Welcome to the Kittn API! You can use our API to access Kittn API endpoints, which can get information on various cats, kittens, and breeds in our database.

We have language bindings in Shell, Ruby, and Python! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

This example API documentation page was created with [Slate](https://github.com/tripit/slate). Feel free to edit it and use it as a base for your own API's documentation. -->

This is the prototyping docs made for uRyde API endpoints, which will allow you to post rides and get rides in our database

We currently own have docs the shell scripts up, but hope to have other languages soon


# Authentication

> To authorize, use this code:

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
-H "Authorization: <ApiKey>"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `<ApiKey>` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

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
    "departure_time": "11/06/2016 5:00pm",
    "arrival_location": "213 Johnson St. Apt 2 San Jose, CA 34323",
    "seats_available": 5,
    "created_by": "<user.id>",
    "one_way": true
  },
  {
    "departure_location": "another address",
    "departure_time": "11/12/2016 5:00pm",
    "arrival_location": "another address",
    "seats_available": 2,
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

## Get a Specific Kitten

  ```ruby
  require 'kittn'

  api = Kittn::APIClient.authorize!('meowmeowmeow')
  api.kittens.get(2)
  ```

  ```python
  import kittn

  api = kittn.authorize('meowmeowmeow')
  api.kittens.get(2)
  ```

  ```shell
  curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
  ```

  ```javascript
  const kittn = require('kittn');

  let api = kittn.authorize('meowmeowmeow');
  let max = api.kittens.get(2);
  ```

  > The above command returns JSON structured like this:

  ```json
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
  ```

  This endpoint retrieves a specific kitten.

  <aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

  `GET http://example.com/kittens/<ID>`

### URL Parameters

  Parameter | Description
  --------- | -----------
  ID | The ID of the kitten to retrieve
