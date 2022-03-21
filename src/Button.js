import logo from './logo.svg';

import './App.css';

function Button({name , onClick}) {
    return <button onClick={onClick}>{name} </button>
}

export default Button;
