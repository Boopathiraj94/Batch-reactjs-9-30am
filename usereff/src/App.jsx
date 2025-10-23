import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // console.log(useRef());
  // const nameRef = useRef(null); // declaration
  // const priceRef = useRef(0);
  // const stockRef = useRef();
  // const descRef = useRef();

  const countRef = useRef(0);  //declare initial


  // useEffect(()=>{
  //   nameRef.current.focus();
  //   priceRef.current.value = 5000;
  // },[])

  // function handlesave(e){
  //   setCount(e.target.value);
  //   console.log(count)
  // }

  // presisting values across renders nameRef.current.value
  // direct access to DOM ref={nameRef} 
  //  without re-render

  // focus , animation, direct access of dom
  // prevouis state check

  // third party lib integration
0

  // function handleSubmit() {
  //   console.log(nameRef.current.value)
  //   console.log(priceRef.current.value)
  //   console.log(stockRef.current.value)
  //   console.log(descRef.current.value)
  // }

   function clickme(){
    console.log(countRef.current)
      countRef.current = countRef.current + 1;
   }
  return (
    <>
      {/* <input

        type="text"
        ref={nameRef}
        placeholder='Enter the product name'
      /> <br />
      <input

        type="text"
        ref={priceRef}
        placeholder='Enter the Price'
        value={priceRef.current.value}
      /><br />
      <input

        type="text"
        ref={stockRef}
        placeholder='Enter the stock'
      /><br />
      <input

        type="text"
        ref={descRef}
        placeholder='Enter the Description'
      /><br />

      <button onClick={handleSubmit}>Submit</button> */}

      <p>{countRef.current}</p>

      <button onClick={clickme}>count click</button>
    </>
  )
}

export default App
