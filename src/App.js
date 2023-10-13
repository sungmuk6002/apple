import React, { useState } from 'react';
import './App.css'
import Login from './Components/Login';
import SwiperComponent from './Components/SwiperComponents';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
    setUsername(username);
    console.log(`
    아이디 : ${username}
    비밀번호 : ${password}
    `);
  };

  const hideLoginForm = () => {
    setShowLogin(true);
  };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setUsername('');
  // };
  return (
    <div>
      {/* header */}
      <div className="header">
        <div className="section1">
          <ul>
          <li>
              {isLoggedIn ? (
                <span>반갑습니다, {username}님.</span>
              ) : (
                <button className='login-btn' onClick={() => setShowLogin(false)}>
                  로그인
                </button>
              )}
            </li>
            <li>
              <a href="#" className='mypage-btn'>마이페이지</a>
            </li>
            <li>
              <a href="#" className='cart-btn'>주문조회</a>
            </li>
          </ul>
        </div>
        <div className="section2">
          <img src="해본이네 농원.png" alt="해본이네 농원" className='logo-img'/>
          <ul>
            <li>
              <a href="#">사과 구매</a>
            </li>
            <li>
              <a href="#">사과즙 구매</a>
            </li>
            <li>
              <a href="#">상품 후기</a>
            </li>
            <li>
              <a href="#">농원 소개</a>
            </li>
            <li>
              <a href="#">장바구니</a>
            </li>
          </ul>
        </div>
      </div>
      {/* contents */}
      <div className='contents'>
        <SwiperComponent />
        {!showLogin && <Login onLogin={handleLogin} hideLoginForm={hideLoginForm} />}
      </div>
      
    </div>
  );
};