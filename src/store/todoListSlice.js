import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: 'todoListSlice',
    initialState: {
        input: '',
        todoList: [],
        todo: {},
        boolean: false
    },
    reducers: {
        assignInputValue: (state, action) => {
            state.input = action.payload
        },
        addTodo: (state, action) => {
            let id = 1
            if (state.todoList.length > 0) {
                id = state.todoList[state.todoList.length - 1].id + 1
            }
            state.todoList = [...state.todoList, {id, text: action.payload}]
            state.input = ''
        },
        deleteTodo: (state, action) => {
            let id = action.payload
            const filteredTodoList = state.todoList.filter(todoItem => +todoItem.id !== +id)
            state.todoList = filteredTodoList
        },
        editTodo: (state, action) => {
            state.boolean = true
            const editedArray = state.todoList.map(todoItem => {
                if (todoItem.id === action.payload.id) {
                    return {
                        ...todoItem,
                        text: action.payload.text
                    }
                } else {
                    return todoItem
                }
            })
            console.log(editedArray);
            state.todoList = editedArray
        },
        closeModal: (state, action) => {
            state.boolean = false
        }
    }
})

export const {assignInputValue, addTodo, deleteTodo, editTodo, closeModal, saveEditedTodo} = todoListSlice.actions
export default todoListSlice.reducer