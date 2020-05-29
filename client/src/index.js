import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import Welcome from "./components/Welcome";
import SignUp from "./components/auth/Signup";
import SignOut from "./components/auth/SignOut";
import SignIn from "./components/auth/SignIn";
import reducers from "./reducers";
import Feature from "./components/Feature";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(reduxThunk)
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Welcome} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signin" component={SignIn} />
        <Route path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
