import "./Home.scss";
import Header from "../../components/Header/Header";
import SignUp from "../../components/SignUp/SignUp";

const Home = () => {
  return (
    <div>
      <Header />
      <SignUp />
      <button className="home__button">ENTER</button>
    </div>
  );
};

export default Home;
