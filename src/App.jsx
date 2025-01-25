import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {

  const [person, setPerson] = useState({
    firstName: "Jhon",
    lastName: "Doe",
    age: 18
  });

  const [count, setCount] = useState(0)

  const incrementAge = () => {
    setPerson({ ...person, age: person.age + 1 })
  }

  const incrementCount = () => {
    setCount(count + 1)
  }

  return <>
    <p>Age de {person.firstName}: {person.age}</p>
    <button onClick={incrementAge}>Gagner une année</button>
    <button onClick={incrementCount}>Incrementé {count}</button>
  </>
}


export default App
