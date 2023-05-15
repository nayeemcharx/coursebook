import React, { useEffect, useState } from 'react';

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
          title="something"
        ></iframe>
      )}
    </li>
  );
});

const QuestionList = ({ apicall }) => {
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apicall)
      .then((response) => response.json())
      .then((data) => {
        setQuestionList(data.dat);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching question data:", error);
        setLoading(false);
      });
  }, []);

  const handleViewButtonClick = (index) => {
    const updatedList = [...questionList];
    updatedList[index].description = !updatedList[index].description;
    setQuestionList(updatedList);
  };

  return (
    <div className="algorithm-list">
      {loading ? (
        <div className="loading-screen">Loading...</div>
      ) : (
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
      )}
    </div>
  );
};

export default QuestionList;