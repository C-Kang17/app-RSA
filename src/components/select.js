import React from 'react';

export default function Select() {

    return(
        <div >
            <div className="div">
                <p className='header-select'>Select key length</p>
                <select className="select">
                    <option value="1">1 bit</option>
                    <option value="2">2 bit</option>
                    <option value="3">3 bit</option>
                </select>
                <button name="Tao Khoa" className="generate">Generate key pair</button>
            </div>
        </div>
    );
}