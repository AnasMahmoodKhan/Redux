import Header from "./components/Header";
import About from "./components/About";
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Homepage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
