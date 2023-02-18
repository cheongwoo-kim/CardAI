const express = require('express');
const app = express();

app.listen(80, function() {
    console.log('listening on 80')
})

app.get('/',(req,res)=>{res.send('메인페이지')})