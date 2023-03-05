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

const Content = (() => {
  const [title, setTitle] = useState(['기본 타이틀']);
  const [like, setLike] = useState(0);
  return (
    <section>
      <h1> { title[0] } <span onClick={()=>{setLike(like+1)}}>👍</span> {like} </h1>
      <button onClick={()=>{setTitle(['변경 타이틀'])}}></button>
    </section>
  )
})
function index() {

  return (
    Header(),
    Content()
  );
}

export default index;
