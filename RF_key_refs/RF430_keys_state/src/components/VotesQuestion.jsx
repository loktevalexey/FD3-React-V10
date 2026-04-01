import React, {useEffect} from 'react';

import './VotesQuestion.css';

function VotesQuestion(props) {

    const [auxClassName, setAuxClassName] = React.useState(props.auxClassName);

    useEffect(()=>{
        console.log('VotesQuestion mount '+auxClassName);
        return ()=>{
            console.log('VotesQuestion unmount '+auxClassName);
        };
    },[]);

    console.log('VotesQuestion render '+auxClassName);

    return <div className={'VotesQuestion '+auxClassName}>{props.question}</div>;
}

export default VotesQuestion;
