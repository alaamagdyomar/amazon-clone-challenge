import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase/config";

function App() {
  // intialize the data layer
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // create a listener for logging in & out
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in ......
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out.....
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup operations go in here
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/*Default Route*/}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
