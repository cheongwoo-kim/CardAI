import 'reset-css';
import './App.scss';

import React, { useState } from 'react';


const PublicUrl = process.env.PUBLIC_URL;

const Header = (() => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img width={120} src={`${PublicUrl}/images/icon/logo.svg`} alt="" />
        </div>
        <ul>
          <li><a href="artist"></a></li>
          <li><a href="search"><img width={17} height={17} src={PublicUrl + '/images/icon/search.svg'} alt="search" /></a></li>
        </ul>
      </nav>
    </header>
  )
})
function index() {

  return (
    Header()
  );
}

export default index;
