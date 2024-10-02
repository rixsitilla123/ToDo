import React from 'react';
import ToDoItem from './ToDoItem';
function ToDoList({todo, setTodo}) {
  return (
    <ul className='w-[600px] mt-[25px] space-y-5 p-5 rounded-md bg-[#31288562] mx-auto' data-aos="fade-up">
      {todo.map((item, index) => <ToDoItem item={item} index={index} key={item.id} todo={todo} setTodo={setTodo}/>)}
    </ul>
  )
}
export default ToDoList