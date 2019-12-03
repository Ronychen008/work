import React from 'react'
import { Link,BrowserRouter as Router,Route} from "react-router-dom"
import Html from "./pages/html";
import Css from "./pages/css";
import Js from "./pages/Js";

function Video() {
  return (
    <Router>
      <div className="topNav">
        <ul>
          <li><Link to="/video/html">我是html视频教学</Link></li>
          <li><Link to="/video/js">我是js视频教学</Link></li>
          <li><Link to="/video/css">我是css视频教学</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <h3>以下为视频教程具体内容</h3>
        <Route path="/video/html" component={Html}/>
        <Route path="/video/js" component={Js}/>
        <Route path="/video/css" component={Css}/>
      </div>
    </Router>
  )
}
export default Video