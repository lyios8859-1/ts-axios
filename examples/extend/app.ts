import axios from '../../src/index';

axios({
  method: 'post',
  url: '/extend/post',
}).then(res => {
  console.log(res);
}).catch(e => {
  console.error(e)
});

axios.request({
  method: 'post',
  url: '/extend/post',
  data: {
    msg: 'Hello Tom!!!'
  },
}).then(res => {
  console.log(res);
}).catch(e => {
  console.error(e)
});

axios.get('/extend/get');
axios.options('/extend/options');
axios.delete('/extend/delete');
axios.head('/extend/head');

axios.post('/extend/post', {msg: 'post'});
axios.put('/extend/put', {msg: 'put'});
// axios.patch('/extend/patch', {msg: 'patch'});
