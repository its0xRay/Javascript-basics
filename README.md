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

## Functions
Block of code performing a specific task. Can reuse code. 
Executed when called/invoked or abn event occurs or automatically

```
function name (parameter1, parameter 2,...) {
	// code
}
```
Variables declared within a function is Local to the function. Can be accessed only within that function.

## Higher-order methods available on JavaScript arrays
* forEach: General-purpose iteration, no return value. (iterates over each element)
* map: Transformation, returns a new array. (ex- square all the numbers inside the array)
* filter: Selection, returns a new array with a subset of elements. (ex- filter elements >50)
* reduce: Accumulation, returns a single value. (ex- sum the array)
