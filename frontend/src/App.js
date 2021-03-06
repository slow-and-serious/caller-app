import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Rotation from "./components/Rotation";
import RotationDetail from "./components/RotationDetail";
import StartRotation from "./components/StartRotation";

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
        <Header
          profile={profile}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setProfile={setProfile}
        />

        <Switch>
          <Route
            exact
            path="/"
            component={() => <Landing loggedIn={loggedIn} />}
          />
          <Route
            exact
            path="/about"
            component={() => <About loggedIn={loggedIn} />}
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
            path="/profile"
            component={() => (
              <Profile profile={profile} setProfile={setProfile} />
            )}
          />
          <Route
            exact
            path="/rotation"
            component={() => <Rotation loggedIn={loggedIn} profile={profile} />}
          />
          <Route
            exact
            path="/start-rotation"
            component={() => <StartRotation />}
          />
          <Route
            exact
            path="/rotation-detail/:id"
            component={() => <RotationDetail />}
          />
        </Switch>
        <Footer />
      </React.StrictMode>
    </Router>
  );
}
export default App;
