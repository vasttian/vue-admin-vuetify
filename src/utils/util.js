/* eslint-disable */
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

export function simpleDeepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * forEach for object
 */
export function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function isPromise(val) {
  return val && typeof val.then === 'function'
}

export function assert(condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}


export function getValueByPath(object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;

  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }

    current = current[path];
  }

  return result;
};

export function sortby(array, sortKey, reverse, sortMethod) {
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  }

  if (!sortKey) {
    return array;
  }

  const order = (reverse && reverse < 0) ? -1 : 1;

  // sort on a copy to avoid mutating original array
  return array.slice().sort(sortMethod ? function (a, b) {
    return sortMethod(a, b) ? order : -order;
  } : function (a, b) {
    if (sortKey !== '$key') {
      if (isObject(a) && '$value' in a) a = a.$value;
      if (isObject(b) && '$value' in b) b = b.$value;
    }
    a = isObject(a) ? getValueByPath(a, sortKey) : a;
    b = isObject(b) ? getValueByPath(b, sortKey) : b;
    return a === b ? 0 : a > b ? order : -order;
  });
};

export function compare(a, b) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }

  if (typeof a === 'boolean' && typeof b === 'boolean') {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  }

  if (typeof a === 'number' && typeof b === 'string') {
    return -1;
  }

  if (typeof a === 'string' && typeof b === 'number') {
    return 1;
  }

  if (typeof a === 'object' && typeof b === 'string') {
    return -1;
  }

  if (typeof a === 'string' && typeof b === 'object') {
    return 1;
  }

  return 1;
};

export function isEmptyObject(e) {
  for (const t in e) {
    return !1;
  }

  return !0;
};

export function deepCompare() {
  var i, l, leftChain, rightChain;

  function compare2Objects(x, y) {
    var p;

    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
      return true;
    }

    // Compare primitives and functions.
    // Check if both arguments link to the same object.
    // Especially useful on the step where we compare prototypes
    if (x === y) {
      return true;
    }

    // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes
    if ((typeof x === 'function' && typeof y === 'function') ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof RegExp && y instanceof RegExp) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)) {
      return x.toString() === y.toString();
    }

    // At last checking prototypes as good as we can
    if (!(x instanceof Object && y instanceof Object)) {
      return false;
    }

    if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
      return false;
    }

    if (x.constructor !== y.constructor) {
      return false;
    }

    if (x.prototype !== y.prototype) {
      return false;
    }

    // Check for infinitive linking loops
    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
      return false;
    }

    // Quick checking of one object being a subset of another.
    // todo: cache the structure of arguments[0] for performance
    for (p in y) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }
    }

    for (p in x) {
      if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
        return false;
      } else if (typeof y[p] !== typeof x[p]) {
        return false;
      }

      switch (typeof (x[p])) {
        case 'object':
        case 'function':
          leftChain.push(x);
          rightChain.push(y);
          if (!compare2Objects(x[p], y[p])) {
            return false;
          }

          leftChain.pop();
          rightChain.pop();
          break;

        default:
          if (x[p] !== y[p]) {
            return false;
          }

          break;
      }
    }

    return true;
  }

  if (arguments.length < 1) {
    return true; // Die silently? Don't know how to handle such case, please help...
    // throw "Need two or more arguments to compare";
  }

  for (i = 1, l = arguments.length; i < l; i++) {
    leftChain = []; // Todo: this can be cached
    rightChain = [];

    if (!compare2Objects(arguments[0], arguments[i])) {
      return false;
    }
  }

  return true;
}

export function isFloat(oNum) {
  if (oNum === 0) {
    return true;
  }

  if (!oNum) {
    return false;
  }

  const strP = /^-?\d+(\.\d+)?$/;

  if (!strP.test(oNum)) {
    return false;
  }

  try {
    if (parseFloat(oNum) != oNum) {
      return false;
    }
  } catch (ex) {
    return false;
  }

  return true;
}

/**
 * 产生任意长度随机字母数字组合
 * @param  {boolean} randomFlag 是否任意长度
 * @param  {number}  min        任意长度最小位[固定位数]
 * @param  {number}  max        任意长度最大位
 * @return {string}             固定/随机长度字符串
 */
export function randomWord(randomFlag, min, max) {
  const arr = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];
  let range = min;
  let str = '';

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }

  for (let i = 0; i < range; i += 1) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }

  return str;
}

