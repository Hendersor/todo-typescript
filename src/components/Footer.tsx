import { FilterValue } from "../types"
import {Filters} from "./Filters"

interface Props {
     activeCount: number
     completedCount: number
     filterSelected: FilterValue  
     onClearCompleted: () => void
     handleFilterChange: (filter: FilterValue) => void
}
const Footer: React.FC<Props> = ({onClearCompleted, activeCount = 0, completedCount = 0, filterSelected, handleFilterChange}) => {
     
     return(
          <footer className="footer">
                    <span className="todo-count">
                    <strong>{activeCount}</strong> Tareas pendientes 

                    </span>

                    <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange}/>
          </footer>
     )
} 

export {Footer}