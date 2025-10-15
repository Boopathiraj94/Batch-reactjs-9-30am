import Sidemenu from './components/Sidemenu'
import Banner from './components/Banner'
import About from './components/About'
import './App.css'
import { Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
      <Sidemenu />
      <div>
        <Routes>
          <Route path='/' element={<Banner />}  />
          <Route path='/about/*' element={ <About />} />
        </Routes>
      </div>


    </>
  )
}

export default App
