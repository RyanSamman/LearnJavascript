# Important HTTP Codes:

> 1xx

Usually not used when making APIs and Websites

TODO: Learn why, how, and when these are used

> 2xx - Success

## 200 - OK
- Successful Request

## 201 - Created
- 200 can also be used
- Used when a request creates a resource
- Ex. POST request to db

## 204 - No Content
- When it is expected that no content will be returned
- Ex. when deleting a resource successfully

> 3xx - Redirection

## 304 - Not Modified
- Is used when you have a resource that you want to ensure has not been updated since a certain date
- This use case saves bandwidth & resources as you don't need to re-send all the data to make sure the data  has not changed
- Ex. data which hardly changes is cached on a server, and you want to have the most up-to-date version of the data, no extra information will be sent until the cached data has changed
- [Caching - Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
- [How to cache](https://www.mnot.net/cache_docs/)

> 4xx Client Error

## 400 - Bad Request
- Unknown reason for bad request
- Bad parameters

## 401 - Unauthorized
- Do not have permissions
- Are not logged in / authenticated
- No API key

## 403 - Forbidden
- Bad API key, need elevated user permissions

## 404 - Not Found
- Trying to access nonexistent resources
 
> 5xx Server Error

- Unknown bug/error while handling the request
- Ex. Database is down



[Reference Website](https://www.restapitutorial.com/httpstatuscodes.html)

[Handy video summarizing HTTP codes](https://www.youtube.com/watch?v=wJa5CTIFj7U)