# warehouse-robot
This project demonstrate a robot in a warehouse (a grid) which is able to move based on the received commands.

All of the commands to the robot consist of a single capital letter and different commands are delineated by whitespace.

#### Functionality

The Robot accepts the following commands:

* N move north
* W move west
* E move east
* S move south

The command sequence: "N E S W" will move the robot in a full square, returning it to where it started.

If the robot starts in the south-west corner of the warehouse then the following commands will move it to the middle of the warehouse.

"N E N E N E N E"

## Getting Started

To run this project, follow these steps:
- In terminal, go to the root of this project and run `npm i`
- Once the dependencies are installed you can simply run the below commands:
    - `npm run test` to run the existing unit tests
    - `npm run test-coverage` to run the existing unit tests with coverage
    - `npx tsc` to build the typescript project followed by `node dist/index.js` to see the output of `"N E N E N E N E"` command.

### Testing

For the demonstration purpose, this project is using `jest` for unit testing

- The tests can be run by using the command `npm run test`.

### Project Built Using

- git
- Node.js v18.4.0
- Typescript v5.4
- NPM v8.12.1
- Jest v29.7 for Unit Testing 

### Acknowledgements

- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)