import React, { Component } from "react";
import select from "./main";

class N extends React.Component {
  render() {
    return (
      <div>
        <div className="div-box-output">
          <p>Your N</p>
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
export default N;