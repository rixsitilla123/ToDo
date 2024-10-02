import React from 'react';
function ToDoForm({ todo, setTodo }) {
	function handleSubmitForm(event) {
		event.preventDefault()
		const data = {
			id: todo.length + 1,
			value: event.target.todoValue.value
		}
		setTodo([...todo, data])
		event.target.reset()
	}
	return (
		<>
			<h1 className="mb-[35px] text-[50px] font-bold leading-[48px] text-center mt-[100px] text-[#778da9]" data-aos="fade-down">To Do List</h1>
			<form className='w-[600px] p-5 rounded-md bg-[#1b263b] mx-auto mt-[50px]' onSubmit={handleSubmitForm} autoComplete='off'>
				<input className="p-2 rounded-rl-md rounded-bl-md w-[80%] outline-none border-[3px] border-transparent focus:border-[#415a77]" data-aos="fade-right" name='todoValue' type='text' placeholder='Enter your todo' required />
				<button className="w-[20%] duration-500 border-[3px] border-transparent bg-[#415a77] hover:bg-white hover:text-[#415a77] hover:border-[#415a77] text-white p-2 rounded-tr-md rounded-br-md font-bold" data-aos="fade-left" type='submit'>Add</button>
			</form>
		</>

	)
}
export default ToDoForm