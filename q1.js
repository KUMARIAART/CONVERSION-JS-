//Example 1: Implicit Conversion to String
// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"

//Example 2: Implicit Conversion to Number
// numeric string used with - , / , * results number type

//let result;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

//Example 3: Non-numeric String Results to NaN
// non-numeric string used with - , / , * results to NaN

//let result;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN

//Example 4: Implicit Boolean Conversion to Number
// if boolean is used, true is 1, false is 0

//let result;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

//Example 5: null Conversion to Number
//null is 0 when used with number
//let result;

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4

//Example 6: undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN

//let result;

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN

//1. Convert to Number Explicitly
//let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0
Run

//In JavaScript, empty strings and null values return 0. For example
//let result;
result = Number(null);
console.log(result);  // 0

//let result = Number(' ')
console.log(result);  // 0

//If a string is an invalid number, the result will be NaN. For example
//let result;
result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

//Note: You can also generate numbers from strings using parseInt(), parseFloat(), unary
//operator + and Math.floor(). For example
//let result;
result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

//2. Convert to String Explicitly
//number to string
//let result;
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

//3. Convert to Boolean Explicitly
//let result;
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

//All other values give true. For example,
result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true

//Example: Convert Date to Number
// program to convert date to number
// create date
const d1 = new Date();
console.log(d1);

// converting to number
//const result = d1.getTime();
console.log(result);

//The new Date() gives the current date and time.
//const d1 = new Date();
console.log(d1); // Mon Nov 09 2020 10:52:32 GMT+0545 (Nepal Time)

//The getTime() method returns the number of milliseconds from midnight of January 1, 1970
//(EcmaScript epoch) to the specified date.
//const d1 = new Date().getTime();
console.log(d1); // 1604898452084

//Example : Display Current Date
// program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);

//1. The new Date() gives the current date and time.

///const date = new Date();
console.log(date);
// Sun Aug 23 2020 10:46:38 GMT+0545 (+0545)

//2. The toDateString() method returns the date portion of a date object.
//const n = date.toDateString();
console.log(n); // Wed Aug 26 2020

//3. The toLocaleTimeString() method returns the time portion of a date object.
//const time = date.toLocaleTimeString();
console.log(time); // 1:13:12 PM









