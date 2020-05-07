'use strict';

// Global variables

var parentElement = document.getElementById('table');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];

// Constructor Function for Store locations

function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];  
  this.totalCookiesSoldForTheDay = 0;
  allStores.push(this); // push this object instance into allStores global array
};

Store.prototype.calcRandomCustomersEachHour = function () {
  // for loop over opening hours
  // use random number helper function to generate a random number of customers
  // push that random number into the customersEachHour array
  for (var i=0; i<hours.length; i++){
    var customersThisHour = this.getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
    this.customersEachHour.push(customersThisHour);
  }
};

Store.prototype.cookieSalesSimulator = function () {
  this.calcRandomCustomersEachHour(); // this will generate the customer array
  // for loop through the array of random customers
    // multiply each customer entry by the average cookie sale
    // push into the cookiesSoldEachHour array
    // push into the globalCookiesTotalEachHour array
  for (var i=0; i<this.customersEachHour.length; i++){
    var totalCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
    this.cookiesSoldEachHour.push(totalCookies);
  }
};

Store.prototype.cookiesForTheDay = function(){
  this.cookieSalesSimulator(); // this will generate the cookies each hour array
    // Add all of those hourly values together for daily total cookies sold
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    this.totalCookiesSoldForTheDay += this.cookiesSoldEachHour[i];
    }
  };

Store.prototype.render = function(){
  this.cookiesForTheDay(); // sums up total cookies for day

  // render function only for the BODY of the table
  // Select/get the parent element (<tbody>)
  parentElement = document.getElementById('table');

  // This is for the "Seattle" store (or "name")
  // Create a table row <tr>
  var tableRow = document.createElement('tr');

    // Create a <th>/<td> to stick onto table row <tr>
  var tableHeader = document.createElement('th')

    // Fill it with content: this.name
  tableHeader.textContent = this.name;

    // Append <th> to the table row/<tr> we created (in this case, ROW is the parent, and <th> gets appended to its OWN parent (<tr>))
    // Want to append all <td>/<th> to the table row, then append ROW to TABLE once done
  tableRow.appendChild(tableHeader);

  // This is for "cookies sold each hour"
    // Loop over the cookies sold each hour
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    // create a <td>
    var tableData = document.createElement('td');
    // fill it with content: this.cookiesSoldEachHour[i]
    tableData.textContent = this.cookiesSoldEachHour[i];
    // append <td> to the table row
    tableRow.appendChild(tableData);
  }

  // This is for the "cookies for the day"
    // create another <td>
  var tableData = document.createElement('td');
    // fill it with content: this.totalCookiesSoldForTheDay
  tableData.textContent = this.totalCookiesSoldForTheDay;
    // append <td> to the table row
  tableRow.appendChild(tableData);

  // Append whole table row <tr> to the parent (<tbody>)
  parentElement.appendChild(tableRow);

};

//Helper function to generate random number
Store.prototype.getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //both min/max are inclusive
};


// Header rendering function
function renderHeader() {
  parentElement = document.getElementById('table');
  // This is for the "Seattle" store (or "name")
  // Create a table row <tr>
  var tableRow = document.createElement('tr');
    // Create a <th>/<td> to stick onto table row <tr>
  var tableHeader = document.createElement('th')
    // Fill it with content: this.name
  tableHeader.textContent = '';
    // Append <th> to the table row/<tr> we created (in this case, ROW is the parent, and <th> gets appended to its OWN parent (<tr>))
    // Want to append all <td>/<th> to the table row, then append ROW to TABLE once done
  tableRow.appendChild(tableHeader);

  // This is for "cookies sold each hour"
    // Loop over the cookies sold each hour
  for(var i=0; i<hours.length; i++){
    // create a <td>
    var tableData = document.createElement('th');
    // fill it with content: this.cookiesSoldEachHour[i]
    tableData.textContent = hours[i];
    // append <td> to the table row
    tableRow.appendChild(tableData);

    // Append whole table row <tr> to the parent (<tbody>)
  parentElement.appendChild(tableRow);
  }
  
};

function renderFooter(){
  var totalOfAllTotals = 0; // need to declare this outside of outer for loop to keep track of hourly global total

  // create table row
  var tableRow = document.createElement('tr');
  // create a td
  var tableData = document.createElement('th');
  // fill it with the word 'Total'
  tableData.textContent = 'Total';
  // append it to the table row
  tableRow.appendChild(tableData);

// Outer loop: for each hour
  // Inner loop is going to loop over each store
  // Access my "cookies sold each hour" array at the same position as my outer loop

  for(var i=0; i<hours.length; i++){
    var sum = 0;

    for(var j=0; j<allStores.length; j++){
      sum += allStores[j].cookiesSoldEachHour[i];
    }
    
    // sum is an hourly total, so for the "total" total, we want to add those those sums to it each loop

    totalOfAllTotals += sum; // adds sum to grand total each loop

    // create a td
    tableData = document.createElement('td');
    // fill it with the "sum"
    tableData.textContent = sum;
    // append it to the table row
    tableRow.appendChild(tableData);

  }

  // Append the total of all totals
  // create a td
  tableData = document.createElement('td');
  // fill it with the total of all totals
  tableData.textContent = totalOfAllTotals;
  // append it to the table row
  tableRow.appendChild(tableData);
  // append table row to parent element
  parentElement.appendChild(tableRow);
};




var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

renderHeader();  
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooter();

