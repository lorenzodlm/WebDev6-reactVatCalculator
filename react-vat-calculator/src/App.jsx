import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const vat = 0.07

  const calculateTotalPrice = () => {
    const totalPrice = (price - discount) * vat;
    return totalPrice.toFixed(2);
  };

  return (
    <>
      <div>
      </div>
      <h2 style={{fontSize:'30px'}}>
        Price
      </h2>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        style={{border: '2px solid blue', backgroundColor: 'lightgray', color: 'black', fontSize: '20px'}}
      />
      <h2 style={{fontSize:'30px'}}>
        Discount
      </h2>
      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Discount"
        style={{border: '2px solid blue', backgroundColor: 'lightgray', color: 'black', fontSize: '20px'}}
      />
      <p style={{fontweight:'blue', fontSize:'24px'}}>
        Total Price: {calculateTotalPrice()}
      </p>
    </>
  )
}

export default App
