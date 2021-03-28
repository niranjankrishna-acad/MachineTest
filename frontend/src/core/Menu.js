import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import { signout, isAuthenticated } from "../auth/helper";



const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#EFFFFF" };
  }
};




const Menu = ({ history, path }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">


            <li className="nav-item px-3 mx-3 ">
              <Link
                style={currentTab(history, "/")}
                className="nav-link"
                to="/">
                Home
            </Link>
            </li>



            {isAuthenticated() && (
              <li className="nav-item px-3 mx-3 ">
                <Link
                  style={currentTab(history, "/user/dashboard")}
                  className="nav-link"
                  to="/user/dashboard">
                  Dashboard
              </Link>
              </li>
            )}



            {isAuthenticated() && (
              <li className="nav-item px-3 mx-3 ">
                <Link
                  style={currentTab(history, "/user/signout")}
                  onClick={() => {
                    signout(() => {
                      history.push("/signin");
                    });
                  }}
                  className="nav-link">
                  Signout
              </Link>
              </li>
            )}



            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item mx-3 px-2">
                  <Link
                    style={currentTab(history, "/signup")}
                    className="nav-link"
                    to="/signup">
                    Signup
                </Link>
                </li>

                <li className="nav-item mx-3 px-2">
                  <Link
                    style={currentTab(history, "/signin")}
                    className="nav-link"
                    to="/signin">
                    Signin
                </Link>
                </li>
              </Fragment>
            )}
          </ul>


          <ul className="navbar-nav">
            <li className="nav-item border border-secondary">
              <Link
                style={currentTab(history, "/cart")}
                className="nav-link px-4"
                to="/cart">
                Cart
                <i class="fa fa-shopping-basket pl-2 text-warning" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>



        </div>
      </div>
    </nav>
  );
};

export default withRouter(Menu);
