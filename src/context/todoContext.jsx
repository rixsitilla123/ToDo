import { createContext, useState } from "react";
export const Context = createContext()
export const TodoContext = ({children}) => {
	const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || [])
	localStorage.setItem('todo', JSON.stringify(todo))
	return(
		<Context.Provider value={{todo, setTodo}}>
			{children}
		</Context.Provider>
	)
}