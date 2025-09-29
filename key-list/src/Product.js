import React from 'react'

const Product = (props) => {
    console.log(props.tods)
    const todoList = props.tods;
  return (
    <div>
        <ol>
           {
            todoList.map((ele,index)=> <li key={index} >{ele.task}</li>)
           }
        </ol>
    </div>
  )
}

export default Product