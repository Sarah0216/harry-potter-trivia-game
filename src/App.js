import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Highscore from "./pages/Highscore/Highscore";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/highscore" component={Highscore} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
