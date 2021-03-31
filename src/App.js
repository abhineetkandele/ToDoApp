import { useState } from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput';
import ToDoItems from './components/ToDoItems';

function ToDoApp() {
  const [toDoitems, setToDoItems] = useState([]);
  const [newToDoitem, setNewToDoitem] = useState('');

  const addToDoItem = () => {
    setToDoItems(prevState => [...prevState, {text: newToDoitem, id: new Date().getTime(), category: 'To Do'}]);
    setNewToDoitem('');
  };

  const deleteToDoItem = (id) => {
    let newToDoItems = toDoitems.filter((item) => {
      return item.id !== parseInt(id);
    });
    setToDoItems(newToDoItems);
  };

  const editToDoItem = (id) => {
    let newToDoItems = toDoitems.filter((item) => {
        return item;
    });
    setToDoItems(newToDoItems);
  };

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("text/plain", id);
  }

  const onDragOver = (ev) => {
    ev.preventDefault();
  }

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("text");
    
    let newToDoItems = toDoitems.filter((item) => {
        if (item.id === parseInt(id)) {
          item.category = cat;
        }
        return item;
    });

    setToDoItems(newToDoItems);
  };

  const toDoItemsProps = {
    onDragStart, 
    onDragOver, 
    onDrop,
    toDoitems,
    deleteToDoItem,
    editToDoItem
  };

  const toDoInputProps = {
    setNewToDoitem,
    addToDoItem,
    newToDoitem
  };

  return (
    <div className="ToDoApp">
      <ToDoInput {...toDoInputProps} />
      <ToDoItems {...toDoItemsProps} />
    </div>
  );
}

export default ToDoApp;
