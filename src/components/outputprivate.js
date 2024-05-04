import React, { Component } from "react";
import select from "./main";

class Privatekey extends React.Component {
  state = {
    privateKey: "" // Khai báo biến trạng thái để lưu trữ private key
  };
  componentDidUpdate(prevProps) {
    // Kiểm tra nếu props.data đã thay đổi so với props trước đó
    if (this.props.data !== prevProps.data) {
      // Cập nhật giá trị của privateKey khi nhận được dữ liệu mới từ props
      this.setState({ 
        privateKey: this.props.data 
      });
    }
  }
  handleChange = (event) => {
    const privateKey = event.target.value;
    this.setState({ privateKey: privateKey });
    this.props.onDataChange(privateKey);
  };
  render() {
    return (
      <div>
        <div className="div-box-output">
          <p className="header-main">Your private key</p>
          <div className="">
          <input type="number"className="box-output"value={this.state.privateKey} onChange={this.handleChange}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Privatekey;