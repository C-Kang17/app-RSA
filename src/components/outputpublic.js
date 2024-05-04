import React, { Component } from "react";
import select from "./main";

class Publickey extends React.Component {
  render() {
    return (
      <div>
        <div className="div-box-output">
          <p className="header-main">Your public key</p>
          <div className="box-output">
            <p className="text">
              {this.props.data}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Publickey;
