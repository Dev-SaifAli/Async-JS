/* Callback function
        Function that is passed as an argument to another function.*/

function greet(name, Callback) {
  let message = `Hello ${name}`;
  console.log(message);
  Callback();
}

function goodBye() {
  console.log("Good Bye..👋");
}

greet("Saif Ali", goodBye);

// Async function

const showMessage = (callback) => {
  console.log(callback); // Here callback is any value not function
};

// here callback function is used.

const firstMessage = (callback) => {
  setTimeout(() => {
    showMessage("Hello");
    callback();
  }, 2000);
};

const secondMessage = () => {
  showMessage("World!");
};
firstMessage(secondMessage);

// Promises = An object holds the future value of an async operation.
/* 3 states: 1. Pending 2. Fulfilled (resolve) 3. Rejected */

const promise = new Promise((resolve, reject) => {
  const allWentWell = true;

  if (allWentWell) {
    resolve("All things went well");
  } else {
    reject("Oops! Something went wrong");
  }
});

console.log(promise);
