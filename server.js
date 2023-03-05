const express = require('express');
const app = express();
const path = require('path');
// require('dotenv').config();
const SpotifyWebApi = require('spotify-web-api-node');
const client_id = '44e0fb965a4a4733ab59b024f3905748'; // 자신의 Spotify API client_id
const client_secret = '3a116477272442d8ab6e1afd9bee6440'; // 자신의 Spotify API client_secret


app.listen(8080, function() {
    console.log('listening on 8080')
})
app.use(express.json());
var cors = require('cors');
app.use(cors());


const spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret
  });
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

app.get('/search/:name', async (req, res) => {
    console.log(req.params);
    try {
      const { name } = req.params;
      // client credentials flow를 사용하여 인증 토큰 발급받기
      const { body: { access_token } } = await spotifyApi.clientCredentialsGrant();
        // 발급받은 인증 토큰을 API 요청의 헤더에 전달하기
        spotifyApi.setAccessToken(access_token);
      const { body: { artists: { items } } } = await spotifyApi.searchArtists(name);
      if (items.length === 0) {
        res.status(404).send(`${name}에 대한 검색 결과가 없습니다.`);
      } else {
        const artistId = items[0].id;
        const { body: { tracks } } = await spotifyApi.getArtistTopTracks(artistId, 'KR');
        const trackNames = tracks.map(track => track.name);
        res.send(`${items[0].name}의 인기 곡 목록: ${trackNames.join(', ')}`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });