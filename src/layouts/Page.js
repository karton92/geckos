import React from "react";
import { Route, Switch } from "react-router";
import StartPage from "../pages/StartPage";
import Contact from "../pages/Contact";
import AnimalsPage from "../pages/AnimalsPage";
import AnimalsList from "../pages/AnimalsList";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={StartPage} />
      <Route path="/animals" component={AnimalsList} />
      <Route path="/animal/:id" component={AnimalsPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/login" component={LoginPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Page;
