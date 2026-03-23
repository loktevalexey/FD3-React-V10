import React from 'react';

import './VotesAnswer.css';

function VotesAnswer(props) {

    function answerClicked(eo) {
        props.cbSelected(props.code);
    }

    function freeAnswerTextChanged(eo) {
        props.cbFreeAnswerTextChanged(eo.target.value);
    }

    if ( props.workMode===1 ) {
        return (
            <div>
                <label className='VotesBlockAnswer'>
                    <input type='radio' value={props.code} name='voteanswer'
                           onChange={answerClicked} />
                    <span>{props.text}</span>
                    {
                        (props.freeanswer) &&
                        <input type='text' name='votefreeanswer' className='FreeAnswer'
                               value={props.freeanswertext}
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
