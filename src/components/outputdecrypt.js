import React, { Component } from "react";
import select from "./main";

class Decrypt extends React.Component {
  render() {
    return (
      <div className="div-row">
        <div className="div-box-response">
          <p className="header-main">Your Decrypt</p>
          <div className="box-response">
            <span>
              {this.props.data}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Decrypt;