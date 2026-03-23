import React, {useState} from 'react';

function Anketa() {

    const [fio,setFio] = useState("Иванов");

    function fioChanged(eo) {
        setFio(eo.target.value);
    }

    function setPetrov() {
        setFio("Петров");
    }

    return (
        <div>
            <span>Введите свою фамилию</span><br/>
            <input type="text" value={fio} onChange={fioChanged} /><br/>
            <span>Вы ввели: {fio}</span>
            <br/><input type="button" value="установить Петров" onClick={setPetrov}/>
        </div>
    );

}

export default Anketa;
