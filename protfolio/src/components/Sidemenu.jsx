import React from 'react'
import './Sidemenu.css';
import pro_img from '../assets/my-profile-img.jpg';

const Sidemenu = () => {
    return (
        <>
            <div className="sidemenu">

                <div className="profile-img">
                    <img src={pro_img} alt="" />
                    <h1>Denish</h1>

                    <div className="social-icon">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>

                <nav>
                    <ul>
                        <li> <i class="fa fa-home" aria-hidden="true"></i>
                            Home</li>
                        <li><i class="fa fa-user-o" aria-hidden="true"></i>
 About</li>
                        <li><i class="fa fa-file-o" aria-hidden="true"></i>
Resume</li>
                        <li><i class="fa fa-picture-o" aria-hidden="true"></i>
Portfolio</li>
                        <li><i class="fa fa-envelope-o" aria-hidden="true"></i>
Contact</li>
                    </ul>
                </nav>

                <h1>Denis</h1>

            </div>
        </>
    )
}

export default Sidemenu