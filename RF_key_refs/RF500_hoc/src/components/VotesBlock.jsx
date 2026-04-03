import React, {useState} from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion.jsx';
import VotesAnswer from './VotesAnswer.jsx';
import {withColorBackground} from "../HOC/withColorBackground.jsx";

//const VotesQuestionWithBG=withColorBackground(VotesQuestion);

function VotesBlock(props) {

    const [selectedAnswerCode,setSelectedAnswerCode]=useState(null);
    const [freeanswertext, setFreeanswertext] = useState(props.deffreeanswertext);
    const [workMode, setWorkMode] = useState(props.startWorkMode);
    const [answers,setAnswers]=useState(props.answers);

    function answerSelected(code) {
        console.log('выбран ответ с кодом '+code);
        setSelectedAnswerCode(code);
    }

    function vote() {
        console.log('голосование завершено, выбран ответ с кодом '+selectedAnswerCode);
        // глубокая копия через JSON - неэффективно! используем для простоты кода
        const newAnswers=JSON.parse(JSON.stringify(answers));
        newAnswers.forEach( answer => {
            if ( answer.code===selectedAnswerCode )
                answer.count++;
        } );
        setAnswers(newAnswers);
        setWorkMode(2);
    }

    function freeAnswerTextChanged(fat) {
        console.log('VotesBlock: текст свободного ответа изменён - '+fat);
        setFreeanswertext(fat);
    }

    const answersCode=answers.map( v =>
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

    const VotesQuestionWithBG=withColorBackground(VotesQuestion);

    return (
      <div className='VotesBlock'>
        <VotesQuestionWithBG question={props.question} />
        <div className='Answers'>{answersCode}</div>
        {
          ((workMode===1)&&selectedAnswerCode) &&
          <input type='button' value='проголосовать' onClick={vote} />
        }
      </div>
    );

}

export default VotesBlock;
