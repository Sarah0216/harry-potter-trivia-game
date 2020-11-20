import "./GameOver.scss";
import Header from "../../components/Header/Header";

const GameOver = () => {
  return (
    <div>
      <Header />
      <h1 className="game-over__title">GAME OVER</h1>
      <p className="game-over__points">You won your house X AMOUNT of points</p>

      <div className="game-over__container">
        <p className="game-over__high">Checkout the highscore board</p>
        <button className="game-over__button">highscores</button>
      </div>
    </div>
  );
};

export default GameOver;
