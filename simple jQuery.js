//https://github.com/jirengu/frontend-interview/issues/42

题目2;
补充如下代码实现一个简单的jQuery;

function $(selector) {
  //todo..
}
$.prototype = {
  init: function (selector) {
    let nodes = document.querySelectorAll(selector);
    nodes.forEach((node, index) => (this[index] = node));
    this.length = nodes.length;
  },

  addClass: function (cls) {
    // todo...
  },
};
//todo ...

$.get = function (url, data) {
  function done() {
    //todo...
  }
  function fail() {
    //todo...
  }
  function always() {
    //todo...
  }

  return { done, fail, always };
};

$('p').addClass('ok');
$.get('http://api.jirengu.com/getWeather.php', { city: '北京' })
  .done((data) => console.log(data))
  .fail(() => console.log('get data error'));

//题目2-解答:
function $(selector) {
  const jq = new jQuery();
  jq.init(selector);
  return jq;
}
function jQuery() {}
jQuery.prototype = {
  init: function (selector) {
    let nodes = document.querySelectorAll(selector);
    nodes.forEach((node, index) => (this[index] = node));
    this.length = nodes.length;
  },

  addClass: function (cls) {
    for (let i = 0; i < this.length; i++) {
      const className = this[i].className;
      if (className.indexOf(cls) !== -1) continue;
      this[i].className = className ? `${className} ${cls}` : cls;
    }
  },
};

$.get = function (url, data) {
  const xhr = new XMLHttpRequest();
  let responseData = null;

  let doneCb = null;
  let failCb = null;
  let alwaysCb = null;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        responseData = xhr.responseText;
        doneCb && doneCb(responseData);
        alwaysCb && alwaysCb(responseData);
      } else {
        failCb && failCb();
        alwaysCb && alwaysCb();
      }
    }
  };
  xhr.open('GET', `${url}${objectToURLStr(data)}`);
  xhr.send();

  function done(cb) {
    doneCb = cb;
    return this;
  }

  function fail(cb) {
    failCb = cb;
    return this;
  }

  function always(cb) {
    alwaysCb = cb;
    return this;
  }

  return {
    done,
    fail,
    always,
  };
};

function objectToURLStr(obj) {
  let str = '';
  for (let field in obj) {
    const splitStr = str ? '&' : '?';
    str = `${str}${splitStr}${field}=${obj[field]}`;
  }
  return str;
}

$('p').addClass('ok');
$.get('http://api.jirengu.com/getWeather.php', {
  city: '北京',
})
  .done((data) => console.log(data))
  .fail(() => console.log('get data error'))
  .always(() => console.log('always'));
