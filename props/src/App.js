
import './App.css';

function App(props) { 
  console.log(props.data)
  const c = props.data;
  return (
    <>
      <section className='container'>
        <section>
          <div className='img-top'>
            <img src='https://m.media-amazon.com/images/I/712SuRmHG4L._UF1000,1000_QL80_.jpg' alt='..' />
          </div>
          <div className='card-footer'>
            <p>{ c.name}</p>
            <p>${c.amount}</p>
            <button>{c.txt}</button>
          </div>
        </section>

      </section>
    </>
  );
}

export default App;
