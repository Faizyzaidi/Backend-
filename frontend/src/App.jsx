import { useState } from 'react'

import './App.css'

function App() {
  const [joke , setJoke] = useState([])

  return (
    <div>
     <h1>THIS IS FULLSTACK BASIC PROJECT </h1>
     <p>Number of joke is {joke.length}</p>

     </div>
  )
}

export default App
