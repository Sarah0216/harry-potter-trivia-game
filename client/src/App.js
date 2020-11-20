import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Assigned from "./pages/Assigned/Assigned";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/assigned" component={Assigned} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
