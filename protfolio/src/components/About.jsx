import React from 'react'

import './About.css'
import Tea from './Tea'
import Coffee from './Coffee'
import { Routes, Route, Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className="about">

        <div className="about-header">
          <h1>About</h1>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <ul>
          <Link to='/about/tea'><li>Tea</li> </Link>
          <Link to='/about/coffee'><li>Coffee</li></Link>
        </ul>

        
          <Routes >
            
              <Route path='tea' element={<Tea />} />
              <Route path='coffee' element={<Coffee />} />
           
          </Routes>
      


      </div>
    </>
  )
}

export default About