# Unhandled Exceptions in Express.js

This repository demonstrates a common error in Express.js applications: unhandled exceptions.  Unhandled exceptions can cause the server to crash unexpectedly, leading to downtime and data loss.  This example shows how to reproduce the problem and how to implement robust error handling to prevent crashes.

## Bug

The `bug.js` file contains an Express.js application with a potential unhandled exception.  Running this code without proper error handling will cause a crash when an error occurs.

## Solution

The `bugSolution.js` file demonstrates how to handle exceptions using a try...catch block. This prevents the server from crashing and allows for graceful error handling, providing a better user experience and server reliability.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `npm install` to install dependencies (only required for the solution)
4. Run `node bug.js` to run the buggy application.
5. Run `node bugSolution.js` to run the fixed application.