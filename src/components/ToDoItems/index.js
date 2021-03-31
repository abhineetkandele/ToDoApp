import CategoryItem from './CategoryItem';
import ToDoItem from './ToDoItem';
import './index.css';

const categories = [{name: 'To Do', color: 'Grey'}, {name: 'In-Progress', color: 'Orange'}, {name: 'Completed', color: 'Green'}];

export default function ToDoItems({onDragStart, onDragOver, onDrop, toDoitems, deleteToDoItem, editToDoItem}) {

    let categoryToDoItems = {};
    categories.forEach(category => {
        categoryToDoItems[category.name] = [];
    });
    toDoitems.forEach(toDoItem => {
        categoryToDoItems[toDoItem.category].push(toDoItem);
    });

    return (
        <div className="ToDoItems">
            {categories.map(categoryObj => (
                <CategoryItem 
                    key={categoryObj.name} 
                    {...categoryObj}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    >
                {categoryToDoItems[categoryObj.name].map(toDoItem => (
                    <ToDoItem 
                        key={toDoItem.id} 
                        {...toDoItem} 
                        color={categoryObj.color} 
                        onDragStart={onDragStart} 
                        deleteToDoItem={deleteToDoItem}
                        editToDoItem={editToDoItem}
                        />
                ))}
            </CategoryItem>))}
        </div>
    );
}