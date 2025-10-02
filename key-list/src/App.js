import logo from './logo.svg';
import './App.css';

function App(props) {

  // console.log(props.details)
  const mobiles = props.details;

  /*
  array.map(()=>{})

  */

 const filterMobiles =   mobiles.filter((ele)=> ele.offerprice >15000 && ele.sold==false)

 console.log(filterMobiles)

 if(filterMobiles && filterMobiles.length == 0){
  return (
      <h1>No Record Found</h1>
  )
 }
 
  return (
    <>

      <section className='container'>
        {
          filterMobiles.map((ele, index) => {
            let isSold;
           
            if (ele.sold) {
              isSold = <img className='sold-img' src='https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-2-1024x788.png' alt='' />
            
            }

            return <section key={index} className='card'>

              {isSold}
              <img src={ele.img} alt='' />
              <p>{ele.productname}</p>
              <h3> <del>{ele.price}</del> {ele.offerprice} </h3>
              <button disabled={ ele.sold } >Buy Now</button>
            </section>
          })
        }
      </section>
    </>
  );
}

export default App;
