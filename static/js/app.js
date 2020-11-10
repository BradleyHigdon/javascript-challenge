// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data)

 data.forEach((UFO) => {
    console.log(UFO);
    var row = tbody.append("tr");
  // Get the entries for each object in the array
  Object.entries(UFO).forEach(([key, value]) => {
    // Log the key and value
    var something = row.append("td"); 
    something.text(value);
  });
});






//Make sure you have a column for 
//`date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.