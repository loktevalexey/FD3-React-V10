import React, {useState} from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion.jsx';
import VotesAnswer from './VotesAnswer.jsx';

function VotesBlock(props) {

    const [freeanswertext, setFreeanswertext] = useState( "" );

    function freeAnswerTextChanged(fat) {
        console.log('VotesBlock: текст свободного ответа изменён - '+fat);
        setFreeanswertext(fat);
    }

    const answersCode=props.answers.map( v =>
        <VotesAnswer key={v.code}
                     text={v.text} count={v.count} code={v.code}
                     freeanswer={v.freeanswer}
                     cbFreeAnswerTextChanged={freeAnswerTextChanged}
                     workMode={props.workMode}
        />
    );

    return (
      <div className='VotesBlock'>
        <VotesQuestion question={props.question}/>
        <div className='Answers'>{answersCode}</div>
        <div>{freeanswertext}</div>
      </div>
    );

}

export default VotesBlock;
