import React, { Component } from "react";
import select from "./main";

class Publickey extends React.Component {
  state = {
    publicKey: "" // Khai báo biến trạng thái để lưu trữ private key
  };

  componentDidUpdate(prevProps) {
    // Kiểm tra nếu props.data đã thay đổi so với props trước đó
    if (this.props.data !== prevProps.data) {
      // Cập nhật giá trị của publickey khi nhận được dữ liệu mới từ props
      this.setState({ 
        publicKey: this.props.data 
      });
    }
  }
  handleChange = (event) => {
    const publicKey = event.target.value;
    this.setState({ publicKey: publicKey});
    this.props.onDataChange(publicKey); // Gọi hàm callback để truyền public key lên Main component
  };
  render() {
    return (
      <div>
        <div className="div-box-output">
          <p className="header-main">Your public key</p>
          <div>
          <input type="number" className="box-output"value={this.state.publicKey}onChange={this.handleChange}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Publickey;
