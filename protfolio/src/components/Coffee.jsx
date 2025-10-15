import React from 'react'
import imgss from '../assets/my-profile-img.jpg'
const Coffee = () => {
    return (
        <div>

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
    )
}

export default Coffee