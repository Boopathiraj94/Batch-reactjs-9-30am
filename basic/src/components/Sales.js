import React, { useEffect, useState } from 'react'

const Sales = () => {
    const [count , setcount] = useState(0);
    const [times , settimes] = useState(0);

    useEffect(()=>{
        console.log("use effect on load")
    },[count,times])

    // one time call , onload
    useEffect(()=>{
        console.log("use effect on load")
    },[])

    // onload , any state change it will work
     useEffect(()=>{
        console.log("use effect on load")
    })

    // onload and in any state will change it will rerender

    // useEffect will call one time , you can add []

    // [state] => onload will work, particular state will change , then useEffect will call

  return (
    <div>
        <button onClick={()=> setcount(count+1)}>click</button>
        <button onClick={()=> settimes(times+1)}>times</button>
        <p>count: {count}</p>
        <p>times: {times}</p>
    </div>
  )
}

export default Sales