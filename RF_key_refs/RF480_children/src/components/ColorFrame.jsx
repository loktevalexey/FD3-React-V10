import React from 'react';

export default function ColorFrame(props) {

  return (
    <div style={{border:"dashed 1px "+props.color,padding:"10px"}}>
      {props.children}
    </div>
  );

}
