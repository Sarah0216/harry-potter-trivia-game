import "./Score.scss";

const Score = ({ leader, position }) => {
  return (
    <div className="score__container">
      <li className="score__item">
        <p className="score__rank">{position + 1}</p>
        <p className="score__name">{leader.name}</p>
        <p className="score__house">{leader.house}</p>
        <p className="score__score">{leader.score}</p>
      </li>
    </div>
  );
};

export default Score;
