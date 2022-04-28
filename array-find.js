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