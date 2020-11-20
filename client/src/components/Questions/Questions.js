import { Fragment } from "react";
import GameOver from "../GameOver/GameOver";
import "./Questions.scss";

const baseUrl = "http://localhost:7000";

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
          <p>
            {`Time remaining: 00:${countdown === 10 ? 10 : "0" + countdown}`}{" "}
          </p>
          <p>{`${
            questionsRemaining > 1
              ? questionsRemaining + " questions"
              : questionsRemaining + " question"
          } remaining`}</p>
          <p>{`Your score: ${score}`} </p>
          <p>your house is {house.name}</p>
          <p>
            your house is{" "}
            <img
              src={"http://localhost:7000/houses/" + house.img + ".jpg"}
              alt="house"
            />
          </p>
          <p>your wand is {wand.name}</p>
          <img
            src={"http://localhost:7000/wands/" + wand.img + ".png"}
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
              <p>
                {randomMessages[2].gameOver}. Correct answer is{" "}
                {question.answer}
              </p>
            )}
            {answeredCorrectly && (
              <p>
                {randomMessages[0].correctAns}. Your answer was {answer} and it
                was correct! You got {question.point} points!
              </p>
            )}

            {!answeredCorrectly && answeredQuestion && (
              <p>
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
