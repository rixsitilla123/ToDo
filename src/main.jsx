import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TodoContext } from './context/todoContext.jsx'

createRoot(document.getElementById('root')).render(
	<TodoContext>
		<App />
	</TodoContext>
)
