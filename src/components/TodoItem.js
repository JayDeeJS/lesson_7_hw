import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../store/todoListSlice";
import ModalWindow from "./ModalWindow";

const TodoItem = ({todoItem}) => {

    const dispatch = useDispatch()
    const {boolean} = useSelector(state => state.todoListReducer)

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todoItem.id))
    }

    const handleEditTodo = () => {
        const todo = {
            id: todoItem.id,
            text: todoItem.text
        }
        dispatch(editTodo(todo))
        console.log(todoItem.id, todoItem.text);
    }

    return (
        <div className="todoItem">
            <h4>{todoItem.text}</h4>
            <button className="delete" onClick={handleDeleteTodo}>Delete todo</button>
            <button className="edit" onClick={handleEditTodo}>Edit todo</button>
            {boolean && <ModalWindow todoItem={todoItem}/>}
        </div>
    )
};

export default TodoItem;