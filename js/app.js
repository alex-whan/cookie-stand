'use strict';

// Global variables

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Constructor Function for Store locations

function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];  
  this.totalCookiesSoldForTheDay = 0;
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
  var parentElement = document.getElementById('table');

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


// Header rendering function - separate (not a prototype)
function renderHeader() {
  var parentElement = document.getElementById('table');

  // This is for the "Seattle" store (or "name")
  // Create a table row <tr>
  var tableRow = document.createElement('tr');

    // Create a <th>/<td> to stick onto table row <tr>
  var tableHeader = document.createElement('th')

    // Fill it with content: this.name
  tableHeader.textContent = hours;

    // Append <th> to the table row/<tr> we created (in this case, ROW is the parent, and <th> gets appended to its OWN parent (<tr>))
    // Want to append all <td>/<th> to the table row, then append ROW to TABLE once done
  tableRow.appendChild(tableHeader);

  // This is for "cookies sold each hour"
    // Loop over the cookies sold each hour
  for(var i=0; i<hours.length; i++){
    // create a <td>
    var tableData = document.createElement('td');
    // fill it with content: this.cookiesSoldEachHour[i]
    tableData.textContent = hours[i];
    // append <td> to the table row
    tableRow.appendChild(tableData);

    // Append whole table row <tr> to the parent (<tbody>)
  parentElement.appendChild(tableRow);
  }
  tableHeader.textContent = '';
}

// Footer rendering function - separate (not a protoype) - use nested FOR loops





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

