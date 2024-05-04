import React, { Component } from "react";
import select from "./main";

class Decrypt extends React.Component {
  render() {
    return (
      <div>
        <div className="div-box-output">
          <p>Your Decrypt</p>
          <div className="box-response">
            <p className="text">
              {this.props.data}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Decrypt;