function random(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

/**
 * 生成随机密码
 * @return {[type]} [description]
 */
export function randomPassword() {
  const source = ['0123456789', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const pswLength = random(5, 7);
  let psw = '';

  for (let i = 0; i < pswLength; i += 1) {
    const item = source[random(0, 2)];
    psw += item.charAt(random(0, item.length - 1));
  }

  for (let j = 0; j < 3; j += 1) {
    const charac = source[j].charAt(random(0, source[j].length - 1));
    const randomSplit = random(0, source[j].length - 1);
    psw = [psw.slice(0, randomSplit), charac, psw.slice(randomSplit)].join('');
  }

  return psw;
}

/**
 * 解析 URL
 * @param  {[type]} ourl [description]
 * @return {[type]}      [description]
 */
export function parseURL(ourl) {
  if (!ourl) {
    return {};
  }

  const url = ourl.toString();
  const a = document.createElement('a');
  a.href = url;
  const ret = {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    origin: a.origin,
    port: a.port,
    query: a.search,
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^\/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
    segments: a.pathname.replace(/^\//, '').split('/'),
    params: (function () {
      const ret = {};
      const seg = a.search.replace(/^\?/, '').split('&').filter(function (v, i) {
        if (v !== '' && v.indexOf('=')) {
          return true;
        }
      });
      seg.forEach(function (element, index) {
        const idx = element.indexOf('=');
        const key = element.substring(0, idx);
        const val = element.substring(idx + 1);
        ret[key] = val;
      });
      return ret;
    })(),
  };

  // 覆盖origin, IE11中origin是空的
  if (!ret.origin) {
    ret.origin = [ret.protocol, '://', ret.host, ':', ret.port].join('');
  }

  // origin末尾加个/
  if (ret.origin && !/\/$/.test(ret.origin)) ret.origin += '/';
  return ret;
}

export function toUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

export function isMobile() {
  // return true;
  return !!navigator.userAgent.match(/mobile/i);
}

export function getDomain() {
  let s = window.location.pathname.split('/');

  // 第一个非空值作为domain
  for (let i = 0; i < s.length; i++) {
    if (s[i].trim()) return s[i].trim();
  }

  return '';
}

export function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {
    type: contentType
  });
  return blob;
}

export function addCommas(val) {
  if (val === '-') {
    return val;
  }

  let valStr = val.toString();
  let flag = false;

  if (valStr.slice(-1) === '%') {
    flag = true;
    valStr = valStr.slice(0, -1);
  }

  const aIntNum = valStr.split('.');

  aIntNum[0] = aIntNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  // if (aIntNum[0].length >= 5) {
  // }

  if (aIntNum[1] && aIntNum[1].length >= 5) {
    aIntNum[1] = aIntNum[1].replace(/(\d{3})/g, '$1 ');
  }

  return flag ? `${aIntNum.join('.')}%` : aIntNum.join('.');
}

export function sortObject(obj, order = 'asc') {
  const keys = Object.keys(obj)
  const sortedKeys = order === 'asc' ? keys.sort() : keys.reverse()
  return sortedKeys.reduce((val, key) => {
    const v = obj[key]
    if (isObject(v)) {
      val[key] = sortObject(v, order)
    } else if (Array.isArray(v)) {
      val[key] = order === 'asc' ? v.sort() : v.reverse()
    } else {
      val[key] = v
    }
    return val
  }, {})
}

/**
 * 字符串的首字母大写
 */
export function fistLetterUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 字符串的首字母小写
 */
export function fistLowerUpper(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * 当前时间
 */
export function currentTimeStr() {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false
  });
}

/**
 * 判断是否是 IE 浏览器
 * @return {Boolean} [description]
 */
export function isIE() {
  return !!window.ActiveXObject || 'ActiveXObject' in window;
}

/**
 * 阻止浏览器的冒泡行为
 * @param {*} e
 */
export function stopBubble(e) {
  e = e || window.event;
  e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
}

/**
 * 阻止浏览器的默认行为
 * @param {*} e
 */
export function stopDefault(e) {
  e = e || window.event;
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

/**
 * smooth scroll to
 * Smoothly scroll element to the given target (element.scrollTop) for the given duration
 * Returns a promise that's fulfilled when done, or rejected if interrupted
 * @param {DOMel} element
 * @param {String} target
 * @param {Number} duration
 */
export function smoothScrollTo(element, target, duration) {
  target = Math.round(target);
  duration = Math.round(duration);
  if (duration < 0) {
    return Promise.reject("bad duration");
  }

  if (duration === 0) {
    element.scrollTop = target;
    return Promise.resolve();
  }

  const start_time = Date.now();
  const end_time = start_time + duration;

  const start_top = element.scrollTop;
  const distance = target - start_top;

  // based on http://en.wikipedia.org/wiki/Smoothstep
  const smooth_step = function (start, end, point) {
    if (point <= start) {
      return 0;
    }

    if (point >= end) {
      return 1;
    }

    const x = (point - start) / (end - start); // interpolation
    return x * x * (3 - 2 * x);
  }

  return new Promise(function (resolve, reject) {
    // This is to keep track of where the element's scrollTop is
    // supposed to be, based on what we're doing
    let previous_top = element.scrollTop;

    // This is like a think function from a game loop
    const scroll_frame = function () {
      if (element.scrollTop != previous_top) {
        reject("interrupted");
        return;
      }

      // set the scrollTop for this frame
      const now = Date.now();
      const point = smooth_step(start_time, end_time, now);
      const frameTop = Math.round(start_top + (distance * point));
      element.scrollTop = frameTop;

      // check if we're done!
      if (now >= end_time) {
        resolve();
        return;
      }

      // If we were supposed to scroll but didn't, then we
      // probably hit the limit, so consider it done; not
      // interrupted.
      if (element.scrollTop === previous_top &&
        element.scrollTop !== frameTop) {
        resolve();
        return;
      }

      previous_top = element.scrollTop;

      // schedule next frame for execution
      setTimeout(scroll_frame, 0);
    }

    // bootstrap the animation process
    setTimeout(scroll_frame, 0);
  });
}
