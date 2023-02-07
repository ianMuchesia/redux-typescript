import {AnyAction, ThunkAction} from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import { RootState } from './index'
import { TodoModel } from '../@types/types'
import TodoService  from '../service/todoService'

export const todoActions = todoSlice.actions



// Here we are actually creating Thunks (it's a function that delays an action until later)
export const fetchTodos=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch, getState)=>{
        if(getState().todo.all_todos.length === 0){
            const response: TodoModel[] = await TodoService.getAllTodos();
            dispatch(todoActions.setTodos(response))
        }
    }
}

export const fetchParticularTodo=(todo_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch, getState)=>{
        const response:TodoModel = await TodoService.getParticularTodo(todo_id);
        dispatch(todoActions.setParticularTodo(response))
    }
}