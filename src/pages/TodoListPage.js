import { useDispatch, useSelector } from "react-redux";
import { assignInputValue, addTodo } from "../store/todoListSlice";
import TodoItem from "../components/TodoItem";

const TodoListPage = () => {

    const dispatch = useDispatch()
    const {input, todoList} = useSelector(state => state.todoListReducer)

    const handleInputValue = (e) => {
        dispatch(assignInputValue(e.target.value))
    }

    const handleAddTodo = () => {
        if (input.trim() === '') {
            alert('Заполните поле инпут')
            return
        }
        dispatch(addTodo(input))
    }

    return (
        <main className="todoList">
            <section className="controls">
                <input
                  value={input}
                  onChange={handleInputValue}
                  placeholder="Enter todo"
                  type="text"
                />
                <button onClick={handleAddTodo}>Add todo</button>
            </section>
            <section className="list">
                {
                    todoList.length > 0
                    ? todoList.map(todoItem => <TodoItem key={todoItem.id} todoItem={todoItem} />)
                    : <p>No todo items</p>
                }
            </section>
        </main>
    )
};

export default TodoListPage;