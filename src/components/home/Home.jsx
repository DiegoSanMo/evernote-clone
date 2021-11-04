import React from "react";
import Form from "./Form";

export default function home() {
  return (
    <div className="container">
      <div className="row center-align">
        <div className="col s7">
          <Form />
        </div>
        <div className="col s5">note list</div>
      </div>
    </div>
  );
}
