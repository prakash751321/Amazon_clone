import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Demo from "./Page/Demo";
import Login from "./Login/Login";
import Cl_Login from "./Cl_Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Returns from "./Returns";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //  useEffect <<<<<<<<<<<<<<<<  POWERFUL
  //  Piece of code which runs based on a given condition

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //  the user is logged in....

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //  the user is logged out...

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    console.log(' USER IS >>>>',user)

    return () => {
      //  Any cleanup operation go in here...
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            {/* <Login/> */}
            <Cl_Login />
          </Route>
          <Route path="/rtn">
            <Header/>
            <Returns/>
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>

          {/* This is a default Route */}
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
