define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/signin",
    "title": "Signin to get token",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n\t \"username\":\"mrxy\",\n\t \"pasword\":\"9080808081\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user in database</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password for the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "roles",
            "description": "<p>roles for the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token to be used</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Details",
          "content": "HTTP/1.1 200 OK\n  {\n    \"id\": \"5f2d9870506bbb22709ed9c5\",\n    \"username\": \"Milind Sahoo\",\n    \"email\": \"milind@xyz.com\",\n    \"roles\": [\n      \"ROLE_USER\"\n    ],\n    \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMmQ5ODcwNTA2YmJiMjI3MDllZDljNSIsImlhdCI6MTU5Njg1NzYwMiwiZXhwIjoxNTk2OTQ0MDAyfQ.ZvXQ455KXPq9DbVhbBtOBJDqOCSZsEQFu09bSxx4nCo\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/routes/authRoutes.js",
    "groupTitle": "Auth",
    "name": "PostApiAuthSignin"
  },
  {
    "type": "post",
    "url": "/api/auth/signup",
    "title": "Signup as an user",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password for the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "roles",
            "description": "<p>roles for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n\t \"username\":\"mrxy\",\n\t \"email\":\"mrxy@xyz.com\",\n\t \"pasword\":\"9080808081\",\n\t \"roles\":[\"user\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User",
            "description": "<p>was registered successfully!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nUser was registered successfully!",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/routes/authRoutes.js",
    "groupTitle": "Auth",
    "name": "PostApiAuthSignup"
  },
  {
    "type": "post",
    "url": "/api/client/update",
    "title": "Update client details",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Client id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Client name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Client email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Client phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "total_bill",
            "description": "<p>Client's total amount</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n\t \"id\":\"5f2e232f0203860cd84154e2\",\n\t \"name\":\"Mr. XY\",\n\t \"email\":\"mrxy@xyz.com\",\n\t \"phone\":\"9080808081\",\n\t \"total_bill\":200,\n\t \"agency\":\"5f2e232f0203860cd84154e1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>If updated, returns true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\":true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/routes/clientRoutes.js",
    "groupTitle": "Client",
    "name": "PostApiClientUpdate"
  }
] });
