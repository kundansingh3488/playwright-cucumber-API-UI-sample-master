import http from 'k6/http';
import { sleep,check } from 'k6';

export const options = {
  // virtual users
  vus: 1,
  // duration of execution
  duration: '1s',
};

  export default function () {
    const url = 'https://dummyjson.com/auth/login';
    const payload = JSON.stringify({
        username:'Dinga',
        password:'Dingi',
    })
    const params = {
        headers:{
            'Content-Type' : 'application/json',
        },
    };
    const responce = http.post(url.payload,params);
    check( responce,{
        'is status 200':(variable)=>variable.status===200,
        'is responce body hac username':(responce)=>responce.body.includes('Dinga'),
    });
  }