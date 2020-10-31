import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Notifications from "./components/Notifications";

function App() {
  return (
    <Router>
      <React.StrictMode>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/notification-history" component={Notifications} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
        <Footer />
      </React.StrictMode>
    </Router>
  );
}
export default App;


