import Api from "./Api";
import { TodoModel } from "../@types/types";

export default {
    async getAllTodos(){
        var response = await Api().get('todos');
        console.log(response)
        return response.data;
    },
    async getParticularTodo(todo_id:number){
        const response = await Api().get('todos');
        return response.data.filter((todo:TodoModel)=>todo.id===todo_id)[0];
    }
}