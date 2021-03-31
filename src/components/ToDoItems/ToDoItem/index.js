import './index.css';
import Button from '../../../common-components/Button';

export default function ToDoItem({text, color, id, onDragStart, deleteToDoItem, editToDoItem}) {
    return (
        <div 
            className={`ToDoItem ${color}`} 
            onDragStart = {e => onDragStart(e, id)}
            draggable
            >
            {text}
            <div className="itemButtons">
                <Button buttonText="Delete" onClick={() => deleteToDoItem(id)} />
                <Button buttonText="Edit" onClick={() => editToDoItem(id)} />
            </div>
        </div>
    );
}