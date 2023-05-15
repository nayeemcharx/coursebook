import React, { useState, useEffect } from "react";
import NavigationBar from "../../Components/NavigationBar";

const Quiz = () => {
  const [mcq, setMCQ] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetch("https://coursebookserver.vercel.app/api/automatamcq")
      .then((response) => response.json())
      .then((data) => {
        setMCQ(data.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching MCQ data:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  const [answers, setAnswers] = useState({}); // State to store selected answers

  const handleAnswerSelection = (questionIndex, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedAnswer,
    }));
  };

  const evaluateAnswers = () => {
    let score = 0;
    mcq.forEach((question, index) => {
      if (answers[index] === question.correct) {
        score++;
      }
    });
    alert(`Your score is ${score}/${mcq.length}`);
  };

  return (
    <div>
      <div>
      <NavigationBar className="NavBar"
        algoPath='/Microcontroller'
        quizPath='/Microcontroller/Quiz'
        questionPath='/Microcontroller/Question'/>
      </div>
      <div className="quiz-container">
        {loading ? (
          <div className="loading-screen">Loading...</div>
        ) : (
          mcq.map((question, index) => (
            <div key={index}>
              <h3>{question.questoin}</h3>
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value="A"
                  onChange={() => handleAnswerSelection(index, "A")}
                  checked={answers[index] === "A"}
                />
                {question.A}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value="B"
                  onChange={() => handleAnswerSelection(index, "B")}
                  checked={answers[index] === "B"}
                />
                {question.B}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value="C"
                  onChange={() => handleAnswerSelection(index, "C")}
                  checked={answers[index] === "C"}
                />
                {question.C}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value="D"
                  onChange={() => handleAnswerSelection(index, "D")}
                  checked={answers[index] === "D"}
                />
                {question.D}
              </label>
              <br />
            </div>
          ))
        )}
        <button onClick={evaluateAnswers}>Submit</button>
      </div>
    </div>
  );
};

export default Quiz;

