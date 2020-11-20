import "./Highscore.scss";
import Header from "../../components/Header/Header";
import Score from "../../components/Score/Score";
import ScoreTitle from "../../components/ScoreTitle/ScoreTitle";

const Highscore = () => {
  return (
    <div>
      <Header />
      <h1 className="highscore__title">HIGHSCORES</h1>
      <ScoreTitle />
      <ul className="highscore__container">
        <Score />
        <Score />
        <Score />
        <Score />
        <Score />
        <Score />
      </ul>
    </div>
  );
};

export default Highscore;
