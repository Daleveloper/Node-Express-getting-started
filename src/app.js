const express = require("express");
const morgan = require("morgan");
const app = express();

const sayHello = (req, res) => {
    console.log(req.query);
    const name = req.query.name;
    const content = name ? `Hello, ${name}!` : "Hello!";
    res.send(content);
};

// const saySomething = (req, res) => {
//     const greeting = req.params.greeting;
//     const content = `${greeting}!`;
//     res.send(content);
//   };

const saySomething = (req, res) => {
    const greeting = req.params.greeting;
    const name = req.query.name;
    const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
    res.send(content);
};


const sayGoodbye = (req, res) => {
  res.send("Sorry to see you go!");
};

const logging = (req, res, next) => {
    console.log("A request is being made!");
    next();
};

app.use(morgan("dev"));
app.use(logging);
app.get("/hello", sayHello);
app.get("/say/goodbye", sayGoodbye);
app.get("/say/:greeting", saySomething);

module.exports = app;