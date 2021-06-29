import React from "react";
import Menu from "./Menu";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4 m-3",
  children,
}) => {
  return (
    <div>
      <Menu />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container-fluid">

        <div className="jumbotron bg-dark text-white text-center m-5">
          <h1 className="display-4 text-warning">{title}</h1>
          <h3 className="lead">{description}</h3>
        </div>
        <div className={className}>{children}</div>

      </div>

      <footer className="footer mt-5">
        <div className="container-fluid bg-dark text-white text-center py-4 text-secondary">
          <h4>Reach me out at</h4>
          <p className="mb-4 text-white">
            Gmail - realniranjankrishna@gmail.com
            </p>
          <div className="container">
            <span className=" text-secondary lead">
              Fullstack Django and React Project By Niranjan Krishna
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Base;


