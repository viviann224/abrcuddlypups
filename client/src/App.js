import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>

          <Route exact path={["/donate"]}>
            <Donate />
          </Route>
    {/*
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
