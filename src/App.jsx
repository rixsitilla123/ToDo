import { useState } from 'react';
import ToDoForm from './Components/TodoForm';
import ToDoList from './Components/ToDoList';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
	AOS.init();
	const [todo, setTodo] = useState([]);
  return (
    <>
      <ToDoForm setTodo={setTodo} todo={todo}/>
      <ToDoList todo={todo} setTodo={setTodo}/>
    </>
  )
}
export default App