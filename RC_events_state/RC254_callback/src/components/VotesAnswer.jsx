import React from 'react';

import './VotesAnswer.css';

function VotesAnswer(props) {

    function freeAnswerTextChanged(eo) {
        console.log('VotesAnswer: текст свободного ответа изменён - '+eo.target.value);
        props.cbFreeAnswerTextChanged(eo.target.value);
    }

    if ( props.workMode===1 ) {
        return (
            <div>
                <label className='VotesBlockAnswer'>
                    <input type='radio' value={props.code} name='voteanswer' />
                    <span>{props.text}</span>
                    {
                        props.freeanswer &&
                        <input type='text' name='votefreeanswer' className='FreeAnswer'
                               defaultValue="???"
                               onChange={freeAnswerTextChanged}
                        />
                    }
                </label>
            </div>
        )
    }
    else {
        return (
            <div className='VotesBlockAnswer'>
                <span className='Count'>{props.count}</span>
                <span className='Text'>{props.text}</span>
            </div>
        );
    }

}

export default VotesAnswer;
