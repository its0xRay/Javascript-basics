# JS Basics

## Variables 
Default value is undefined

Identifiers are case sensitive
can’t be a reserve keyword or start with number, no hyphen or space

Multiple variables can be declared in 1 statement but good modern practice is to have each variable in a new line.
```
let firstName = ‘its’;
let lastName = ‘0xRay’;
```

## Constants
Use when value or type(Arrays, Objects) should not be changed.
Cannot be reassigned. 
But you can change the elements of a constant array/properties of a constant object.

## Data Types / Primitives
* Number- 10,3.4
* String- “Mango”
* Boolean- true or false
* Object - object, array, date
* Undefined- not used commonly as it is the default value
* Null- situations where we ask user to input, if nothing selected then null
* BigInt- Large values 25345364561234242
* Symbol

JS is Dynamic language. Declared variable types can change during run time.
Also there is no integer float etc. it is just numbers. 
The number variable can become string in run time

Reference Types
Objects, Array, Function

## Operators
* Arithmetic: +,-,*,**,/%,++,--
* Assignment: =
* Comparison: ==,===,!=,!==,>,<,>=,<=
* Logical: &&,||, !
* Bitwise: &,|,~,^,<<,>>,>>>
* Ternary/Conditional: ?
* Type: typeof, ,instanceof

## Functions
Block of code performing a specific task. Can reuse code. 
Executed when called/invoked or abn event occurs or automatically

```
function name (parameter1, parameter 2,...) {
	// code
}
```
Variables declared within a function is Local to the function. Can be accessed only within that function.

# Arrow Functions
shorter syntax

```
let sum = (a,b) => a+b;
```

```
const functionName = (parameters) => {
  return parameters + 10;
}
```

## Higher-order built-in methods available on JavaScript arrays
Instead of writing regular loops, modern js supports built in methods 
* forEach: General-purpose iteration, no return value. (iterates over each element)
* map: Transformation, returns a new array. (ex- square all the numbers inside the array)
* filter: Selection, returns a new array with a subset of elements. (ex- filter elements >50)
* reduce: Accumulation, returns a single value. (ex- sum the array)

*every:
* find: Retrieves the first item from an array that meets a condition
* findIndex: Retrieves the index of the first item from an array that meets a condition
* some: Checks if any item(s) in an array meet a certain condition
* sort: Orders the elements in an array (in-place) based on a comparison strategy. If compare function is not added it will sort as per dictionary order and 100 will come up before 40

## Set

## Object
Are variables too. Contains many related values.
For example a car has make, model, type, color


How to Access? - objectName.propertyName

## Arrays
List of Objects
Ex: A list of 500 car names

```
const cars = ["BMW","Mercedes",...]
```

JS is a dynamic language so array length and type of objects can change
Array can have multiple types of data unlike other languages

---
Script is added towards the end of the HTML body so that HTML renders first while the intensive js file gets rendered next
