import { useState } from 'react'
import './App.css'

const products = [
  { id: 1, name: "Кросівки", price: 1200, icon: "👟" },
  { id: 2, name: "Куртка",   price: 2400, icon: "🧥" },
  { id: 3, name: "Рюкзак",   price: 890,  icon: "🎒" },
]

function Card({ name, price, icon, onAdd }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h2 className="card-name">{name}</h2>
      <p className="card-price">{price} грн</p>
      <button className="add-btn" onClick={onAdd}>
        Додати в кошик
      </button>
    </div>
  )
}

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart([...cart, product])
  }

  return (
    <div>
      <header className="header">
        <div className="logo">SHOP</div>
        <button className="cart-btn">
          Кошик — {cart.length} товарів
        </button>
      </header>

      <div className="grid">
        {products.map(product => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            icon={product.icon}
            onAdd={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default App