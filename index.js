/*
JS EXERCISES


27) Write a function to get the maximum and minimum values from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays as parameters and returns the longest one
30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
*/
// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let x = "John";
let y = "Doe";


console.log(x + " <> " + y)

//22) Create an object with properties such name, surname, email

const person = { name: "raeven", surname: "goncalves", email: "raevengaoncalves@gamil.com" };

// 23) Delete the email property from the previously created object

delete person.email;

//24) Create an array with 10 strings in it

let strings = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "split"]

//25) Print in the console every string from the previous array

console.log(strings)

//25) Print in the console every string from the previous array

for (let i = 0; i < strings.length; i++) {
  console.log(strings[i]);
}
for (let string of strings) {
  console.log(string);
}
//26) Create an array with 100 random numbers in it

const randomArray = []

for (let i = 0; i < randomArray.length; i++) {
  let random = randomArray.Math.floor(Math.random() * 100) + 1;
  console.log(random);
}



/*

DOM EXERCISES




34) Write a function to change the heading of the page
35) Write a function to add an extra row to the table
36) Write a function to add a class of "test" to each row in the table
37) Write a function to add a red background to every link in the page
38) Console log "Page loaded" when the page is correctly loaded
39) Write a function to add new items to a unordered list
40) Write a function to empty a list
*/

//31) Get the element with an id of "container" from the page

let node = document.getElementById(".container")

//32) Get every <td> element from the page

let elemnent = document.getElementsByTagName("tr")


//33) Use a loop for printing the text inside of every <td> element in the page

/*
EXTRA EXERCISES

41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
42) Create a button that will hide every image on the page when clicked
43) Create a button that will hide or show the table on the page when clicked
44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
45) Delete the last letter from the heading each time the user clicks on it
46) Change the background color of a <td> if the user clicks on it
47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
48) Add automatically a pink border to a cell when the mouse hovers it
49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
50) Write a function to remove the last table from the page

/* WHEN YOU ARE FINISHED
  Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/