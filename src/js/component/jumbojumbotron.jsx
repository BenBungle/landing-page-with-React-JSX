import React from "react";

function Jumbotron(props) {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid">
        <h1 className="display-5 fw-bold">{props.titulo1}</h1>
        <p className="col-md-8 fs-4">{props.parrafo1}</p>
      <div className="container-fluid d-flex justify-content">
        <img
          src={props.imagen1}
          className="card-img-top"
          style={{ objectFit: "contain", width: "100%", height: "40vh" }}
          alt="..."
        ></img>
      </div>
        <button className="btn btn-success btn-lg mx-3" type="button">
          Log In
        </button>
        <button className="btn btn-success btn-lg" type="button">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
