import React, {useState} from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion.jsx';
import VotesAnswer from './VotesAnswer.jsx';

function VotesBlock(props) {

    const [selectedAnswerCode,setSelectedAnswerCode]=useState(null);
    const [freeanswertext, setFreeanswertext] = useState(props.deffreeanswertext);
    const [workMode, setWorkMode] = useState(props.startWorkMode);

    function answerSelected(code) {
        console.log('выбран ответ с кодом '+code);
        setSelectedAnswerCode(code);
    }

    function freeAnswerTextChanged(fat) {
        console.log('VotesBlock: текст свободного ответа изменён - '+fat);
        setFreeanswertext(fat);
    }

    const answersCode=props.answers.map( v =>
        <VotesAnswer key={v.code}
                     text={v.text} count={v.count} code={v.code}
                     freeanswer={v.freeanswer}
                     freeanswertext={freeanswertext}
                     cbSelected={answerSelected}
                     cbFreeAnswerTextChanged={freeAnswerTextChanged}
                     selectedAnswerCode={selectedAnswerCode}
                     workMode={workMode}
        />
    );

    return (
      <div className='VotesBlock'>
        <VotesQuestion question={props.question}/>
        <div className='Answers'>{answersCode}</div>
      </div>
    );

}

export default VotesBlock;
