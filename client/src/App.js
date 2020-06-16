import React, { Suspense } from "react";
import store from "./store";
import { Provider } from "react-redux";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";

//lazy import page here
const HomePage = React.lazy(() => import("./pages/Home"));
const SearchPage = React.lazy(() => import("./pages/Search"));
const GamePage = React.lazy(() => import("./pages/Game"));
const DataBasePage = React.lazy(() => import("./pages/DataBase"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));

function App() {
  const githubUrl = "https://github.com/Bilel-Gharbi/Yobetit-Test";
  const linkedInUrl = "https://www.linkedin.com/in/bilel-gharbi/";
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/partOne" component={SearchPage} />
              <Route exact path="/slotMachine" component={GamePage} />
              <Route exact path="/dataBase" component={DataBasePage} />
              <Route
                path="/gitHub"
                component={() => {
                  window.location.href = githubUrl;
                  return null;
                }}
              />
              <Route
                path="/linkedin"
                component={() => {
                  window.location.href = linkedInUrl;
                  return null;
                }}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </>
  );
}

export default App;
