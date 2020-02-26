import React from 'react'

export default function Square(props) {
   
      return (

        <button className="square" onClick={() => props.changeValue(props.i)}>
          {props.value}
        </button>
      );
    }
