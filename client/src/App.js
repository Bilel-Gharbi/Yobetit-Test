import React, { Suspense } from "react";
import store from "./store";
import { Provider } from "react-redux";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";

//lazy import page here
const HomePage = React.lazy(() => import("./pages/Home"));
const SearchPage = React.lazy(() => import("./pages/Search"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/search" component={SearchPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </>
  );
}

export default App;
