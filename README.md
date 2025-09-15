# XML States
---
- 0	UNSENT	Client has been created. open() not called yet.
- 1	OPENED	open() has been called.
- 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
- 3	LOADING	Downloading; responseText holds partial data.
- 4	DONE	The operation is complete.
---

# Magic of Prototype in JavaScript

The default behavior of javascript is prototypal .

- for example: agr hume koi cheez nai mil rhi to woh kaam javascript layers by layers ja kr means parents, grandparents tk ja kr search krti hai, means kabhi haar nai manti. To yehi iska prototypal behavior hai.

- to isi behavior se humara "this" keyword link hota hai.

- "this" ka access arrow function me nai hota. woh is liye nai hota kyu k waha pr yeh prototype ajata hai.

- to "new", "this" "classes", "inheritance" hume is prototype behavior ki waja se hi mili hain.

- yehi javascript ka behavior hai, agr yaha nai mila to dusri jaga, agr dusri jaga nai to tisri jaga. yehi hai prototypal behavior aur is prototypal inheritance bhi kehty hain.

## From Object.js in 10_classes_and_oop folder

JavaScript me hr aik cheez object hoti hi hai.
Function, function bhi hai, aur aik object bhi hai.