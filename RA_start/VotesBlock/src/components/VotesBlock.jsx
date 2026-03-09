import React from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion.jsx';
import VotesAnswer from './VotesAnswer.jsx';

function VotesBlock(props) {

    const answersCode=props.answers.map( v =>
      <VotesAnswer key={v.code} text={v.text} count={v.count} code={v.code} />
    );

    return (
      <div className='VotesBlock'>
        <VotesQuestion question={props.question}/>
        <div className='Answers'>{answersCode}</div>
      </div>
    );

}

export default VotesBlock;
