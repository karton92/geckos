import React from "react";
import { Route, Redirect } from "react-router-dom";

class AdminPage extends React.Component {
  state = {
    permission: false,
  };

  handleClick = () => {
    console.log("Działa");
  };
  render() {
    const { permission } = this.state;
    return (
      <Route
        render={() =>
          permission ? (
            <h3>Panel Admina - dzień dobry!</h3>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

export default AdminPage;
