import React, { useState } from 'react';

const Question = React.memo(({ question, index, onButtonClick }) => {
  return (
    <li>
      <h3>{question.title}</h3>
      <a onClick={() => onButtonClick(index)}>View</a>
      {question.description && (
        <iframe
          src={question.link}
          width="640"
          height="480"
          allow="autoplay"
          loading="lazy"
        ></iframe>
      )}
    </li>
  );
});

const QuestionList = ({ items }) => {
  const [questionList, setQuestionList] = useState(items);

  const handleViewButtonClick = (index) => {
    const updatedList = [...questionList];
    updatedList[index].description = !updatedList[index].description;
    setQuestionList(updatedList);
  };

  return (
    <div className="algorithm-list">
      <ul>
        {questionList.map((item, index) => (
          <Question
            key={index}
            question={item}
            index={index}
            onButtonClick={handleViewButtonClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
