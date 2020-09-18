# React Challenge

## Residence Register App with Heat Map

### Data Model (Residence)

- CEP
- House Number
- Latitude
- Longitude
- Number of Residents

### Heat Map

- A heat map based on the residences with the most number of residents

---

## How to execute the Project

- First you need to clone the project from Github in this [link](https://github.com/marco-amorim/desafio-react.git)

### **Executing the Client**

- Inside the **_client_** folder execute the command **`npm install`**
- After the installation you can run **`npm start`** to run the client
- The client is set to run on port **`3000`**

### **Executing the Server**

- Inside the **_server_** folder execute the command **`npm install`**
- After the installation you can run **`npm start`** to run the server
- The server is set to run on port **`3001`**

---

# Project Architecture

- Separated each REST operation as a module for the Residences CRUD
- Used Redux to manage states all over the application
- Used Redux-Form to make it easier to handle form values and validations
- Used Redux-Thunk, a middleware to create asynchronous actions with Redux
- Used React-Router for navigation inside the application
- Created [history.js](https://github.com/marco-amorim/desafio-react/blob/master/client/src/history.js) for programmatic navigation inside the application
- Since I'm using React-Router for navigation, all components are isolated (fetch their own data)
- Used Lodash to make it easier to handle Object based Reducers
- Used JQuery for input masks on form
- Used Axios for HTTP requests
- Used Cep-Promise for CEP validation on multiple platforms
- You can check all the libraries I used with their versions in [here](https://github.com/marco-amorim/desafio-react/blob/master/client/package.json)

## Components

- **_ResidenceForm_**, used in **_ResidenceCreate_** and **_ResidenceEdit_** Components
- **_ResidenceCreate_**, responsible for creating a Residence
- **_ResidenceEdit_**, responsible for editing a Residence
- **_ResidenceDelete_**, responsible for deleting a Residence
- **_ResidenceList_**, responsible for listing all Residences
- **_Header_**, responsible for the application's Header
- **_App_**, responsible for putting all the components together

## Actions

- **_createResidence_**, **`POST`** method to create Residence
- **_fetchResidences_**, **`GET`** method to fetch all Residences
- **_fetchResidence_**, **`GET`** method to fetch a single Residence
- **_editResidence_**, **`PUT`** method to update a Residence
- **_deleteResidence_**, **`DELETE`** method to remove a Residence

## Reducers

- **_residenceReducer_**, responsible for calling all Actions passing the state Object
- **_formReducer_**, reducer automatically received from the Redux-Form library
- **_index_**, responsible for combining all reducers with combineReducers from Redux

---
