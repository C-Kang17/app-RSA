import React, { Component } from "react";
import select from "./main";

class N extends React.Component {
  state = {
    n: "" // Khai báo biến trạng thái để lưu trữ private key
  };

  componentDidUpdate(prevProps) {
    // Kiểm tra nếu props.data đã thay đổi so với props trước đó
    if (this.props.data !== prevProps.data) {
      // Cập nhật giá trị của n khi nhận được dữ liệu mới từ props
      this.setState({ 
        n: this.props.data 
      });
    }
  }
  handleChange = (event) => {
    const n = event.target.value;
    this.setState({ n: n });
    this.props.onDataChange(n);
  };
  render() {
    return (
      <div>
        <div className="div-box-output">
          <p className="header-main">Your N </p>
          <div>
            <input type="number" className="box-output"value={this.state.n} onChange={this.handleChange}/>
          </div>
        </div>
      </div>
    );
  }
}
export default N;