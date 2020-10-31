import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Notifications from "./components/Notifications";
import Rotation from "./components/Rotation";

function App() {
  const [profile, setProfile] = useState({
    allow_notifications: "",
    is_manager: "",
    phone_number: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <React.StrictMode>
        <Header profile={profile} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Landing loggedIn={loggedIn} />}
          />
          <Route exact path="/notification-history" component={Notifications} />
          <Route
            exact
            path="/login"
            component={() => (
              <Login setLoggedIn={setLoggedIn} setProfile={setProfile} />
            )}
          />
          <Route
            exact
            path="/logout"
            component={() => <Logout setLoggedIn={setLoggedIn} />}
          />
          <Route
            exact
            path="/rotation"
            component={() => <Rotation loggedIn={loggedIn} profile={profile} />}
          />
        </Switch>
        <Footer />
      </React.StrictMode>
    </Router>
  );
}
export default App;
