import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./admin.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewStudent from "./pages/newStudent/NewStudent";

function Admin() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route exact path="/students">
            <UserList />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
          <Route exact path="/newStudent">
            <NewStudent />
          </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default Admin;
