import React, { Component } from 'react';
import Main from './main';
import Encrypt from './outputencrypt';
import Decrypt from './outputdecrypt';
import axios from 'axios';
class Message extends React.Component {
    state = {
        inputMessage: "",
        encryptedMessage: "",
        decryptedMessage: ""
    };

    handleChange = (event) => {
        this.setState({ inputMessage: event.target.value });
    };
    //call api encrypt
    encryptMessage = async () => {
        try {
            const response = await axios.post('https://api-rsa.kiet.site/encrypt', {
                public_key: this.props.publickey,
                n: this.props.n,
                message: this.state.inputMessage,
            });
            this.setState({ 
                encryptedMessage: response.data.message_encrypt
                
            });
        } catch (error) {
            console.error('Error encrypting message:', error);
        }
    };
    //call api decrypt
    decryptMessage = async () => {
        try {
            const response = await axios.post('https://api-rsa.kiet.site/decrypt', {
                private_key: this.props.privatekey,
                n: this.props.n,
                message: this.state.encryptedMessage,
            });
            this.setState({ 
                decryptedMessage: response.data.message_decrypt 
            });
        } catch (error) {
            console.error('Error decrypting message:', error);
        }
    };

    render() {
    return (
      <div>
        <div className="div">
            <div className="div-row">
                <p className="header-main">Enter content</p>
                <textarea type='text' className='input' onChange={this.handleChange} value={this.state.inputMessage}></textarea>
            </div>
            <div className='div-button'>
                <div className='div-a-button'>
                    <button name="Encrypt" onClick={this.encryptMessage}  className="encrypt">Encrypt</button>
                </div>
                <div className='div-a-button'>
                    <button name="Decrypt" onClick={this.decryptMessage} className="decrypt">Decrypt</button>
                </div>
            </div>
            <Encrypt data={this.state.encryptedMessage}/>
            <Decrypt data={this.state.decryptedMessage}/>
        </div>
      </div>
    )
  }
}
export default Message;