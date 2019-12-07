import axios, { AxiosError } from '../../src/index';

axios({
  method: 'get',
  url: '/error/get1',
}).then(res => {
  console.log(res);
}).catch(e => {
  console.error(e)
});

axios({
  method: 'get',
  url: '/error/get',
}).then(res => {
  console.log(res);
}).catch(e => {
  console.error(e)
});

// 模拟网络错误, 主要是在这段时间是我们使时间去在浏览器设置offline，表示网络请求错误
setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get',
  }).then(res => {
    console.log(res);
  }).catch(e => {
    console.log(e)
  });
}, 5000);

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(res => {
  console.log(res);
}).catch((e: AxiosError) => {
  console.log('*'.repeat(50))
  console.log(e.message)
  console.log(e.config)
  console.log(e.code)
  console.log(e.request)
  console.log(e.isAxiosError)
  console.log('*'.repeat(50))
  
});