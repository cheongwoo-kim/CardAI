import './App.scss';
import 'reset-css';
import React from 'react';


function index() {
  const title = "cardai";
  return (
      <header>{title}
        <form action="">
          <input name="email" type="text" placeholder="이메일"></input>
          <input name="password" type="password" placeholder="비밀번호"></input>
        </form>
      
      </header>
  );
}

export default index;
