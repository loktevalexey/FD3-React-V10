import React from 'react';

function withColorBackground(Comp) {
    // HOC withColorBackground должен вернуть КОМПОНЕНТ
    // (т.е. функцию получающую props и возвращающую JSX)
    return props => (
      <div style={{backgroundColor:"yellow",border:"solid red 1px"}}>
        <Comp {...props} />
      </div>
    );
}

export { withColorBackground };
