import { Switch, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import PostsPage from "./pages/PostsPage";
import Counter from "./components/Counter/Counter";
import UserInput from "./components/UserInput/UserInput";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Testing</h1>
      </header>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/user-input" component={UserInput} />
      </Switch>
    </div>
  );
}

export default App;
