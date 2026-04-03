import React, {useRef, useState} from 'react';

import './VotesQuestion.css';

function VotesQuestion(props) {

    const [question,setQuestion]=useState(props.question);
    const newTextRef = useRef();

    function setNewText() {
        if ( newTextRef.current ) {
            setQuestion(newTextRef.current.value);
        }
    }

    return (
        <div>
          <input type="text" defaultValue="новый текст вопроса" ref={newTextRef} />
          <input type="button" value="задать" onClick={setNewText} />
          <div className='VotesQuestion'>{question}</div>
        </div>
    );
}

export default VotesQuestion;
