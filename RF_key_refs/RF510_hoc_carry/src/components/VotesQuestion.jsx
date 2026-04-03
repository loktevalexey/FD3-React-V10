import React from 'react';

import './VotesQuestion.css';

import {withColorBackground} from "../HOC/withColorBackground.jsx";

function VotesQuestion(props) {
    return <div className='VotesQuestion'>{props.question}</div>;
}

export default VotesQuestion;

// а можно экспортировать уже обёрнутую версию VotesQuestion
//export default withColorBackground("cyan")(VotesQuestion);
