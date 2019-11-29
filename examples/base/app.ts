import axios from '../../src/index';

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
});

const date = new Date();
axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
});

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
});

axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar,@:% & '
  }
});

axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
});

axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
});

axios({
  method: 'get',
  url: '/base/get',
  params: {
    bar: 'baz',
    foo: null
  }
});