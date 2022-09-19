import Main from './AccordionMain';
import data from '../data/accordiondata';
import React from 'react';

import './Accordion.css';

function Accordion() {
  const [questions, setQuestions] = React.useState(data);

  const questionElements = questions.map((question) => {
    return <Main key={question.id} {...question} />;
  });

  return (
    <div className='accordion'>
      <h1 className='accordion-heading'>
        Questions And Answers About Bloodgram
      </h1>
      <div className='section--accordions'>{questionElements}</div>
    </div>
  );
}

export default Accordion;
