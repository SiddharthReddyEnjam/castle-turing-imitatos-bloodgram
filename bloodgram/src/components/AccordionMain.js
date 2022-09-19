import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export default function Main({ title, info }) {
  const [checkTrue, setCheckTrue] = React.useState(false);
  return (
    <div className='ac-main'>
      <div className='title-button'>
        <h3 className='title'>{title}</h3>
        <button className='acbtn' onClick={() => setCheckTrue(!checkTrue)}>
          {checkTrue ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {checkTrue && <p className='info'>{info}</p>}
    </div>
  );
}
