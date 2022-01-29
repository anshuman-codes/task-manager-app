//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import SignUp from "./components/login/SignUp";
import Login from "./components/login/Login";
import ViewTasks from "./components/ViewTasks";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import ViewProfile from "./components/ViewProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/viewTasks">
          <ViewTasks />
        </Route>
        <Route path="/createTask">
          <CreateTask />
        </Route>
        <Route path="/editTask/:id">
          <EditTask />
        </Route>
        <Route path="/viewProfile">
          <ViewProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
