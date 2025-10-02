import React from 'react'

import './Product.css'

const Product = (props) => {
    // console.log(props.tods)
    const todoList = props.tods;

    //  todoList.map((ele,index)=> <li key={index} className='strick' >{ele.task}</li>)

 const newTodos =    todoList.map((ele,index)=>{
    let tasks;
        if(ele.completed){
            tasks=   <li key={index}  className='strick' >{ele.task}</li>
        }else{
          tasks =   <li key={index}  >{ele.task}</li>
        }

       return  tasks


    })
 

  return (
    <div>
        <ol>
           {
           newTodos
           }
        </ol>
    </div>
  )
}

export default Product
