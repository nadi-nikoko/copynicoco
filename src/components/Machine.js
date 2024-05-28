// Machine.js
import React from 'react';

function Machine({ poem }) {
    
  function DisplayText({ text }) {
    const newText = text.replace(/\n/g, '<br />');
    return <div dangerouslySetInnerHTML={{ __html: newText }} />;
  }

  return (
    <div>
      <h1>{poem? <DisplayText text={poem} /> : 'MAKE A POEM'}</h1>
    </div>
  );
}

export default Machine;
