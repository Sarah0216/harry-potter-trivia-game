import "./ScoreTitle.scss";

const ScoreTitle = () => {
  return (
    <div className="score-title__container">
      <p className="score-title__rank">RANK</p>
      <p className="score-title__name">NAME</p>
      <p className="score-title__house">HOUSE</p>
      <p className="score-title__score">SCORE</p>
    </div>
  );
};

export default ScoreTitle;
