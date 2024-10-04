import ToDoForm from './Components/TodoForm';
import ToDoList from './Components/ToDoList';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	AOS.init();
  return (
    <>
      <ToDoForm/>
      <ToDoList/>
    </>
  )
}
export default App