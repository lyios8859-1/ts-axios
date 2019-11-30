import axios from '../../src/index';

// get 请求
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// });

// const date = new Date();
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// });

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// });

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar,@:% & '
//   }
// });

// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// });

// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// });

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     bar: 'baz',
//     foo: null
//   }
// });

// post 请求
axios({
  method: 'post',
  url: '/base/post',
  data: {
    name: 'Tom',
    age: 23
  }
});

const arr = new Int32Array([21, 31]);
axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
});