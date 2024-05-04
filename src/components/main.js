import React, {Component} from "react";
import N from "./outputN";
import Privatekey from "./outputprivate";
import Publickey from "./outputpublic";
import Message from "./inputmessage";
import axios from 'axios';

class Main extends React.Component {
    state={
        keyLength: 8,
        publickey:"",
        privatekey:"",
        n:"",
    }
    async generateKey() {
        try {
            const response = await axios.post('https://api-rsa.kiet.site/generate-key', {
                key_length: this.state.keyLength // Sử dụng giá trị độ dài khóa từ state
            });
            this.setState({
                privatekey: response.data.private_key,
                publickey: response.data.public_key,
                n: response.data.n
            });
        } catch (error) {
            console.error('Error generating key:', error);
            // Xử lý lỗi theo ý của bạn
        }
    }
    handleChange = (event) => {
        this.setState({
            keyLength: parseInt(event.target.value) // Chuyển đổi giá trị từ string sang number
        });
    }
    render() {
        return (
        <div>
            <div className="div">
                <div className="div-main">
                    <p className="header-main">Select key length</p>
                    <select className="main" value={this.state.keyLength} onChange={this.handleChange}>
                        <option value="8">8 bit</option>
                        <option value="16">16 bit</option>
                    </select>
                    
                    <button name="Tao Khoa" onClick={ () => {this.generateKey()} }  className="generate">
                        Generate key pair
                    </button>
                </div>
                <Privatekey data={this.state.privatekey}/>
                <Publickey data={this.state.publickey}/>
                <N data={this.state.n}/>
            </div>
            <div className="div">
                <Message publickey={this.state.publickey} n={this.state.n} privatekey={this.state.privatekey} />
            </div>
            

        </div>
        );
    } 
}
export default Main;