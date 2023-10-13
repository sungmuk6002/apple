
import React, { useState } from 'react';
import './Login.css'

const Login = ({ onLogin, hideLoginForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username && !password) {
      console.log("사용자명과 비밀번호를 입력하세요.");
      setUsernameIsValid(true);
      setPasswordIsValid(true);
    } else if (!username) {
      console.log("사용자명을 입력하세요.");
      setUsernameIsValid(true);
      setPasswordIsValid(false);
    } else if (!password) {
      console.log("비밀번호를 입력하세요.");
      setUsernameIsValid(false);
      setPasswordIsValid(true);
    } else {
      onLogin(username, password);
      hideLoginForm();
      setUsername('');
      setPassword('');
      setUsernameIsValid(false);
      setPasswordIsValid(false);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <div className={usernameIsValid ? 'invalid' : ''}>
          <label>
            사용자명:
            <input 
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameIsValid(true);
              }}
            />
          </label>
        </div>
        <div className={passwordIsValid ? 'invalid' : ''}>
          <label>
            비밀번호:
            <input 
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setPasswordIsValid(true);
              }}
            />
          </label>
        </div>
        <button type="submit" className='login-form__login-button' >로그인</button>
        <a href='#' className='join'>회원가입</a>
      </form>
    </div>
  );
};

export default Login;

