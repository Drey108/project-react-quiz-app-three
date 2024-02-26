import React, { useState } from "react";
import "./style.css";
import questions from "./resources/quizQuestion.json";
import { useNavigate } from "react-router-dom";

function QuizComponent() {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    setSelectedOption(null); // Reset selected option when moving to next question
    setNum((prevNum) => (prevNum < 14 ? prevNum + 1 : prevNum));
  };

  const handlePrevious = () => {
    setSelectedOption(null); // Reset selected option when moving to previous question
    setNum((prevNum) => (prevNum > 0 ? prevNum - 1 : prevNum));
  };

  const handleOption = (e, optionIndex) => {
    const selectedAnswer = e.target.innerText;
    const isCorrect = selectedAnswer === questions[num].answer;
    alert(isCorrect ? "Correct answer" : "Incorrect answer");
    if (!attempted.includes(num)) {
      setAttempted((prevAttempted) => [...prevAttempted, num]);
      setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    }
    setSelectedOption(optionIndex);
  };

  const handleFinish = () => navigate("/Result", { state: { score, attempted } });

  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      window.location.reload(false);
    }
  };

  return (
    <div className="quiz">
      <p className="question">Question</p>
      <div>
        <span className="span-num">{num + 1} of 15</span>
        <h5 style={{ fontSize: "30px", fontWeight: "500" }}>{questions[num].question}</h5>
      </div>
      <div className="options">
        {["A", "B", "C", "D"].map((option, index) => (
          <p key={index} className={`option ${selectedOption === index ? 'selected' : ''}`} onClick={(e) => handleOption(e, index)}>
            {questions[num][`option${option}`]}
          </p>
        ))}
      </div>
      <div>
        <button className="btn-move" style={{ backgroundColor: "#3177bde2", color: "white", cursor: "pointer", marginRight: "20px", padding: "10px" }} onClick={handlePrevious}> Previous </button>
        <button className="btn-move" style={{ backgroundColor: "#32721ee3", color: "white", cursor: "pointer", marginRight: "20px", padding: "10px" }} onClick={handleNext}> Next </button>
        <button className="btn-move" style={{ backgroundColor: "#e73424e4", color: "white", cursor: "pointer", marginRight: "20px", padding: "10px" }} onClick={handleQuit}> Quit </button>
        <button className="btn-move" style={{ backgroundColor: "gray", cursor: "pointer", marginRight: "20px", padding: "10px" }} onClick={handleFinish}> Finish </button>
      </div>
    </div>
  );
}

export default QuizComponent;
