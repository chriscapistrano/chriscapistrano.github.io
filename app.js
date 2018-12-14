// From data.js
var tableData = data;
console.log(tableData);

// Select table body so we can append the data
var tableHead = d3.select(".table");
var tableBody = d3.select("tbody");

// Append rows and tableData items
tableData.forEach(function(item) {
    console.log(tableData);
    var row = tableBody.append("tr");

    Object.entries(item).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
})
});

// JavaScript code that will listen for events and search through the date/time column to find rows that match user input
// filtered data will be console logged 
var button = d3.select(".btn");
button.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element
    var inputElement = d3.select("input");
  
    // Get the value of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    //console.log(tableData);
  
    var filteredData = tableData.filter(item => item.datetime === inputValue);
  
    //log filtered data to console
    console.log(filteredData);
});
