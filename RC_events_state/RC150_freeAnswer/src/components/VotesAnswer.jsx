import React from 'react';

import './VotesAnswer.css';

function VotesAnswer(props) {

    if ( props.workMode===1 ) {
        return (
            <div>
                <label className='VotesBlockAnswer'>
                    <input type='radio' value={props.code} name='voteanswer' />
                    <span>{props.text}</span>
                    {
                        props.freeanswer &&
                        <input type='text' name='votefreeanswer' className='FreeAnswer'
                               value="???" />
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
