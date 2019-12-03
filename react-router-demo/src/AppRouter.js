import React from 'react';
import { Link,BrowserRouter as Router,Route} from "react-router-dom"
import Home from './Home'
import Work from './Work'
import Video from './Video'
import './style.css'

function AppRouter() {
  return (
    <Router>
    <div className="mainDiv">
      <div className="leftNav">
        <h2>一级菜单</h2>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/video">视频教程</Link></li>
            <li><Link to="/Work">工作经验</Link></li>
          </ul>
      </div>
      <div className="rightMain">
        <Route path="/" exact component={Home} />
        <Route path="/video" component={Video} />
        <Route path="/Work" component={Work} />
      </div>
    </div>
    </Router>
  );
}

export default AppRouter;
