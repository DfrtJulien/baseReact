import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Input } from './components/forms/inputs'
import { Checkbox } from './components/forms/checkbox'
import { ProductCategoryRow } from './components/products/ProductCategoryRow'
import { ProductRow } from './components/products/ProductRow'


const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


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

  // const [firstname, setFirstname] = useState('John doe')

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

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(new FormData(e.target))
  // }

  // const [checked, setChecked] = useState(false)
  // const toggleCheck = () => {

  //   setChecked(!checked)
  // }

  // return < form action="" onSubmit={handleSubmit} >
  //   <input type="text" name="firstname" />
  //   <textarea name="" id=""></textarea>
  //   <input type="checkbox" onChange={toggleCheck} />
  //   <button disabled={!checked}>Envoyer</button>
  // </form >

  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState("")

  const visibleProduct = PRODUCTS.filter(product => {
    if (showStockedOnly && !product.stocked) {
      return false
    }

    if (search && !product.name.includes(search)) {
      return false
    }

    return true
  })

  return <div className='container my-3'>
    <SearchBar showStockedOnly={showStockedOnly} onStockOnlyChange={setShowStockedOnly} search={search} onSearchChange={setSearch} />
    <ProductTable products={visibleProduct} />
  </div>


}

function SearchBar({ showStockedOnly, onStockOnlyChange, search, onSearchChange }) {
  return <div className='mb-3'>
    <Input value={search} onChange={onSearchChange} placeholder="Rechercher ...." />
    <Checkbox checked={showStockedOnly} onChange={onStockOnlyChange} id="checkbox" label="Voir que les produit en stock" />

  </div>

}

function ProductTable({ products }) {
  const rows = []
  let lastCategory = null
  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }

  return <table className='table'>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}


export default App
