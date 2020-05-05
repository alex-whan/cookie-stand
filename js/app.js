'use strict'

// Global variables

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Seattle object

var seattle = {
  location: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesSoldForTheDay: 0,
  
//Randomizes number of customers per hour between min/max properties and pushes results into an array
  calcRandomCustomersEachHour: function() {
    for (var i=0; i<hoursOfOperation.length; i++){
      var customersThisHour = getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
      this.customersEachHour.push(customersThisHour);
    }
  },

  //Multiplies avgCookiesPerCustomer property by customers per hour and using that data sums up total cookies for full day of sales
  cookieSalesSimulator: function () {
    for (var i=0; i<hoursOfOperation.length; i++){
      var fullCookiesSoldEachHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesSoldEachHour.push(fullCookiesSoldEachHour);
      this.totalCookiesSoldForTheDay += fullCookiesSoldEachHour;
    }
  },

  //Renders city name, list of hours, cookies sold per hour, and total
  render: function () {

    // Calls functions to calculate hourly customers and hourly cookie sales
    seattle.calcRandomCustomersEachHour();
    seattle.cookieSalesSimulator();
    var seattleElement = document.getElementById('seattle');

    // Renders store/location name    
    var cityName = document.createElement('h2');
    cityName.textContent = `${this.location}`;
    seattleElement.appendChild(cityName);

    // Loops through/renders cookiesSoldEachHour array
    for (var i=0; i<hoursOfOperation.length; i++){
      var listItem = document.createElement('li'); 
      listItem.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      seattleElement.appendChild(listItem);
    }

    // Renders totalCookiesSoldForTheDay value
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookiesSoldForTheDay} cookies`;
    seattleElement.appendChild(listItem);
  }
}

//Function call to render object
seattle.render();

// Helper function - from MDN Math.random page
// Moved this code down here from its original place in Seattle object (more efficient for re-use)

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //both min/max are inclusive
}

/*
// Tokyo object

var tokyo = {
  location: 'Tokyo',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  cookiesSoldByHour: [],
  totalCookiesSold: [],
  
//randomizes number of customers per hour between min/max properties

  randomCustomerNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  //multiplies avgCookiesPerCustomer property by customers per hour
  cookieSalesSimulator: function () {
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var result = Math.round(this.randomCustomerNumber() * this.avgCookiesPerCustomer);
      this.cookiesSoldByHour.push(result);
    }
  },

  //Calculates total cookies sold during that day
  cookieSalesTotal: function () {
    var result = 0;
    for (var j = 0; j < this.cookiesSoldByHour.length; j++) {
      result += this.cookiesSoldByHour[j];
    }
    this.totalCookiesSold.push(result); 
  },

  //Renders city name, list of hours, cookies sold per hour, and total
  render: function () {
    var parent = document.getElementById('seattle');
    var cityName = document.createElement('h2');
    cityName.textContent = `${this.location}`;
    parent.appendChild(cityName);

    for (var k = 0; k < this.hoursOfOperation.length; k++){
      var listItem = document.createElement('li'); 
      listItem.textContent = `${this.hoursOfOperation[k]}: ${this.cookiesSoldByHour[k]} cookies`;
      parent.appendChild(listItem);
      
    }

    var cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${this.totalCookiesSold} cookies`;
    parent.appendChild(cookieTotal);

  }
}

//Function calls
tokyo.randomCustomerNumber();
tokyo.cookieSalesSimulator();
tokyo.cookieSalesTotal();
tokyo.render();


// Dubai object

