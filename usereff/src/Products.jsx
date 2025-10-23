import React, { useEffect, useRef, useState } from 'react'

const Products = () => {

    const [name, setName] = useState('');

    // console.log(useState(''))
    // console.log(useRef())

    const usernameRef = useRef('') // declare / initial
    const stockRef = useRef('')
    const priceRef = useRef('')


    useEffect(() => {
        stockRef.current.focus()
    }, [])
    console.log(name)

    function handleSubmit() {
        console.log(usernameRef.current.value)
        console.log(stockRef.current.value)
        console.log(priceRef.current.value)
    }
    return (
        <div>

             <input
                type="text"
                placeholder='Enter your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> 



            <input
                type="text"
                ref={usernameRef}
                placeholder='Enter your user Name'
            /> <br />

            <input
                type="text"
                ref={stockRef}
                placeholder='Enter your Stock'
            /> <br />

            <input
                type="text"
                ref={priceRef}
                placeholder='Enter your Price'
            /> <br />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Products