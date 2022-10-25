import React from 'react';
import Block from './Block';

const Color = (props)=>{

    return (
        <button onClick={()=>props.handleClick(props.color)}>Post {props.color}</button>
    );
}

export default Color;
    