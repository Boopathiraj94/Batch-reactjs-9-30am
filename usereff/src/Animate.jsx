import React, { useRef } from 'react'

const Animate = () => {

    const mainRef = useRef();
    const contactRef = useRef();
    const serviceRef = useRef();

    let scrollAnimation = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth"
        })
        console.log(ref.current.className, ref.current.className.includes("main"))
        // ref.current.style.backgroundColor = "blue"
        // if(ref.current.className.includes("main")){
        //     ref.current.style.backgroundColor = "blue"
        // }
        // else if(ref.current.className.includes("contact")){
        //      ref.current.style.backgroundColor = "green"
        // }else{
        //      ref.current.style.backgroundColor = "orange"
        // }

    }

    return (
        <>
            <header>
                <ul>
                    <li onClick={() => scrollAnimation(mainRef)} >Home</li>
                    <li onClick={() => scrollAnimation(contactRef)} >Contact</li>
                    <li onClick={() => scrollAnimation(serviceRef)} >Services</li>
                </ul>
            </header>

            <main ref={mainRef} className='container main'>
                Hi welcome
            </main>

            <section ref={contactRef} className='container contact'>
                contact
            </section>

            <div className='service container' ref={serviceRef}>
                services
            </div>
        </>
    )
}

export default Animate