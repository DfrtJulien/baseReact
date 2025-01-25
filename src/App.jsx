import { useState } from 'react'
import viteLogo from '/vite.svg'

const title = "Bonjour les gens";
const style = { color: "red", backgroundColor: "blue" }
const showTitle = true
const todos = [
  "Manger",
  "Faire du sport",
  "Dormir"
]
function App() {

  const handleClick = () => {
    alert("J'ai cliquer sur le titre")
  }

  return <>
    {/* <h1 onClick={handleClick} style={style}>{title}</h1> */}
    {/* si showTitle est true alors j'affiche le h1 */}
    {/* {showTitle && <h1 style={style}>{title}</h1>}
    <input type="text" /> */}
    <Title color="red" id="monid" className="maclass" data-demo="demo">Mon Composant</Title>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt distinctio autem totam praesentium id inventore. Fuga eius tempora, aut consectetur rerum dolore architecto totam sit laudantium exercitationem delectus, beatae id vitae repudiandae! Soluta odit perferendis aliquam. Voluptatem saepe blanditiis quidem ab voluptates libero provident, sapiente impedit dolores porro doloremque similique?</p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </>
}

function Title({ color, ...props }) {


  return <h1 style={{ color: color }} {...props} />
}

export default App
