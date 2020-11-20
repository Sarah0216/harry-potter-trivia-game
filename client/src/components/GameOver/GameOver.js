import "./GameOver.scss";
import { Link } from "react-router-dom";
const GameOver = ({ score }) => {
  return (
    <div>
      <h1 className="game-over__title">GAME OVER</h1>
      <p className="game-over__points">You won your house {score} of points</p>

      <div className="game-over__container">
        <p className="game-over__high">Checkout the highscore board</p>
        <Link to="/highscore" className="game-over__button">
          highscores
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
