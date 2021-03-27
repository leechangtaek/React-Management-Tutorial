const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/1',
            'name' :'이창택',
            'birthday' :'941014',
            'gender' :'남자',
            'job' :'직장인'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/2',
            'name' :'삼창택',
            'birthday' :'222222',
            'gender' :'여자',
            'job' :'직장인'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/3',
            'name' :'사창택',
            'birthday' :'333333',
            'gender' :'남자',
            'job' :'직장인'
          }
    ]);
});

app.listen(port,()=> console.log(`Listening on port ${port}`));