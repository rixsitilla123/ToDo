import React, { useContext } from 'react';
import { Context } from '../context/todoContext';
 
function ToDoItem({item, index, handleUpdateClick, handleMoreBtnClick}) {
	const {todo, setTodo} = useContext(Context)
	function handleDeleteBtn(id) {
		const deleteIndex = todo.findIndex(item => item.id == id)
		todo.splice(deleteIndex, 1)
		setTodo([...todo])
	}

  return ( 
    <li className='p-2 mt-2 flex items-center justify-between rounded-md duration-500 border-[2px] border-transparent text-white bg-[#087e8b] hover:bg-[#0d1b2a] hover:border-[#e0e1d]'>
      <div className="flex items-center">
        <span className='font-semibold'>{index + 1}.</span>
        <strong className='font-semibold'>{item.value}</strong>
      </div>
      <div className="flex space-x-2">
        <button onClick={handleUpdateClick} id={item.id} className='p-2 rounded-md font-bold border-[3px] border-transparent duration-500 text-white bg-[#22577a] hover:bg-[#89c2d9] hover:text-[#22577a] hover:border-[#22577a]'>Update</button>
        <button onClick={() => handleDeleteBtn(item.id)} className='p-2 rounded-md font-bold border-[2px] border-transparent duration-500 text-white bg-[#9d0208] hover:bg-[#e5383b] hover:text-[#9d0208] hover:border-[#9d0208]'>Delete</button>
        <button onClick={handleMoreBtnClick} id={item.id} className='p-2 rounded-md font-bold border-[2px] border-transparent duration-500 text-white bg-[#4f772d] hover:bg-[#80b918] hover:text-[#4f772d] hover:border-[#4f772d]'>More</button>
      </div>
    </li>
  )
}
export default ToDoItem