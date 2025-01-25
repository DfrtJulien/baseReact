import { useState } from 'react'
import viteLogo from '/vite.svg'

function App() {

  // const [person, setPerson] = useState({
  //   firstName: "Jhon",
  //   lastName: "Doe",
  //   age: 18
  // });

  // const [count, setCount] = useState(0)

  // const incrementAge = () => {
  //   setPerson({ ...person, age: person.age + 1 })
  // }

  // const incrementCount = () => {
  //   setCount(count + 1)
  // }

  // return <>
  //   <p>Age de {person.firstName}: {person.age}</p>
  //   <button onClick={incrementAge}>Gagner une année</button>
  //   <button onClick={incrementCount}>Incrementé {count}</button>
  // </>

  const [firstname, setFirstname] = useState('John doe')

  // const handleChange = (e) => {
  //   setFirstname(e.target.value);
  // }

  // const reset = () => {
  //   setFirstname(' ')
  // }

  // return <form action="">
  //   <input type="text" name="firstname" value={firstname} onChange={handleChange} />
  //   {firstname}
  //   <button onClick={reset} type="button">Reset</button>
  // </form>

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
  }

  const [checked, setChecked] = useState(false)
  const toggleCheck = () => {

    setChecked(!checked)
  }

  return < form action="" onSubmit={handleSubmit} >
    <input type="text" name="firstname" />
    <textarea name="" id=""></textarea>
    <input type="checkbox" onChange={toggleCheck} />
    <button disabled={!checked}>Envoyer</button>
  </form >
}


export default App
