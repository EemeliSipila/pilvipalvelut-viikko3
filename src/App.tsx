
import { useEffect, useState } from 'react'
import './App.css'

// Generoi satunnaisen koodinimen
function generateCodeName() {
  const adjectives = ['Sneaky', 'Happy', 'Crazy', 'Super', 'Lazy']
  const animals = ['Panda', 'Tiger', 'Monkey', 'Fox', 'Penguin']

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const animal = animals[Math.floor(Math.random() * animals.length)]
  const number = Math.floor(Math.random() * 100)

  return `${adjective}${animal}${number}`
}

function App() {
  const [codeName, setCodeName] = useState('')

  useEffect(() => {
    // Tarkistetaan, onko koodinimi jo tallennettu
    const savedName = localStorage.getItem('codename')

    if (savedName) {
      setCodeName(savedName)
    } else {
      const newName = generateCodeName()
      localStorage.setItem('codename', newName)
      setCodeName(newName)
    }
  }, [])

  // Käyttäjä voi halutessaan generoida uuden nimen
  const generateNewName = () => {
    const newName = generateCodeName()
    localStorage.setItem('codename', newName)
    setCodeName(newName)
  }

  return (
    <div>
      <h1>Koodinimigeneraattori</h1>
      <p>Sinun koodinimesi on:</p>
      <h2>{codeName || 'Ladataan...'}</h2>

      <button onClick={generateNewName}>
        Generoi uusi koodinimi
      </button>
    </div>
  )
}

export default App
