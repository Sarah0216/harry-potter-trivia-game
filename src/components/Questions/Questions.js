import { Fragment } from "react";
import GameOver from "../GameOver/GameOver";
import "./Questions.scss";

// const baseUrl = "http://localhost:7000"; // localhost
const baseUrl = "https://harry-potter-api.herokuapp.com"; // localhost

const Questions = ({
  question,
  countdown,
  questionsRemaining,
  score,
  gameOver,
  setScore,
  answeredQuestion,
  answer,
  setAnswer,
  setAnsweredQuestion,
  setAnsweredCorrectly,
  answeredCorrectly,
  setCountdown,
  randomMessages,
  house,
  wand,
}) => {
  const handleClick = (answer) => {
    if (question.answer === answer) {
      setAnsweredCorrectly(true);
      setAnsweredQuestion(true);
      setAnswer(answer);
      setScore(score + question.point);
    }

    if (question.answer !== answer) {
      setAnsweredCorrectly(false);
      setAnsweredQuestion(true);
      setAnswer(answer);
    }
  };
  return (
    <Fragment>
      {gameOver && <GameOver score={score} />}
      {!gameOver && (
        <div>
          <p className="questions__time">
            {`Time remaining: 00:${countdown === 10 ? 10 : "0" + countdown}`}{" "}
          </p>
          <p className="questions__time">{`${
            questionsRemaining > 1
              ? questionsRemaining + " questions"
              : questionsRemaining + " question"
          } remaining`}</p>
          <p className="questions__time">{`Your score: ${score}`} </p>
          <p className="questions__sorted">
            You've been sorted into {house.name}
          </p>
          <p className="questions__sorted">
            <img
              className="questions__house"
              src={baseUrl + "/houses/" + house.img + ".png"}
              alt="house"
            />
          </p>
          <p className="questions__sorted">you got {wand.name}'s wand</p>
          <img
            className="questions__wand"
            src={baseUrl + "/wands/" + wand.img + ".png"}
            alt="wand"
          />
          <div className="questions-upper__container">
            <div className="questions-upper__img-div">
              {question.img && (
                <img
                  src={baseUrl + "/questions/" + question.img + ".jpg"}
                  alt={question.img}
                  className="questions-upper__img"
                />
              )}
            </div>
            <p className="questions-upper__question">{question.question}</p>
          </div>
          <div className="question-lower__container">
            {!answeredQuestion &&
              countdown !== 0 &&
              question.options &&
              question.options.map((item, index) => (
                <div
                  className="question-lower__question"
                  key={index}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </div>
              ))}
            {!answeredQuestion && countdown === 0 && (
              <p className="questions__answer">
                {randomMessages[2].gameOver}. Correct answer is{" "}
                {question.answer}
              </p>
            )}
            {answeredCorrectly && (
              <p className="questions__answer">
                {randomMessages[0].correctAns}. Your answer was {answer} and it
                was correct! You got {question.point} points!
              </p>
            )}

            {!answeredCorrectly && answeredQuestion && (
              <p className="questions__answer">
                {randomMessages[1].incorrectAns} Your answer was {answer} and
                correct answer is {question.answer}. Sorry, but no points!
              </p>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Questions;
