import React, {useEffect} from 'react';

import './VotesQuestion.css';

function VotesQuestion(props) {

    useEffect(()=>{
        console.log('VotesQuestion mount '+props.auxClassName);
        return ()=>{
            console.log('VotesQuestion unmount '+props.auxClassName);
        };
    },[]);

    console.log('VotesQuestion render '+props.auxClassName);

    return <div className={'VotesQuestion '+props.auxClassName}>{props.question}</div>;
}

export default VotesQuestion;
