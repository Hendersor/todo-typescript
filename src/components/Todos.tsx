import { Todo } from "./Todo"
import { type TodoId, type Todo as TodoType, type ListOfTodos } from "../types"
interface Props {
     todos: ListOfTodos
     onRemoveTodo: ({id}: TodoId) => void
     onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
}

const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleteTodo}) => {
     return (
          <ul className="todo-list">
               {todos.map((todo) => (
                    <li key={todo.id} className={`${todo.completed ? 'completed' : ''} `}>
                         <Todo
                         key={todo.id}
                         id={todo.id}
                         title={todo.title}
                         completed={todo.completed}
                         onRemoveTodo={onRemoveTodo}
                         onToggleCompleteTodo={onToggleCompleteTodo}
                         />
                    </li>
               ))}
          </ul>
     )
}

export {Todos}