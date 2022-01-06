import "./App.css";
//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import SignUp from "./components/login/SignUp";
import Login from "./components/login/Login";
import ViewTasks from "./components/ViewTasks";
import CreateTask from "./components/CreateTask";
import DelComp from "./components/del";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/viewTasks">
          <ViewTasks />
        </Route>
        <Route path="/createTask">
          <CreateTask />
        </Route>
        <Route path="/delComp">
          <DelComp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
