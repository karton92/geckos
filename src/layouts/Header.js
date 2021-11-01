import React from "react";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";

import img1 from "../images/img1.png";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

const Header = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => <img src={img1} alt="Las deszczowy" />}
      />
      <Route path="/animals" render={() => <img src={img2} alt="Jaguar" />} />
      <Route path="/contact" render={() => <img src={img3} alt="Papuga" />} />
      <Route path="/admin" render={() => <img src={img4} alt="Papuga" />} />
      <Route render={() => <img src={img1} alt="Las deszczowy" />} />
    </Switch>
  );
};

export default Header;
