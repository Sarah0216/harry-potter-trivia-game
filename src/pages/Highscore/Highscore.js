import "./Highscore.scss";
import Header from "../../components/Header/Header";
import Score from "../../components/Score/Score";
import ScoreTitle from "../../components/ScoreTitle/ScoreTitle";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://harry-potter-api.herokuapp.com";

const Highscore = () => {
  const [leaderboard, setLeaderBoard] = useState([]);
  useEffect(() => {
    axios.get(API_URL + "/leaderboard").then((response) => {
      setLeaderBoard(response.data);
    });
  }, [setLeaderBoard]);
  return (
    <div className="highscore">
      <Header />
      <h1 className="highscore__title">HIGHSCORES</h1>
      <div className="highscore__board">
        <ScoreTitle />
        <ul className="highscore__container">
          {leaderboard
            .sort((a, b) => b.score - a.score)
            .map((leader, index) => {
              return <Score leader={leader} key={index} position={index} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Highscore;
