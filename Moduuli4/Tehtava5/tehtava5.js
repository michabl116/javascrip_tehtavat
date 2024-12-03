// Function to fetch and display a random Chuck Norris joke
function fetchChuckNorrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('Random Chuck Norris Joke:', data.value);
        })
        .catch(function(error) {
            console.error('Error fetching the joke:', error);
        });
}

// Call the function to display the joke in the console
fetchChuckNorrisJoke();
