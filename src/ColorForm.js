import React, { useState } from 'react';

function ColorForm(props) {
  let [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor(input);
  };

  return (
    <div style={{ 'textAlign': 'center' }}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={
            (e) => setInput(e.target.value)
          }
        />
        <button type="submit">Submit your color choice</button>
      </form>
    </div>
  )
}

export default ColorForm;