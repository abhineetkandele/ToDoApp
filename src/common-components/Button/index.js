import './index.css';

export default function Button ({buttonText, onClick}) {
    return (
        <button className="customBtn" onClick={onClick}>{buttonText}</button>
    );
}