// Promises.js

// function orderFood() {
//     return new Promise((resolve, reject) => {
//         console.log("Step 1: You order something to eat.");
//         setTimeout(() => {
//             console.log("Step 2: Kitchen prepares your food.");
//             resolve("Food is ready!");
//         }, 2000);
//     });
// }

// function serveFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 3: Waiter brings food to your table.");
//             resolve();
//         }, 1000);
//     });
// }

// orderFood()
//     .then((message) => {
//         console.log(message);
//         return serveFood();
//     })
//     .then(() => {
//         console.log("Enjoy your meal!");
//     });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     let success = false; // Simulating success or failure
//     if (!success) {
//       reject("Error: Unable to fetch data from API.");
//       return;
//     }
//     console.log("Fetching data from API...");
//     setTimeout(() => {
//       const data = { id: 1, name: "John Doe" }; // Simulated API response
//       resolve(data);
//     }, 1500); // 1.5 seconds delay
//   });
// }
// // Calling fetchData function
// fetchData().then((data) => {
//   console.log("Data received from API:", data);
// });
function fetchTodo() {
  return (
    fetch("https://jsonplaceholder.typicode.com/todos")
      // fetch() returns a promise that resolves to the Response object representing the response to the request
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
  );
}
// Calling fetchTodo function
fetchTodo()
  .then((data) => {
    console.log("Todo item fetched from API:", data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
