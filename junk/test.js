const fs = require('fs');

var people = {
    name: "Jim",
    age: 21,
    friends: [
       {
          name: "Sara",
          age: 23,
          friends:[
             {
                name: "Bob",
                age: 45,
                friends:[
                   // and so on...
                ]
             }
          ]
       },
       {
          name: "George",
          age: 22,
          friends:[
             // and so on...
          ]
       }
    ]
 }

 var peopleString = JSON.stringify(people);
 console.log(people)
 console.log(peopleString)
 fs.writeFileSync("people.json",peopleString); 
 let peopleFromFile = JSON.parse( fs.readFileSync('people.json'));  