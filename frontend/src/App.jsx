import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [joke , setJoke] = useState([])
  useEffect(() => {
    // Fetch jokes from the backend server
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setJokes(data))
      .catch(error => console.error('Error fetching jokes:', error));
  }, []);
  return (
    <div>
     <h1>THIS IS FULLSTACK BASIC PROJECT </h1>
     <p>Number of joke is {joke.length}</p>
     <ul>
        {jokes.map((joke) => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
     </div>
  )
}

export default App
