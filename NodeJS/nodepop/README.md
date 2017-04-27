# NodePop Web API

* [Description](#description)
* [Data base initialization](#data-base-initialization)
* [Run application](#run-application)
* [Registry](#registry)
* [Login](#login)
* [Authentication](#authentication)
* [Data base info](#data-base-information)
  * [Users](#users)
  * [Advertisement](#advertisement)
* [Error handling](#error-handling)
* [Request & Response Examples](#request--response-examples)


## Description

API with users and advertisement

## Data base initialization

```
  nodepop$    npm run installBD
```
or
```
  nodepop$    node install_bd.js
```

This command will load the information from nodepop/lib/anuncios.json in the data base.

## Run application

You must run mongoDB and then execute the next command:

```
  nodepop$    npm run start
```
or
```
  nodepop$    node ./bin/www
```


## Registry

You must be registered if you want to have access to all the products

```
POST      apiv1/usuarios/registro
```

!Important: all the fields are required, so you must fill them to sign up (this fields which you have to give us in the body are: email, clave and name). You can't use an email which already exists in our database


## Login

Once you are sign up in the API, you must login to have the access to our database. You have to give us the email and password which you used to sign up in our API doing the next request

```
POST      apiv1/usuarios/login
```

This request will give you the token for the authentication (see next section) that is needed to have the access to the database

## Authentication

Via JSON Web Token

In all the request, you must give us the token that login gave you, you can send it via:

* req.body.token
* req.query.token
* req.headers['x-access-token']


## Data base information
### Users

Users information:
* Name
* Email
* Password (hashed)

Example
```
  {
    "nombre": "William"
    "email": william@example.com
    "clave": ikeg27836t45~ioashfuQAKJFijw
  }
```

### Advertisement (product)

Advertisement information:
* Name
* Selling (sells or buys)
* Prize (€)
* Photo
* Tags

Example
```
  {
    "nombre": "Bicicleta",       
    "venta": true,       
    "precio": 230.15,       
    "foto": "bici.jpg",       
    "tags": [ "lifestyle", "motor"]     
  }
```

## Error handling

## Request & Response Examples

!Important: token is required for all the request [(see login section)](#login)

### Getting all the products
``` 
GET      apiv1/anuncios 
```

### Getting the products filtering by name
The next request will return products which start with [name]
```
GET      apiv1/anuncios?nombre=ip  
```

### Getting the products filtering by tag
```
GET      apiv1/anuncios?tags=mobile  
```
You can concatenate more than 1 tag with ','
```
GET      apiv1/anuncios?tags=mobile,motor
```

### Getting all the existing tags
```
GET      apiv1/anuncios/tags
```

### Getting the products which users sell(true) or search(false)
```
GET      apiv1/anuncios?venta=true
```

### Getting the products filtering by prize
```
GET      apiv1/anuncios?precio=50
```

The next request will return the products which prize is greater or equals than 50 and lower or equals than 120
```
GET      apiv1/anuncios?precio=50-120
```

The next request will return the products which prize is greater or equals than 50
```
GET      apiv1/anuncios?precio=50-
```

The next request will return the products which prize is lower or equals than 120
```
GET      apiv1/anuncios?precio=-120
```

### Using skip
The next request skips the first [number] results (in this example 2)
```
GET      apiv1/anuncios?start=2
```

### Using limit
The next request will return maximum [number] results
```
GET      apiv1/anuncios?limit=5
```

### Sorting the products
The next request will sort the returning products by [sortField]. Note: you can concatenate more than 1 sort field with space blanks
```
GET      apiv1/anuncios?sort=precio tag
```

### Using select
The next request will return the [fields] of the products. Note: you can concatenate more than 1 select field with space blanks
```
GET     apiv1/anuncios?select=nombre precio
```

### Full example
```
GET      apiv1/anuncios?​tag​=mobile&​venta​=false&​nombre​=ip&​precio​=50-&start​=0&​limit​=2&​sort​=precio&​includeTotal​=true
```

© 2017 Javier López de Lerma