import React from 'react'

const Product = (props) => {
  console.log(props)
  return (
    <div>{props.data}</div>
  )
}
 

export const Sample = (props) => {
   console.log(props)
  return (
    <div>{props.name} {props.age} IsMarried: true</div>
  )
}
export const Sample1 = (props) => {
  return (
    <div>{props.name}{props.age} {props.profession}</div>
  )
}



export const Sample2 = (props) => {
  console.log(props)
  return (
    <>
    <section className='store'>
    <section>
    <div className='images'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiO49sY9kh6lKMVlBtVWCCdCk03DloMakQQ&s' alt='iphone 17 pro'/>
    </div>
    <div className='footer'>
      <p> {props.name} </p>
      <p> {props.amount} </p>
      <p> {props.dec}</p>

    </div>
    </section>
    <section>
    <div className='images'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiO49sY9kh6lKMVlBtVWCCdCk03DloMakQQ&s' alt='iphone 17 pro'/>
    </div>
    <div className='footer'>
      <p> {props.name} </p>
      <p> {props.amount} </p>
      <p> {props.dec}</p>

    </div>
    </section>

    <section>
    <div className='images'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiO49sY9kh6lKMVlBtVWCCdCk03DloMakQQ&s' alt='iphone 17 pro'/>
    </div>
    <div className='footer'>
      <p> {props.name} </p>
      <p> {props.amount} </p>
      <p> {props.dec}</p>

    </div>
    </section>

    <section>
    <div className='images'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiO49sY9kh6lKMVlBtVWCCdCk03DloMakQQ&s' alt='iphone 17 pro'/>
    </div>
    <div className='footer'>
      <p> {props.name} </p>
      <p> {props.amount} </p>
      <p> {props.dec}</p>

    </div>
    </section>

    <section>
    <div className='images'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiO49sY9kh6lKMVlBtVWCCdCk03DloMakQQ&s' alt='iphone 17 pro'/>
    </div>
    <div className='footer'>
      <p> {props.name} </p>
      <p> {props.amount} </p>
      <p> {props.dec}</p>

    </div>
    </section>
    </section>
    </>
  )
}

export default Product
