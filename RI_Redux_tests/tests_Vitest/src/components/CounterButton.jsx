import {useState} from "react";

import {power2} from '../modules/power2';

function CounterButton() {

  const [counter,setCounter] = useState(0);

  const pressed = () => {
    setCounter(counter+1);
  };

  return (
    <div>
      <h3>Кнопка-счётчик нажатий</h3>
      <input type="button"
        value={"нажатий: "+counter+', степень двойки: '+power2(counter)}
        onClick={pressed} />
    </div>
  );

}

export default CounterButton;
