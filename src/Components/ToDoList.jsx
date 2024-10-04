import React, { useContext, useState } from 'react';
import ToDoItem from './ToDoItem';
import Modal from './Modal';
import { Context } from '../context/todoContext';

function ToDoList() {
	const {todo, setTodo} = useContext(Context)
	const [updateModal, setUpdateModal] = useState(false)
	const [updateValue, setUpdateValue] = useState("")
	const [updateId, setUpdateId] = useState(0)
	const [moreModal, setMoreModal] = useState(false)
	const [moreData, setMoreData] = useState({})
	
	function handleUpdateClick(e) {
		setUpdateModal(true)
		const updateData = todo.find(value => value.id == e.target.id)
		setUpdateValue(updateData.value)
		setUpdateId(e.target.id)
	}
	function handleUpdateSubmit(e) {
		e.preventDefault()
		const updateData = todo.find(value => value.id == updateId)
		updateData.value = updateValue
		setUpdateModal(false)
		setTodo([...todoE])
	}
	function handleMoreBtnClick(e) {
		const clickedId = e.target.id
		setMoreModal(true)
		const finedObj = todo.find(item => item.id == clickedId)
		setMoreData(finedObj)
	}
  return (
    <>
			<ul className='w-[600px] mt-[25px] space-y-5 p-5 rounded-md bg-[#31288562] mx-auto' data-aos="fade-up">
      	{todo.map((item, index) => <ToDoItem handleUpdateClick={handleUpdateClick} handleMoreBtnClick={handleMoreBtnClick} item={item} index={index} key={item.id}/>)}
    	</ul>
			<Modal openModal={updateModal} setOpenModal={setUpdateModal}>
				<form onSubmit={handleUpdateSubmit} className='p-5 rounded-md bg-[#1b263b] mx-auto' autoComplete='off'>
					<input onChange={(e) => setUpdateValue(e.target.value)} value={updateValue} className="p-2 rounded-rl-md rounded-bl-md w-[80%] outline-none border-[3px] border-transparent focus:border-[#415a77]" data-aos="fade-right" type='text' placeholder='Update your todo' required/>
					<button className="w-[20%] duration-500 border-[3px] border-transparent bg-[#415a77] hover:bg-white hover:text-[#415a77] hover:border-[#415a77] text-white p-2 rounded-tr-md rounded-br-md font-bold" data-aos="fade-left" type='submit'>Update</button>
				</form>
			</Modal>
			<Modal openModal={moreModal} setOpenModal={setMoreModal}>
				<h2 className="text-center font-bold text-[30px] text-[#fff]">{moreData.value}</h2>
			</Modal>
		</>
  )
}
export default ToDoList