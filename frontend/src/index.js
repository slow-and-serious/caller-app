import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
