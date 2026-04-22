import Rainbow from './Rainbow';

import './Blocks.css';

export default function Blocks() {

  const button1Clicked = () => {
    alert("кнопка 1 нажата");
  };

  const button2Clicked = () => {
    alert("кнопка 2 нажата");
  };

  const button1=
    <div>
      Кнопка №1
      <input type="button" value="кнопка 1" onClick={button1Clicked} />
    </div>
  ;

  const button2=
    <div>
      Кнопка №2
      <input type="button" value="кнопка 2" onClick={button2Clicked} style={{backgroundColor:"yellow"}} />
    </div>
  ;

  return (
    <div className="Blocks">

      <Rainbow getInner={ ()=>button1 } />

      <Rainbow getInner={ ()=>button2 } />

    </div>
  );

}
