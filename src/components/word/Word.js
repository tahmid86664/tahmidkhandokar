import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import './Word.scss';

const Word = ({ word, fontSize, height }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(fontSize * word.length / 1.4 );
  }, [word.length, fontSize]);

  return (
    <div className="word"
      style={{
        width: `${width}px`,
        fontSize: `${fontSize}px`,
        height: `${height}px`
      }}
    >
      <span id="word__inner">{ word }</span>
    </div>
  );
}


export default Word;