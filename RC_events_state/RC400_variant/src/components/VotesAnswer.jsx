import React from 'react';

import './VotesAnswer.css';

function VotesAnswer(props) {

    function answerClicked(eo) {
        props.cbSelected(props.code);

        // как можно достучаться к атрибутам тега:
        console.log(eo.target.getAttribute('value'));    // сработает с любым атрибутом
        console.log(eo.target.getAttribute('data-kkk')); // сработает с любым атрибутом
        console.log(eo.target.dataset.kkk);              // сработает только с data- атрибутом
    }

    function freeAnswerTextChanged(eo) {
        props.cbFreeAnswerTextChanged(eo.target.value);
    }

    if ( props.workMode===1 ) {
        return (
            <div>
                <label className='VotesBlockAnswer'>
                    <input type='radio' value={props.code} name='voteanswer'
                           onChange={answerClicked}
                           data-kkk={props.code+100}
                    />
                    <span>{props.text}</span>
                    {
                        props.freeanswer &&
                        <input type='text' name='votefreeanswer' className='FreeAnswer'
                               defaultValue={props.deffreeanswertext}
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
