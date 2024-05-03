import React, { useState, useEffect } from "react"
import Select from "./components/select";
import Privatekey from "./components/outputleft";
import Publickey from "./components/outputright";
import axios from 'axios';
import "./index.css";
  

function App() {

  return (
    <div>
      <Select />
      <div className="div-output">
        <Privatekey/> <Publickey/>
      </div>
    </div>
  );
}

export default App