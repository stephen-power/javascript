const fs = require('fs');

var people = {
    name: "Jim",
    age: 21,
    friends: [
       {
          name: "Sara",
          age: 23,
       },
       {
          name: "George",
          age: 22,
       }
    ]
 }

 var newFriends =    [
    {
       name: "Bill",
       age: 21,
    },
    {
       name: "fred",
       age: 78,
    }
 ]

 var peopleString = JSON.stringify(people);
 console.log(people)
 console.log(peopleString)
 fs.writeFileSync("people.json",peopleString); 
 let peopleFromFile = JSON.parse( fs.readFileSync('people.json')); 
 console.log("---jason read from file and converted to java object----") 
 console.log(peopleFromFile);
 console.log("name=",peopleFromFile.name);
 console.log("friends=",peopleFromFile.friends);
 peopleFromFile.friends = newFriends;
 console.log("new friends=",peopleFromFile.friends);
 
 fs.writeFileSync("new_people.json",JSON.stringify(peopleFromFile)); 

