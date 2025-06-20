import React from 'react';
import './App.css';
import {Link, Route} from "react-router-dom"

import Home from './component/home';
import Categori from './component/categori';
import Chillforyou from './component/chillforyou';
import Junggigudoc from './component/junggigudoc';
import Event from './component/event';

function App() {
  return(
    <div className='wrap'>
      <header className = "header">
      <Link to="/"><img src={process.env.PUBLIC_URL +'/poto/main_logo.png'} className='main_logo'/></Link>
        <ul>
          <li><Link to="/component/categori">카테고리</Link></li>
          <li><Link to="/component/chillforyou">Chill For You</Link></li>
          <li><Link to="/component/junggigudoc">정기구독</Link></li>
          <li><Link to="/component/event">이벤트</Link></li>
        </ul>

        <div className="search-nav">
        <input type="text" placeholder="검색창" className="search-box"/></div>
        
        <div class = "user-section">
          <div class = "user-links">
            <a href='#'>로그인</a>
            <a href='#'>고객센터</a>
          </div>
          <div class = "icon">
            <img src={process.env.PUBLIC_URL +'/poto/kart.png'}></img>
            <img src={process.env.PUBLIC_URL +'/poto/hart.png'}></img>
            <img src={process.env.PUBLIC_URL +'/poto/mypage.png'}></img>
          </div>
        </div>
      </header>
      <div>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/component/categori' component={Categori}/>
        <Route path='/component/chillforyou' component={Chillforyou}/>
        <Route path='/component/junggigudoc' component={Junggigudoc}/>
        <Route path='/component/event' component={Event}/>
      </div>
    </div>
  )
}

export default App;
