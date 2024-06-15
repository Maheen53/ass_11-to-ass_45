"use strict";
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country
//  a default value. Call your function for three different cities, 
// at least one of which is not in the default country.
function describe_city(city, country = "unknown") {
    console.log(`${city} in a ${country}`);
}
describe_city("karaci", "pakistan");
describe_city("newyork", "usa");
describe_city("paris", "");
