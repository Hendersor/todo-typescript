import { useState } from "react"
import { Todos } from "./components/Todos"
import { type TodoId, Todo as TodoType, FilterValue, TodoTitle } from "./types"
import { TODO_FILTERS } from "./const"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"


const mockTodos = [
  {
    id: '1',
    title: 'Aprender Typescript',
    completed: true
  },
  {
    id: '2',
    title: 'Terminar video',
    completed: true
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = () :JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}:TodoId): void => {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
  }
  
  const handleCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => {
      const newTodos  = todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed
          }
        }
        return todo
      })

      setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }
  
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title} :TodoTitle): void => {
      const newTodo = {
        id: crypto.randomUUID(),
        title,
        completed: false
      }
      const newTodos = [...todos, newTodo]
      setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
     <Todos todos={filteredTodos} onRemoveTodo={handleRemove} onToggleCompleteTodo={handleCompleted}/>
     <Footer activeCount={activeCount} filterSelected={filterSelected} handleFilterChange={handleFilterChange} completedCount={completedCount} onClearCompleted={() => {}}/>
    </div>
  )
}

export default App
