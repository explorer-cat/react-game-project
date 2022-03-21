import logo from './logo.svg';
import './App.css';
import HandIcon from './HandIcon';
import Button from './Button';



function HandButton({value , onClick}) {
    const handleClick = () => onClick(value);

    return (
            <button onClick={handleClick}>
                <HandIcon value={value} />
            </button>
    );
}

export default HandButton;
