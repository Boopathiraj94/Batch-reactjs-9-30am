
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [camount, setCAmount] = useState(null);
  useEffect(()=>{
      axios.get(`https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`)
      .then((res)=>{
          let response = res.data;
          let rate =  Object.entries(response.rates)[0]

          // {key:value} => [key, value]
          // console.log(rate[1])
           setCAmount(rate[1])
      })
      .catch((err)=>{
        console.log(err)
      })
  },[toCurrency])

  
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="inputs">
            <input
              type="text"
              value={amount}
              placeholder='Enter the amount'
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="inputs">
            <input
              type="text"
              value={fromCurrency}
              placeholder='From Currency'
              onChange={(e) => setFromCurrency(e.target.value)}
            />
          </div>
          <div className="inputs">
            {/* <input
              type="text"
              value={toCurrency}
              placeholder='To Currency'
              
            /> */}

            <select onChange={(e) => setToCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <div className="inputs">
            <h2>{camount || 0}</h2>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
