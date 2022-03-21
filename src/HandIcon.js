import logo from './logo.svg';

import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './App.css';



function HandIcon(props) {

  const result = {
      "rock" : rockImg,
      "scissor" : scissorImg,
      "paper" : paperImg
  }
  return <img src = {result[props.value]} alt = {result[props]}/>;

}

export default HandIcon;
