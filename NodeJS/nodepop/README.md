# NodePop Web API

* [Description](#description)
* [Data base initialization](#data-base-initialization)
* [Run application](#run-application)
* [Registry](#registry)
* [Authentication](#authentication)
* [Data base info](#data-base-information)
  * [Users](#users)
  * [Notices](#notices)
* [Error handling](#error-handling)
* [Request & Response Examples](#request--response-examples)


## Description

API with users and notices

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

## Authentication

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

### Notices

Notices information:
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

### Full example
```
GET      apiv1/anuncios?​tag​=mobile&​venta​=false&​nombre​=ip&​precio​=50-&start​=0&​limit​=2&​sort​=precio&​includeTotal​=true
```


© 2017 Javier López de Lerma