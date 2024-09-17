import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // Fetch jokes using the /api prefix
    fetch('/api/')
      .then(response => response.json())
      .then(data => setJokes(data))
      .catch(error => console.error('Error fetching jokes:', error));
  }, []);

  return (
    <div>
      <h1>THIS IS FULLSTACK BASIC PROJECT</h1>
      <p>Number of jokes is {jokes.length}</p>
      <div>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <p><strong>{joke.title || "no title"}</strong></p>
            <p>{joke.joke}</p>
          </div>
        ))}
        </div>
    </div>
  );
}

export default App;
