function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error in Promise.all:', error);
    });
    Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('First resolved promise result:', result);
    })
    .catch(error => {
        console.error('Error in Promise.race:', error);
    });
    let todoData, userData;

    Promise.all([fetchTodo(), fetchUser()])
        .then(([todo, user]) => {
            todoData = todo;
            userData = user;
            console.log('Todo:', todoData);
            console.log('User:', userData);
        })
        .catch(error => {
            console.error('Error in Promise.all:', error);
        });
    