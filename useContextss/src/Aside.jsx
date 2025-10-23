import React from 'react'
import Footer from './Footer'
const Aside = (props) => {
    return (
        <>
            <div>Aside</div>
            <Footer data={props.data} />
        </>
    )
}

export default Aside