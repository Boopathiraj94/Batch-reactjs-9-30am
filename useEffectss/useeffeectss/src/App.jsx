
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  /*
    useEffect(()=>{
      
    })

     useEffect(()=>{
      
    },[])

[] => dependency array


    const [count,setCount] = useState(0)
     useEffect(()=>{
      
    },[count])

   
  */

  // const [count, setCount] = useState(0)
  // const [times, setTimes] = useState(0)

  // onload , any state change it will call
  // useEffect(() => {
  //   console.log("i am from UseEffect")
  // })

  // if we add the dependancy array => onload call one time
  // useEffect(() => {
  //   console.log("i am from useEffect")
  // }, [])


  // one time [] , count , times state change it will call 
  // useEffect(() => {
  //   console.log("i am UseEffect")
  // }, [count,times])

  const [amount, setAmount] = useState(1)
  const [fromCurrency, setfromCurrency] = useState("USD")
  const [toCurrency, settoCurrency] = useState("INR")

  const [changeCurrency, setchangeCurrency] = useState(null);


  let loadData;
  let currecyLoad = async () => {

    loadData = await fetch(`https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`)
    // console.log(loadData);
    loadData = await loadData.json()
    console.log(loadData)
    let arr = Object.entries(loadData.rates)
    setchangeCurrency(arr[0][1])

  }

  useEffect(() => {

    currecyLoad()

  }, [toCurrency, fromCurrency])

  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}>Count Click</button>
      <button onClick={() => setTimes((times) => times + 1)}>Times Click</button>
      <p>count : {count}</p>
      <p>times : {times}</p> */}

      <div className='container'>
        <div className='box'>
          <div className='inputs'>
            <label htmlFor="">Amount</label>
            <input
              type="text"
              placeholder='amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className='inputs'>
            <label htmlFor="">From Currecny</label>
            {/* <input
              type="text"
              value={fromCurrency}
             
              placeholder='From Currecny'
            /> */}

            <select  onChange={(e) => setfromCurrency(e.target.value)}>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div className='inputs'>
            <label htmlFor="">To Currency</label>
            <input
              type="text"
              value={toCurrency}
              onChange={(e) => settoCurrency(e.target.value)}
              placeholder='To Currency'
            />
          </div>
          <div className='inputs'>
            <p>Currency amount : {changeCurrency}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
