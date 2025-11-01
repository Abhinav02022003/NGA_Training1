// Revealing Module Pattern for organizing Fetch API logic
const DataFetcher = (function () {
  const postsURL = "https://jsonplaceholder.typicode.com/posts";
  const todosURL = "https://jsonplaceholder.typicode.com/todos";

  // Generic fetch function with error handling
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      displayError(error.message);
      return [];
    }
  }

  function displayError(message) {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = `⚠️ ${message}`;
  }

  // Display blog posts
  async function displayPosts() {
    const posts = await fetchData(postsURL);
    const postsContainer = document.getElementById("posts");

    if (posts.length === 0) {
      postsContainer.innerHTML = "<p>No posts available.</p>";
      return;
    }

    posts.slice(0, 10).forEach((post) => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(div);
    });
  }

  // Display todo list
  async function displayTodos() {
    const todos = await fetchData(todosURL);
    const todosContainer = document.getElementById("todos");

    if (todos.length === 0) {
      todosContainer.innerHTML = "<p>No todos available.</p>";
      return;
    }

    todos.slice(0, 10).forEach((todo) => {
      const div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `
        <input type="checkbox" ${todo.completed ? "checked" : ""} />
        <span>${todo.title}</span>
      `;
      todosContainer.appendChild(div);
    });
  }

  // Reveal public methods
  return {
    init: function () {
      displayPosts();
      displayTodos();
    },
  };
})();

// Initialize on page load
document.addEventListener("DOMContentLoaded", DataFetcher.init);
