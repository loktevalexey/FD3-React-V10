import React from 'react';

import './VotesAnswer.css';

function VotesAnswer(props) {

    return (
      <div className='VotesBlockAnswer'>
        <span className='Count'>{props.count}</span>
        <span className='Text'>{props.text}</span>
      </div>
    );

}

export default VotesAnswer;
