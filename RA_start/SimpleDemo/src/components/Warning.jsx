import React from 'react';

import './Warning.css';

function Warning(props) {

    return (
      <div className='Warning'>
        <span className='Warning_Text'>
          {props.question}
        </span>
      </div>
    );

}

export default Warning;
