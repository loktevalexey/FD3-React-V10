import React from 'react';

const withColorBackground = color => Comp => props =>
    <div style={{backgroundColor:color,border:"solid red 1px"}}>
      <Comp {...props} />
    </div>
;

export { withColorBackground };
