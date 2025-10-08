import React, { useState } from 'react'

const Events = () => {

    // const days = 7

    // useState()
    // step1 => import the useState()
    // syntax
    //  let count = 0
    // let name =""
    // const [a,b] = [1,2,4]
    // [undefined,function()]
    const [count, setCount] =  useState(0);
    const [name, setName] =  useState("-");
  
    // const [isCheck,setIsCheck] = useState(false)

    // const [products,setProducts] = useState({
    //     name:"",
    //     price:0,
    //     offerPrice:0
    // })

    // const [namelist , setNameList] = useState([])


    // console.log(count)
    // console.log(name)

    // function Clicked(name) {
    //     alert("clicked me!" + name)
    //     console.log("clicked me", name)
    // }

    // const handleMouseEnter = () => {
    //     console.log("mouseEnter")
    // }

    // const handleMouseLeave = function () {
    //     console.log("handleMouseLeave.....")
    // }

    // function handleInput(e) {
    //     console.log("input:", e.target.value)
    // }

     function handleInc(){
        setCount(count+1)
     }

     function handleDec(){
        setCount(count-1)
     }
     function handleReset(){
        setCount(0)
     }

    //  function handleInput(e){
    //    console.log(e.target.value)
    //    setName(e.target.value)
    //  }

    // task student details
    //  name , age, dob, gender , address, email , phone,

 
     console.log(count)
    return (
        <div>

            {/* <input 
            type='text'
            onChange={(e)=>handleInput(e)}
            /> */}

             <input 
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <p>{name}</p>

            <button onClick={handleInc}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
            <button onClick={handleReset}>Reset</button>
            <p>{count}</p>
            {/* <input type='text' onInput={(e) => handleInput(e)} />
            <button onClick={(e) => { Clicked("Siva") }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >Click</button> */}
        </div>
    )
}

export default Events