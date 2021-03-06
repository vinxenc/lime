import * as React from "react";
import * as ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

// React DOM
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
