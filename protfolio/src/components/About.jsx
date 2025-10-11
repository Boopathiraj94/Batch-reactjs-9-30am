import React from 'react'
import imgss from '../assets/hero-bg.jpg'
import './About.css'
const About = () => {
    return (
        <>
            <div className="about">
                   
                   <div className="about-header">
                     <h1>About</h1>
                     <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                   </div>

                  <div className="css">
                    <div className="css-per"></div>
                  </div>

                  <div className="box">
                    <img src={imgss} alt="" />

                    <div className="blur-box">
                            <button>Add To Cart</button>
                    </div>
                     <div className="blur-box1">
                            <button>Add To Cart</button>
                    </div>
                  </div>

            </div>
        </>
    )
}

export default About