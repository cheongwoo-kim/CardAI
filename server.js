const express = require('express');
const app = express();
const path = require('path');
app.listen(8080, function() {
    console.log('listening on 8080')
})
app.use(express.json());
var cors = require('cors');
app.use(cors());

//특정 폴더의 파일들 전송 가능
app.use(express.static(path.join(__dirname, 'react/build/')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'react/build/index.html'));
})

//1. 노드에서 리액트 db데이터 보낼 때 api 작성
//2. 리액트에서 데이터 가져올 때 /path로 get요청
app.get('/path',(req, res)=>{
    //보낼 데이터 json변환
    res.json({});
})

//리액트 라우터 쓰는 경우 주석 해제
// app.get('*', (req,res)=> {
//     res.sendFile(path.join(__dirname, 'react/build/index.html'));
// });