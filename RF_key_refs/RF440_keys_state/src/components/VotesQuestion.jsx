import React, {useEffect} from 'react';

import './VotesQuestion.css';

function VotesQuestion(props) {

    // props->state при монтировании компонента
    const [auxClassName, setAuxClassName] = React.useState(props.auxClassName);

    useEffect(()=>{
        console.log('VotesQuestion mount '+auxClassName);
        return ()=>{
            console.log('VotesQuestion unmount '+auxClassName);
        };
    },[]);

    useEffect(()=>{
        setAuxClassName(props.auxClassName);
    },[props.auxClassName]);

    console.log("VotesQuestion render props="+props.auxClassName+" state="+auxClassName);

    return <div className={'VotesQuestion '+auxClassName}>{props.question}</div>;
}

export default VotesQuestion;
