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

- First you need to clone this repository with the command **`git clone`**

### **Executing the Client**

- Inside the **_client_** folder execute the command **`npm install`**
- After the installation you can run **`npm start`** to run the client
- The client is set to run on port **`3000`**

### **Executing the Server**

- Inside the **_server_** folder execute the command **`npm install`**
- After the installation you can run **`npm start`** to run the server
- The server is set to run on port **`3001`**

---

## Project Architecture

- Separated each REST operation as a module for the Residences CRUD
- Used **`redux`** to manage state containers all over the application
- Used **`redux-form`** to make it easier to handle form values and validations
- Used **`redux-thunk`**, a middleware to create asynchronous actions with **`redux`**
- Used **`react-router`** for navigation inside the application
- Since I'm using **`react-router`** for navigation, all components are isolated (fetch their own data)
- Created [history.js](https://github.com/marco-amorim/desafio-react/blob/master/client/src/history.js) for programmatic navigation inside the application
- Used **`lodash`** to make it easier to handle Object based Reducers
- Used **`jQuery`** for input masks on form
- Used **`axios`** for HTTP requests
- Used **`cep-promise`** for CEP validation on multiple platforms
- Used Portal from **`react-dom`** to create the Modal component
- Used **`react-leaflet`** for Map in HeatMap component
- Used **`react-leaflet-heatmap-layer`** for heat overlay in HeatMap component
- You can check all the libraries I used with their versions in [here](https://github.com/marco-amorim/desafio-react/network/dependencies)

### Components

- **_ResidenceForm_**, reusable Form used in **_ResidenceCreate_** and **_ResidenceEdit_** Components
- **_ResidenceCreate_**, responsible for creating a Residence
- **_ResidenceEdit_**, responsible for editing a Residence
- **_ResidenceDelete_**, responsible for deleting a Residence
- **_ResidenceList_**, responsible for listing all Residences
- **_HeatMap_**, responsible for showing the Heat Map based on the number of residents
- **_Modal_**, reusable Component, responsible for confirming actions
- **_Header_**, responsible for the application's Header
- **_App_**, responsible for putting all the Components together

### Actions

- **_createResidence_**, **`POST`** method to create Residence
- **_fetchResidences_**, **`GET`** method to fetch all Residences
- **_fetchResidence_**, **`GET`** method to fetch a single Residence
- **_editResidence_**, **`PUT`** method to update a Residence
- **_deleteResidence_**, **`DELETE`** method to remove a Residence

### Reducers

- **_residenceReducer_**, responsible for calling all Actions passing the state Object
- **_formReducer_**, reducer automatically received from the **`redux-form`** library
- **_index_**, responsible for combining all reducers with combineReducers from **`redux`**

---

## Self Evaluation

### Strong Points

- Managed state containers with **`redux`**, making it easier to control data all over the application with actions and reducers
- Followed the RESTful conventions for HTTP requests to the backend, making it easier to understand what each one does
- The Form values and validations are well managed with **`redux-form`**, making it easier to work with and understand
- Reusable components such as the ResidenceForm and Modal
- The chosen library for CEP finding searches on multiple platforms for validation, making the application faster and more reliable
- Created a complete CRUD for Residences (Create, Read, Update and Delete)

### Points to Improve

- The whole styling of the application
- Find out if it's possible to get the Latitude and Longitude automatically with CEP + House Number
- Warning on console with HeatMap component, on my researches it seems to be a problem with the **`react-leaflet-heatmap-layer`** library, and it shows only on development servers, check the source [here](https://stackoverflow.com/questions/58924617/componentwillreceiveprops-has-been-renamed)
- Logic inside the validation methods at [ResidenceForm.js](https://github.com/marco-amorim/desafio-react/blob/master/client/src/components/residences/ResidenceForm.js) and [formValidations.js](https://github.com/marco-amorim/desafio-react/blob/master/client/src/util/formValidations.js)
