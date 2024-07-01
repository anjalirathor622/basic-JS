console.log("hello");

// HTML Web Storage Objects:-
// HTML web storage provides us with two objects for storing data:

// window.localStorage – It stores the data with no expiration date
// window.sessionStorage -It stores the data for one session. That means the data is lost when   
// the browser tab is closed.

// Creating Entries:- We can create the key/value pair entries with localStorage.setItem, providing a key and a value. Here is an example:
let key = 'Entry_1';
localStorage.setItem(key, 'Value');

// Reading Entries:- We can read entries with localStorage.getItem. Here is an example:
let myItem = localStorage.getItem(key);

// Updating Entries:- We can update an entry just as we create a new one with setItem, but with a key that already exists. Here is an example:
localStorage.setItem(key, 'New Value');

// Deleting Entries:- We can delete an entry with the removeItem method. Here is an example:
localStorage.removeItem(key);

// Clearing Everything:- We can clear everything that's stored in localStorage. Here is an example:
localStorage.clear();

// Storing JSON Objects:- Only strings can be stored with localStorage or sessionStorage, but we can use JSON.stringify to store more complex objects and JSON.parse to read them. Here is an example:
// Create item:
let myObj = { name: 'Harry', language: 'JavaScript' };
localStorage.setItem(key, JSON.stringify(myObj));
// Read item:
let item = JSON.parse(localStorage.getItem(key));

//to understand this better i have build a small project where I have build a ediable div and anaother one that notes app their also i have used local storage