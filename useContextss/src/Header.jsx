import React from 'react'
import Aside from './Aside'

const Header = (props) => {
    return (
        <>
             Header
            <Aside data={props.data1} />
        </>
    )
}

export default Header