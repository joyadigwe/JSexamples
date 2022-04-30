let cities = ["Ankara", "Istanbul", "Antalya" , "Bursa" , "Trabzon"];
let city = "Bursa";
let chars = 7;

let match1 = cities.find(item => {
    if (city === item) return true;
});
console.log("item from cities that matched was", match1);

var characters = ["Luke", "Leia", "Han", "Chewie"];
console.log(characters);
console.log(characters.length);
console.log(characters[0]);
console.log(characters[3]);

characters.push('Anakin');
characters.push('Obiwan');
console.log(characters);

characters.pop();
console.log(characters);

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

 // for(let i = 0; i < companies.length; i++) {
 //     console.log(companies[i]);
 // };

  // forEach
  //doing the same function without the loop
  // returns all the information for the company, to only get the name do company.name

  companies.forEach(function(company) {
      console.log(company.name);
  });

  // filter
  //filters items out from the array

 /* let canDrink = []; //creating a new array
  for(let i = 0; i < ages.length; i++) { //looping through the array
    if(ages[i] >= 21) { //only adding the ages that are equal to or greater than 21
        canDrink.push(ages[i]);
    }
  }*/

  const canDrink = ages.filter(function(age) {
      if(age >= 21) {
        return true;
      }
  });

  console.log(canDrink);
  // map
  // sort
  // reduce
