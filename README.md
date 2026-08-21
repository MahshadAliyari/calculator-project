# JavaScript Calculator

A simple calculator built with **HTML, CSS, and  JavaScript**.

This project is the first practical exercise of Phase 4 — JavaScript.

## Features

* Addition
* Subtraction
* Multiplication
* Division
* Division-by-zero error handling
* DOM manipulation
* Click event handling
* Basic input handling

## Technologies

* HTML5
* CSS
* JavaScript

## JavaScript Concepts

This project practices the following JavaScript concepts:

* `const`
* Variables
* `Number()`
* Functions
* Parameters and arguments
* `return`
* `if` statements
* `===` strict comparison
* DOM selection with `querySelector()`
* Events with `addEventListener()`
* Input values with `.value`
* `textContent`
* Basic error handling

## How It Works

1. The user enters the first number.
2. The user enters the second number.
3. The user selects an arithmetic operator.
4. The user clicks the **Calculate** button.
5. JavaScript reads the input values.
6. The `calculate()` function performs the selected operation.
7. The result is displayed on the page.

If the user tries to divide by zero, the calculator displays an error message instead of performing the operation.


## Error Handling

The calculator checks for division by zero:

```js
if (b === 0) {
    return "Cannot divide by zero";
}
```

This prevents an invalid calculation and provides a user-friendly error message.

## Debugging

The project was tested using Chrome DevTools and JavaScript Breakpoints.

A breakpoint can be placed on the calculation line to inspect variables such as:

* `number1`
* `number2`
* `operator`
* `answer`

This helps identify and fix JavaScript errors during execution.

## Learning Goal

The main goal of this exercise is to practice JavaScript fundamentals, including:

**Functions → Conditions → Events → DOM → Error Handling → Debugging**

## Status

Completed — Exercise 1: Calculator
