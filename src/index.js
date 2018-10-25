import React, { Fragment } from "react";
import { render } from "react-dom";
import Counter from './counter';


render(
  <Fragment>
    <h1> I'm Working! </h1>
    <Counter />
  </Fragment>,
  document.getElementById("app")
);
