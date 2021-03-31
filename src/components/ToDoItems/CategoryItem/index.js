import './index.css';

export default function CategoryItem({name, color, children, onDragOver, onDrop}) {
    return (
        <div 
            className="CategoryItem"
            onDragOver={(e)=>onDragOver(e)}
            onDrop={(e)=>{onDrop(e, name)}}
            >
            <p className={`header ${color}`}>{name}</p>
            {children}
        </div>
    );
}