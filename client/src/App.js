import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Assigned from "./pages/Assigned/Assigned";
import Questions from "./pages/Questions/Questions";
import GameOver from "./pages/GameOver/GameOver";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/assigned" component={Assigned} />
        <Route path="/questions" component={Questions} />
        <Route path="/gameover" component={GameOver} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
