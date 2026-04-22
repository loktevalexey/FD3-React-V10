import Rainbow from './Rainbow';

import './Blocks.css';

export default function Blocks() {

  const button1Clicked = () => {
    alert("кнопка 1 нажата");
  };

  const button2Clicked = () => {
    alert("кнопка 2 нажата");
  };

  return (
    <div className="Blocks">

      <Rainbow>
        Кнопка №1
        <input type="button" value="кнопка 1" onClick={button1Clicked} />
      </Rainbow>

      <Rainbow>
        Кнопка №2
        <input type="button" value="кнопка 2" onClick={button2Clicked} style={{backgroundColor:"yellow"}} />
      </Rainbow>

    </div>
  );


}
