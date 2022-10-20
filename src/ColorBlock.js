import React from 'react';

function ColorBlock(props) {
  return (
    <div className='colorBlock' style={{ 'backgroundColor': props.color }}>
      <div style={{ 'text-align': 'center' }}>{props.color}</div>
    </div>
  )
}

export default ColorBlock;