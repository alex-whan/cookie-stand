'use strict'

// Seattle object

var seattle = {
  location: 'Seattle',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
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
seattle.randomCustomerNumber();
seattle.cookieSalesSimulator();
seattle.cookieSalesTotal();
seattle.render();


// Tokyo object

var seattle = {
  location: 'Seattle',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
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
seattle.randomCustomerNumber();
seattle.cookieSalesSimulator();
seattle.cookieSalesTotal();
seattle.render();