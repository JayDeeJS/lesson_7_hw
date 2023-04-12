import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "./ModalWrapper"
import { closeModal, editTodo } from "../store/todoListSlice";
import { useState } from "react";

const ModalWindow = ({todoItem}) => {

    const dispatch = useDispatch()
    const {todo} = useSelector(state => state.todoListReducer)

    const [inputValue, setInputValue] = useState(todo.text);

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    const handleSave = () => {
        dispatch(editTodo({
            id: todoItem.id,
            text: inputValue
        }));
        setInputValue('')
        dispatch(closeModal())
    }    

    return (
        <ModalWrapper>
            <div className="modalWrapper">
                <div className="modal">
                    <input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      type="text"
                    />
                    <div className="modalControls">
                        <button onClick={handleSave} className="save">Save & close</button>
                        <button onClick={handleCloseModal} className="exit">Close without saving</button>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    )
};

export default ModalWindow;