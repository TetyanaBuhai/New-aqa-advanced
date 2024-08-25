function fetchTodo(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error));
  }
  fetchData('https://jsonplaceholder.typicode.com/todos/1', function(data) {
    console.log(data);
  });
  
  function fetchData2(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error));
  }
  fetchData2('https://jsonplaceholder.typicode.com/users/1', function(data) {
    console.log(data);
  }); 
