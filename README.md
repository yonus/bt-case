## General

This project is  a case study. Project is developed node.js by using 
typescript and express framework


## Code structure



## Development
We use `node` version `16 ` higher  version for local development
```
nvm install 16.8.0
```

```
nvm use 16.8.0
```

The first time, you will need to run

```
npm install
```

Then just start the server with

```
npm run start
```


## API Examples
* Login
    * Method and Headers
    ```
    POST /auth/login
    Host: https://bt-case-wuvr6zbzva-lz.a.run.app
    Content-Type: application/json
    ```
    * Request
  
``` 
      {
      "username":"*****",
      "password": "*****"
      }
      
   ``` 
  * Response
  
    ```
    
      {
        "statusCode": "10000",
        "message": "Login Successful",
        "data": {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJpdGFrc2kiLCJleHAiOjE2NDE1OTA3NjQuMjM2LCJpYXQiOjE2MzY0MDY3NjR9.ESjIUyaaYN2QhqTvopC_sc-BoB0XZRc6S-u3QmVDsc8"
        }
      }
    ``` 



* Trip Search
    * Method and Headers
    ```
    POST /trip/search
    Host: https://bt-case-wuvr6zbzva-lz.a.run.app
    Authorization: Bearer <your token>
    Content-Type: application/json
    ```
    * Request
    ```
    {
      "point":{
      "latitude":31.17821068,
      "longitude": -97.38887025
      },
      "radius":5000,
      "startDate":"2016-07-03T03:30:18.000Z",
      "endDate":"2016-07-03T05:52:42.000Z"
    }
    ```

  * Response
   ```
    {
    "statusCode": "10000",
    "message": "Search is successful",
    "data": 
      [
        {
            "id": "5cebab27a2752d2aa3d27366",
            "startDate": "2016-07-03T03:30:18.000Z",
            "endDate": "2016-07-03T03:52:42.000Z"
        },
        {
            "id": "5cebab27a2752d2aa3d27310",
            "startDate": "2016-07-03T03:36:31.000Z",
            "endDate": "2016-07-03T03:48:04.000Z"
        }
      ]
    }
   
    ```
* Min Max Travelled Distance
  * Method and Headers
    ```
    POST /trip/min-max-travel-distance
    Host: https://bt-case-wuvr6zbzva-lz.a.run.app
    Authorization: Bearer <your token>
    Content-Type: application/json
    ```
  * Request
    ```
    {
    "point":{
      "latitude":31.17821068,
      "longitude": -97.38887025
    },
    "radius":5000,
    "startDate":"2016-07-03T03:30:18.000Z",
    "endDate":"2016-07-03T05:52:42.000Z"
    }
    ```  
  
  * Response
    ```

    {
      "statusCode": "10000",
      "message": "Successful",
      "data": {
          "maxTravelDistance": 53139,
          "minTravelDistance": 7
       }
     }
    ```

* Trip count by vehicle year
    * Method and Headers
      ```
      POST /trip/trip-count-by-year
      Host: https://bt-case-wuvr6zbzva-lz.a.run.app
      Authorization: Bearer <your token>
      Content-Type: application/json
      ```
    * Request
      ```
      {
      "point":{
        "latitude":31.17821068,
        "longitude": -97.38887025
      },
      "radius":5000,
      "startDate":"2016-07-03T03:30:18.000Z",
      "endDate":"2016-07-03T05:52:42.000Z"
      }
      ```  

    * Response
      
  ```
  {
  "statusCode": "10000",
  "message": "Successful",
  "data": [
     {
       "count": 1,
       "year": 2013
     }
    ]
   }
  ```
