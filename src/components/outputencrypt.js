import React, { Component } from "react";
import Message from "./inputmessage";
class Encrypt extends React.Component {
  state = {
    encrypt: "" // Khai báo biến trạng thái để lưu trữ private key
  };

  componentDidUpdate(prevProps) {
    // Kiểm tra nếu props.data đã thay đổi so với props trước đó
    if (this.props.data !== prevProps.data) {
      // Cập nhật giá trị của encrypt khi nhận được dữ liệu mới từ props
      this.setState({ encrypt: this.props.data });
    }
  }
  handleChange = (event) => {
    const inputValue = event.target.value;
    // Kiểm tra xem giá trị nhập vào có phải là số không
    if (/^\d*$/.test(inputValue)) {
      this.setState({ encrypt: inputValue });
      this.props.onDataChange(inputValue);
    }
  };
  render() {
    return (
      <div className="div-row">
        <div className="">
          <p className="header-main">Your Encrypt</p>
          <div className="">
          <textarea type="number" className="input"value={this.state.encrypt} onChange={this.handleChange}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Encrypt;