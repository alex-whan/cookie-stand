'use strict'

// Global variables

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Constructor Function for store locations

function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesSoldForTheDay = 0;
};


Store.prototype.calcRandomCustomersEachHour = function () {
  for (var i=0; i<hoursOfOperation.length; i++){
    var customersThisHour = this.getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
    this.customersEachHour.push(customersThisHour);
  }
};

Store.prototype.cookieSalesSimulator = function () {
  for (var i=0; i<hoursOfOperation.length; i++){
    var fullCookiesSoldEachHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
    this.cookiesSoldEachHour.push(fullCookiesSoldEachHour);
    this.totalCookiesSoldForTheDay += fullCookiesSoldEachHour;
  }
};

Store.prototype.getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //both min/max are inclusive
};

Store.prototype.headerRender = function () {
  var parentElement = document.getElementById('locations');
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  this.headerRender.textContent = '';
  tableRow.appendChild(tableHeader);
  
  for(var i=0; i<hoursOfOperation.length; i++) {
    tableHeader = document.createElement('th');
    tableHeader.textContent = hoursOfOperation[i];
    tableRow.appendChild(tableHeader);
    
  }
  parentElement.appendChild(tableRow);
};

Store.prototype.render = function () {
  this.calcRandomCustomersEachHour();
  this.cookieSalesSimulator();
  var parentElement = document.getElementById('locations');

    // Renders store/location name    
    var cityName = document.createElement('tr');
    cityName.textContent = `${this.location}`;
    parentElement.appendChild(cityName);
    this.render.textContent = '';

    // Loops through/renders cookiesSoldEachHour array
    for (var i=0; i<hoursOfOperation.length; i++){
      var listItem = document.createElement('td'); 
      listItem.textContent = `${this.cookiesSoldEachHour[i]}`;
      parentElement.appendChild(listItem);
    }

    // Renders totalCookiesSoldForTheDay value
    listItem = document.createElement('td');
    listItem.textContent = `Total: ${this.totalCookiesSoldForTheDay}`;
    parentElement.appendChild(listItem);
  };

  var seattle = new Store('Seattle', 23, 65, 6.3);
  var tokyo = new Store('Tokyo', 3, 24, 1.2);
  var dubai = new Store('Dubai', 11, 38, 3.7);
  var paris = new Store('Paris', 20, 38, 2.3);
  var lima = new Store('Lima', 2, 16, 4.6);

  
seattle.headerRender();
seattle.render();
  
tokyo.render();

dubai.render();

paris.render();
  
lima.render();
  