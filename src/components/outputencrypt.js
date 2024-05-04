import React, { Component } from "react";
import Message from "./inputmessage";
class Encrypt extends React.Component {
  render() {
    return (
      <div className="div-row">
        <div className="">
          <p className="header-main">Your Encrypt</p>
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
export default Encrypt;