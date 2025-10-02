
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import withReactContent from 'sweetalert2-react-content'

function App() {
  const MySwal = withReactContent(Swal)

  const [pname, setPname] = useState('')
  const [pprice, setPprice] = useState(0)

  let handleSave = () => {

    console.log(pname, pprice)

    let productData = {
      productName: pname,
      Price: pprice,
    }

    axios.post("http://localhost:5000/v1/products", productData)
      .then((resp) => {
        console.log(resp.data)

        if (resp.data.status) {
          toast.success(resp.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Flip,
          });
          // MySwal.fire({
          //   title: <p>{resp.data.message}</p>,
          //   // didOpen: () => {
          //   //   // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          //   //   MySwal.showLoading()
          //   // },
          // }).then(() => {
          //   return MySwal.fire(<p>Shorthand works too</p>)
          // })
        }




      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <>
      <input type="text"
        placeholder='ProductName'
        value={pname}
        onChange={(e) => setPname(e.target.value)} />

      <input
        type="text"
        placeholder='ProductPrice'
        value={pprice}
        onChange={(e) => setPprice(e.target.value)}
      />
      <button onClick={handleSave} >Save</button>
      <ToastContainer />
    </>
  )
}

export default App
