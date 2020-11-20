import React, { useEffect, useState } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import SignUp from "../../components/SignUp/SignUp";
import Questions from "../../components/Questions/Questions";
import axios from "axios";
import randomInt from "random-int";

const randomMessages = [
  {
    correctAns: [
      "Hmmm, maybe you are the chosen one",
      "You must belong to Ravenclaw",
      "All is well",
    ][randomInt(3)],
  },
  {
    incorrectAns: [
      "Your answer is riddikulus",
      "Remember to ALWAYS study ",
      "You shouldn’t have clicked that ",
    ][randomInt(3)],
  },
  {
    gameOver: [
      "Bet you wish you had a time turner ",
      "Help is always given to those at Hogwarts, just not time",
      "You nearly got us expelled but worse, you ran out of time",
    ][randomInt(3)],
  },
];

const Home = () => {
  const [name, setName] = useState("");
  const [countdown, setCountdown] = useState(5); // change this back
  const [showQuestions, setShowQuestions] = useState(false);
  const [loadQuestions, setLoadQuestions] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [answeredQuestion, setAnsweredQuestion] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [wand, setWand] = useState({});
  const [house, setHouse] = useState({});

  const API_URL = "https://harry-potter-api.herokuapp.com"; // change to localhost.

  // load questions initially, need to make this more secured
  useEffect(() => {
    loadQuestions &&
      axios.get(API_URL + "/random").then((response) => {
        setLoadQuestions(false);
        setQuestions(response.data.filter((_, index) => index !== 0));
        setCurrentQuestion(response.data[0]);
        setQuestionsLoaded(true);

        axios.get(API_URL + "/random-hat").then((response) => {
          setHouse(response.data[0].house[0]);
          setWand(response.data[1].wand[0]);
        });
      });
  }, [loadQuestions, setLoadQuestions]);

  // subtract to show countdown
  useEffect(() => {
    if (!answeredQuestion && showQuestions && countdown > 0) {
      setTimeout(() => setCountdown(countdown - 1), 1000);
    }

    if (answeredQuestion) {
      setCountdown(0);
    }
  }, [showQuestions, countdown, answeredQuestion]);

  // if countdown is zero reset everything
  useEffect(() => {
    if (countdown === 0 && questions.length > 0) {
      setTimeout(() => {
        // resetting everything
        setAnsweredQuestion(false);
        setAnswer(null);
        setAnsweredCorrectly(false);
        // order matters!
        // reset ends

        setCurrentQuestion(questions[0]);
        setCountdown(5); // change this back
        setQuestions(questions.filter((_, index) => index !== 0)); // adding this before set countdown returned error
      }, 9000);
    }

    if (questionsLoaded && questions.length === 0) {
      setTimeout(() => setGameOver(true), 10000); // revisit this. 10000 because 10 seconds will be allowed for each q
    }
  }, [questionsLoaded, countdown, setQuestions, setCurrentQuestion, questions]);

  useEffect(() => {
    if (gameOver) {
      axios.post(API_URL + "/player", {
        name: name,
        score: score,
      });
    }
  }, [gameOver, name, score]);
  const onSignupSubmit = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setShowQuestions(true);
    setLoadQuestions(true);
  };

  return (
    <div className="header">
      <Header />
      {!showQuestions && <SignUp onSignupSubmit={onSignupSubmit} />}
      {showQuestions && (
        <Questions
          question={currentQuestion}
          countdown={countdown}
          questionsRemaining={questions.length}
          score={score}
          gameOver={gameOver}
          setScore={setScore}
          setAnsweredQuestion={setAnsweredQuestion}
          answeredQuestion={answeredQuestion}
          name={name}
          answer={answer}
          setAnswer={setAnswer}
          answeredCorrectly={answeredCorrectly}
          setAnsweredCorrectly={setAnsweredCorrectly}
          setCountdown={setCountdown}
          randomMessages={randomMessages}
          house={house}
          wand={wand}
        />
      )}
    </div>
  );
};

export default Home;
