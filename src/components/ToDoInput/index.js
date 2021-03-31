import './index.css';
import Button from '../../common-components/Button'

export default function ToDoInput({addToDoItem, setNewToDoitem, newToDoitem}) {
    return (
        <div className="ToDoInput">
            <input 
                type="text" 
                placeholder="Enter a To Do Item..." 
                onChange={(e) => setNewToDoitem(e.target.value)} 
                value={newToDoitem}
                />
            <Button buttonText="ADD" onClick={addToDoItem} />
        </div>
    );
}