import React , {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { fetchTodos, fetchParticularTodo } from '../store/todoActions'




const Todo = () => {

    const [todo_id , setTodo_id] = useState(1)

    const dispatch = useAppDispatch()

    const allTodos = useAppSelector(state=>state.todo.all_todos)
    const particularTodo = useAppSelector(state=>state.todo.particular_todo)

    const clickHandler=()=>{
      dispatch(fetchTodos())
    }

    const searchHandler=()=>{
      dispatch(fetchParticularTodo(todo_id))
    }

    const checkTodo=()=>{
      if(allTodos.length == 0){
        return false
      }
      return true
    }

    const checkParticularTodo=():boolean=>{
      if(particularTodo.id === 0 ){
        return false
      }
      return true
    }




  return (
    <div>
      <div>
        <label>Enter the todo id : </label>
        <input
        onChange={(e)=>{setTodo_id(parseInt(e.target.value))}}
        type="number"/>
        <button onClick={searchHandler}>Find</button>
        <div>
          <h3>Particular Todo</h3>
          {
            checkParticularTodo() && 
            (
              <div key={particularTodo.id}>
                <p>{particularTodo.id}</p>
                <p>{particularTodo.userId}</p>
                <p>{particularTodo.title}</p>
                <p>{particularTodo.completed}</p>
                <p>{particularTodo.id}</p>

              </div>
            )
          }
        </div>
      </div>
      <div>
        <button onClick={clickHandler}>All Todos</button>
        <div>
          <h3>TODO LIST:</h3>
          <div></div>
          {
            checkParticularTodo() && allTodos.map(Todo=>
              (
                <div key={Todo.id}>
                  <p>{Todo.id}</p>
                  
                  <p>{Todo.title}</p>
                  <p>{Todo.completed}</p>
                 
  
                </div>
              ))
            
          }
        </div>
      </div>
    </div>
  )
}

export default Todo