'use strict'

/* Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

1. Stores the min/max hourly customers, and the average cookies per customer, in object properties

2. Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

4. Store the results for each location in a separate array… perhaps as a property of the object representing that location

5. Display the values of each array as unordered lists in the browser

6. Calculating the sum of these hourly totals; your output for each location should look like this: */

var seattle = {
  location: 'Seattle',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesSoldByHour: [],
  totalCookiesSold: [],
  
  randomCustomerNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  cookieSalesSimulator: function () {
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var result = Math.round(this.randomCustomerNumber() * this.avgCookiesPerCustomer);
      this.cookiesSoldByHour.push(result);
    }
  },

  cookieSalesTotal: function () {
    var result = 0;
    for (var j = 0; j < this.cookiesSoldByHour.length; j++) {
      result += this.cookiesSoldByHour[j];
    }
    this.totalCookiesSold.push(result); 
  },

  render: function () {
    var parentHours = document.getElementById('seattle-hours');
    var firstList = document.createElement('ul');

    var parentCookies = document.getElementById('seattle-cookies');
    var secondList = document.createElement('ul');

    var parentTotal = document.getElementById('seattle-total');
    var thirdList = document.createElement('ul');


    firstList.textContent = this.hoursOfOperation;
    parentHours.appendChild(firstList);

    secondList.textContent = this.cookiesSoldByHour;
    parentCookies.appendChild(secondList);

    thirdList.textContent = this.totalCookiesSold;
    parentTotal.appendChild(thirdList);

  }
}

seattle.randomCustomerNumber();
seattle.cookieSalesSimulator();
seattle.cookieSalesTotal();
seattle.render();

