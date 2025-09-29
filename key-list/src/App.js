import logo from './logo.svg';
import './App.css';

function App(props) {

  console.log(props.details)
  const mobiles = props.details;

  /*
  array.map(()=>{})

  */
  return (
    <>

      <section className='container'>
        {
          mobiles.map((ele,index) => (
             <section key={index}  className='card'>
              <img src={ele.img} alt='' />
              <p>{ele.productname}</p>
              <h3> <del>{ele.price}</del> {ele.offerprice} </h3>
              <button>Buy Now</button>
            </section>
          ))
        }
      </section>
    </>
  );
}

export default App;
