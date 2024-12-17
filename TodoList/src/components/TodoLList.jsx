import React from 'react'

function TodoLList(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
    
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}> D </i>
        </span>
    </li>
  )
}

export default TodoLList