var dubai = {
  location: 'Dubai',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  cookiesSoldByHour: [],
  totalCookiesSold: [],
  
//randomizes number of customers per hour between min/max properties

  randomCustomerNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  //multiplies avgCookiesPerCustomer property by customers per hour
  cookieSalesSimulator: function () {
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var result = Math.round(this.randomCustomerNumber() * this.avgCookiesPerCustomer);
      this.cookiesSoldByHour.push(result);
    }
  },

  //Calculates total cookies sold during that day
  cookieSalesTotal: function () {
    var result = 0;
    for (var j = 0; j < this.cookiesSoldByHour.length; j++) {
      result += this.cookiesSoldByHour[j];
    }
    this.totalCookiesSold.push(result); 
  },

  //Renders city name, list of hours, cookies sold per hour, and total
  render: function () {
    var parent = document.getElementById('seattle');
    var cityName = document.createElement('h2');
    cityName.textContent = `${this.location}`;
    parent.appendChild(cityName);

    for (var k = 0; k < this.hoursOfOperation.length; k++){
      var listItem = document.createElement('li'); 
      listItem.textContent = `${this.hoursOfOperation[k]}: ${this.cookiesSoldByHour[k]} cookies`;
      parent.appendChild(listItem);
      
    }

    var cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${this.totalCookiesSold} cookies`;
    parent.appendChild(cookieTotal);

  }
}

//Function calls
dubai.randomCustomerNumber();
dubai.cookieSalesSimulator();
dubai.cookieSalesTotal();
dubai.render();

// Paris object

var paris = {
  location: 'Paris',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  cookiesSoldByHour: [],
  totalCookiesSold: [],
  
//randomizes number of customers per hour between min/max properties

  randomCustomerNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  //multiplies avgCookiesPerCustomer property by customers per hour
  cookieSalesSimulator: function () {
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var result = Math.round(this.randomCustomerNumber() * this.avgCookiesPerCustomer);
      this.cookiesSoldByHour.push(result);
    }
  },

  //Calculates total cookies sold during that day
  cookieSalesTotal: function () {
    var result = 0;
    for (var j = 0; j < this.cookiesSoldByHour.length; j++) {
      result += this.cookiesSoldByHour[j];
    }
    this.totalCookiesSold.push(result); 
  },

  //Renders city name, list of hours, cookies sold per hour, and total
  render: function () {
    var parent = document.getElementById('seattle');
    var cityName = document.createElement('h2');
    cityName.textContent = `${this.location}`;
    parent.appendChild(cityName);

    for (var k = 0; k < this.hoursOfOperation.length; k++){
      var listItem = document.createElement('li'); 
      listItem.textContent = `${this.hoursOfOperation[k]}: ${this.cookiesSoldByHour[k]} cookies`;
      parent.appendChild(listItem);
      
    }

    var cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${this.totalCookiesSold} cookies`;
    parent.appendChild(cookieTotal);

  }
}

//Function calls
paris.randomCustomerNumber();
paris.cookieSalesSimulator();
paris.cookieSalesTotal();
paris.render();


// Lima object

var lima = {
  location: 'Lima',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  cookiesSoldByHour: [],
  totalCookiesSold: [],
  
//randomizes number of customers per hour between min/max properties

  randomCustomerNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  //multiplies avgCookiesPerCustomer property by customers per hour
  cookieSalesSimulator: function () {
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var result = Math.round(this.randomCustomerNumber() * this.avgCookiesPerCustomer);
      this.cookiesSoldByHour.push(result);
    }
  },

  //Calculates total cookies sold during that day
  cookieSalesTotal: function () {
    var result = 0;
    for (var j = 0; j < this.cookiesSoldByHour.length; j++) {
      result += this.cookiesSoldByHour[j];
    }
    this.totalCookiesSold.push(result); 
  },

  //Renders city name, list of hours, cookies sold per hour, and total
  render: function () {
    var parent = document.getElementById('seattle');
    var cityName = document.createElement('h2');
    cityName.textContent = `${this.location}`;
    parent.appendChild(cityName);

    for (var k = 0; k < this.hoursOfOperation.length; k++){
      var listItem = document.createElement('li'); 
      listItem.textContent = `${this.hoursOfOperation[k]}: ${this.cookiesSoldByHour[k]} cookies`;
      parent.appendChild(listItem);
      
    }

    var cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total: ${this.totalCookiesSold} cookies`;
    parent.appendChild(cookieTotal);

  }
}

//Function calls
lima.randomCustomerNumber();
lima.cookieSalesSimulator();
lima.cookieSalesTotal();
lima.render();
*/
