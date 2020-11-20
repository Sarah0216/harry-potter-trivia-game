import "./Score.scss";

const Score = () => {
  return (
    <div className="score__container">
      <li className="score__item">
        <p className="score__rank">RANK</p>
        <p className="score__name">NAME</p>
        <p className="score__house">HOUSE</p>
        <p className="score__score">SCORE</p>
      </li>
    </div>
  );
};

export default Score;
