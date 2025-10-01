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

/* We have a Promise-object named randomPromise that hold the values of async operation.
having different states - if fulfilled then

*/

const randomPromise = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 10);

  setTimeout(() => {
    if (randomNumber > 4) {
      resolve("Well Done! You Guessed Right.");
    } else {
      reject("Oops! You Guessed Wrong! Unlucky.");
    }
  });
});

// console.log(randomPromise);

randomPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise One Resolved");
  }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Two rejected");
  }, 1500);
});

Promise.all([promiseOne, promiseTwo])
  .then((data) => {
    console.log(data[0], data[1]);
  })
  .catch((error) => {
    console.log(error);
  });

// Two promises
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("🍎 Apple"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("🍌 Banana"), 1500)
);

console.log("Before Promise.all:");
console.log([promise1, promise2]); // array of Promise objects

Promise.all([promise1, promise2]).then((results) => {
  console.log("After Promise.all resolves:");
  console.log(results); // array of resolved values
});

// Promises / Async-Await
// Function that returns a promise
const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = false;
      if (preHeatOven) {
        resolve("Preheat oven to 180deg");
      } else {
        reject("Failed Task One.");
      }
    }, 1000);
  });
};
const addSugarAndChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addChoco = true;
      if (addChoco) {
        resolve(
          "Place butter and chocolate chips, stir until melted and smooth"
        );
      } else {
        reject("Failed");
      }
    }, 1000);
  });
};
const addFlourCocoaAndSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addSaltFlour = true;
      if (addSaltFlour) {
        resolve("Add flour, coco and salt and stir until smooth");
      } else {
        reject("Failed");
      }
    }, 1000);
  });
};
const bakeMixture = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeMixture = true;
      if (bakeMixture) {
        resolve("Bake for 24 minutes for really gooey center");
      } else {
        reject("Failed");
      }
    }, 1000);
  });
};

const bakeChocolateBrownies = async () => {
  try {
    const taskOne = await preHeatOven();
    console.log(taskOne);

    const taskTwo = await addSugarAndChocoChips();
    console.log(taskTwo);

    const taskThree = await addFlourCocoaAndSalt();
    console.log(taskThree);

    const taskFour = await bakeMixture();
    console.log(taskFour);
  } catch (error) {
    console.log(error);
  }
};

bakeChocolateBrownies();
