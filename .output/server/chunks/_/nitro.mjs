import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http from 'node:http';
import https from 'node:https';
import { promises, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1, join } from 'node:path';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class WordArray {
  constructor(words, sigBytes) {
    __publicField$1(this, "words");
    __publicField$1(this, "sigBytes");
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    __publicField$1(this, "_data", new WordArray());
    __publicField$1(this, "_nDataBytes", 0);
    __publicField$1(this, "_minBufferSize", 0);
    __publicField$1(this, "blockSize", 512 / 32);
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => {
  __defNormalProp$3(obj, key + "" , value);
  return value;
};
const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    __publicField$3(this, "_hash", new WordArray([...H]));
  }
  /**
   * Resets the internal state of the hash object to initial values.
   */
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  /**
   * Finishes the hash calculation and returns the hash as a WordArray.
   *
   * @param {string} messageUpdate - Additional message content to include in the hash.
   * @returns {WordArray} The finalised hash as a WordArray.
   */
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    // Hooks
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch$1({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch$1({ fetch, Headers: Headers$1, AbortController });
const $fetch = ofetch;

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.unhandled || error.fatal) ? [] : (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('./error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const plugins = [
  
];

const assets$1 = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-rG+rDyytg3+JbFKnTJ7nP2STbsk\"",
    "mtime": "2026-01-23T17:50:54.047Z",
    "size": 15406,
    "path": "../public/favicon.ico"
  },
  "/assets/logo.png": {
    "type": "image/png",
    "etag": "\"56fee-oclL21araDY6/Jz0kCry5XhR4jk\"",
    "mtime": "2026-01-23T17:50:53.803Z",
    "size": 356334,
    "path": "../public/assets/logo.png"
  },
  "/assets/logo.webp": {
    "type": "image/webp",
    "etag": "\"5d2e-UY+ElCjBuuex8aZQSjRI1/bk13U\"",
    "mtime": "2026-01-23T17:50:53.804Z",
    "size": 23854,
    "path": "../public/assets/logo.webp"
  },
  "/_nuxt/0FfuXkNT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"538-/u92+GktzYkNzC+5AY77i1dwITs\"",
    "mtime": "2026-01-27T14:05:21.826Z",
    "size": 1336,
    "path": "../public/_nuxt/0FfuXkNT.js"
  },
  "/_nuxt/78ofS5wm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-PN12TTaWb+g3oxBjyNyKoHwEdR0\"",
    "mtime": "2026-01-27T14:05:22.053Z",
    "size": 181,
    "path": "../public/_nuxt/78ofS5wm.js"
  },
  "/_nuxt/8K9OM8o1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"225e-+dZWnSEQAFkiVGzQgkPwLuFKxOA\"",
    "mtime": "2026-01-27T14:05:21.755Z",
    "size": 8798,
    "path": "../public/_nuxt/8K9OM8o1.js"
  },
  "/_nuxt/8W2l5zHs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"140-lOJlY/1XTWV5uIJKX/icCYq11vs\"",
    "mtime": "2026-01-27T14:05:22.264Z",
    "size": 320,
    "path": "../public/_nuxt/8W2l5zHs.js"
  },
  "/_nuxt/all4access.DTCF8vYd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a5-Rfj5L791467BjCGnaxns5DyGTqw\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 421,
    "path": "../public/_nuxt/all4access.DTCF8vYd.css"
  },
  "/_nuxt/all4voicing-lite.BRFH5V4c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"376-I/30rRoPhSi8wNtOnlHVXhwV47A\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 886,
    "path": "../public/_nuxt/all4voicing-lite.BRFH5V4c.css"
  },
  "/_nuxt/ArticleCard.DDWt5Tea.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"40e-NOVtJWcfDrsaYJ2Zj5LOYwLyzho\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 1038,
    "path": "../public/_nuxt/ArticleCard.DDWt5Tea.css"
  },
  "/_nuxt/audio-description.Bs2Sov80.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d0-MlydpUzHbEuHneH9ytRIQyuJdJ8\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 464,
    "path": "../public/_nuxt/audio-description.Bs2Sov80.css"
  },
  "/_nuxt/B1dqnZyG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cec-+QhyDXuIvS6qwxhA704gDGwcsIA\"",
    "mtime": "2026-01-27T14:05:21.716Z",
    "size": 3308,
    "path": "../public/_nuxt/B1dqnZyG.js"
  },
  "/_nuxt/BAnZIRC2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"34e33-R/EHDrB6YdYVWSmK4FbiTXCsmy4\"",
    "mtime": "2026-01-27T14:05:21.652Z",
    "size": 216627,
    "path": "../public/_nuxt/BAnZIRC2.js"
  },
  "/_nuxt/Bbr9hpKJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e4-TOqXLFknZ6cJ86YnQTiIDSOrUws\"",
    "mtime": "2026-01-27T14:05:22.220Z",
    "size": 228,
    "path": "../public/_nuxt/Bbr9hpKJ.js"
  },
  "/_nuxt/BdBVFdDT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6d-us2lfulfQ05xWzOzw55KFyrcu6c\"",
    "mtime": "2026-01-27T14:05:21.868Z",
    "size": 109,
    "path": "../public/_nuxt/BdBVFdDT.js"
  },
  "/_nuxt/BE5Dt6S7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3db-qeFxdUsNp4bzAtI+uabUPcaBY18\"",
    "mtime": "2026-01-27T14:05:21.831Z",
    "size": 987,
    "path": "../public/_nuxt/BE5Dt6S7.js"
  },
  "/_nuxt/Bfh8JNes.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-2GzolnATgNqy8wmiUFBQwl2+8sc\"",
    "mtime": "2026-01-27T14:05:22.078Z",
    "size": 181,
    "path": "../public/_nuxt/Bfh8JNes.js"
  },
  "/_nuxt/BGyxXz2l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"80d-Jomd63hls9yHtKxlqbTs6svxVRE\"",
    "mtime": "2026-01-27T14:05:21.737Z",
    "size": 2061,
    "path": "../public/_nuxt/BGyxXz2l.js"
  },
  "/_nuxt/BHq5iVKt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8ec-VcRlNv2gfo9MlTRaekmp7RwFeRk\"",
    "mtime": "2026-01-27T14:05:21.879Z",
    "size": 2284,
    "path": "../public/_nuxt/BHq5iVKt.js"
  },
  "/_nuxt/BhSIT9q5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e21-ARSES/Wg6cy1dsCuJtlWdI8BGws\"",
    "mtime": "2026-01-27T14:05:21.651Z",
    "size": 3617,
    "path": "../public/_nuxt/BhSIT9q5.js"
  },
  "/_nuxt/BIBqpKuL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"46a-Td7DQS8IEIk+Ir4nzgynXJJE/mc\"",
    "mtime": "2026-01-27T14:05:21.724Z",
    "size": 1130,
    "path": "../public/_nuxt/BIBqpKuL.js"
  },
  "/_nuxt/Bjma6czR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b0-VYj4c7mvMaV0aXCtH65HfoMIo4g\"",
    "mtime": "2026-01-27T14:05:22.220Z",
    "size": 176,
    "path": "../public/_nuxt/Bjma6czR.js"
  },
  "/_nuxt/BKX2qdct.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"475-TlDXl8gun1yIqQOt0xajAkKSe+8\"",
    "mtime": "2026-01-27T14:05:21.829Z",
    "size": 1141,
    "path": "../public/_nuxt/BKX2qdct.js"
  },
  "/_nuxt/BMvA7qR_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9c-t5O/Jq2IBEmhrAqFBOSB/iRGAQ4\"",
    "mtime": "2026-01-27T14:05:21.752Z",
    "size": 156,
    "path": "../public/_nuxt/BMvA7qR_.js"
  },
  "/_nuxt/BsTcwms3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"715-4qUOxLeLFM427fMO25mNABxcL7o\"",
    "mtime": "2026-01-27T14:05:21.717Z",
    "size": 1813,
    "path": "../public/_nuxt/BsTcwms3.js"
  },
  "/_nuxt/BwYTUdO6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c8e-R5U+9gY59RCMNji60RoDNYKFSNc\"",
    "mtime": "2026-01-27T14:05:21.717Z",
    "size": 3214,
    "path": "../public/_nuxt/BwYTUdO6.js"
  },
  "/_nuxt/BXLJg6wN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5f91-d8EY8u353QX7Wg6zZmvZ3UBEl6I\"",
    "mtime": "2026-01-27T14:05:21.846Z",
    "size": 24465,
    "path": "../public/_nuxt/BXLJg6wN.js"
  },
  "/_nuxt/C-KFKTGt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33b-ZcOrOab8WXmchJ7nELWgRTbtk/I\"",
    "mtime": "2026-01-27T14:05:21.829Z",
    "size": 827,
    "path": "../public/_nuxt/C-KFKTGt.js"
  },
  "/_nuxt/C29nR5m5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b9-GJD7Pzxd9YHxUJBDwqX+GOTnMRg\"",
    "mtime": "2026-01-27T14:05:22.082Z",
    "size": 185,
    "path": "../public/_nuxt/C29nR5m5.js"
  },
  "/_nuxt/C2rmhs-i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-mhyKJ8KlS1YLusANxnmM6fc1boI\"",
    "mtime": "2026-01-27T14:05:22.262Z",
    "size": 181,
    "path": "../public/_nuxt/C2rmhs-i.js"
  },
  "/_nuxt/C9j5Gh91.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"726-y3DP5UJhwvi6AWw5I2zYRN7UaRQ\"",
    "mtime": "2026-01-27T14:05:21.859Z",
    "size": 1830,
    "path": "../public/_nuxt/C9j5Gh91.js"
  },
  "/_nuxt/captioning.DB9C4WTt.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"223-59SYrGn0ifkpThaBB0FAKwVrknc\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 547,
    "path": "../public/_nuxt/captioning.DB9C4WTt.css"
  },
  "/_nuxt/case-studies.BJ2gTHN3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d6-Ehht+QNvbYQW7rOuBKC0toWfia8\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 726,
    "path": "../public/_nuxt/case-studies.BJ2gTHN3.css"
  },
  "/_nuxt/case-study-article.rew22zk4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"354-RlBLTlyAShWBVb6ECYlrFCZ15BE\"",
    "mtime": "2026-01-27T14:05:21.641Z",
    "size": 852,
    "path": "../public/_nuxt/case-study-article.rew22zk4.css"
  },
  "/_nuxt/CAUlSMAI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"47f7-uCkIfGVdWKy9P9RC/7A520hoeL0\"",
    "mtime": "2026-01-27T14:05:21.753Z",
    "size": 18423,
    "path": "../public/_nuxt/CAUlSMAI.js"
  },
  "/_nuxt/CbCIGckP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bc0-yvH6Hp5ra2bDMZGQxFxGKHomEcw\"",
    "mtime": "2026-01-27T14:05:22.021Z",
    "size": 7104,
    "path": "../public/_nuxt/CbCIGckP.js"
  },
  "/_nuxt/CGJe2H7U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ed9-YG9ynIGV4jfym80ZFBVMsIO80AQ\"",
    "mtime": "2026-01-27T14:05:21.868Z",
    "size": 3801,
    "path": "../public/_nuxt/CGJe2H7U.js"
  },
  "/_nuxt/CGYW6dQL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"187-B18rFSJB6HmrklXbGJ0NnhyxC2U\"",
    "mtime": "2026-01-27T14:05:21.925Z",
    "size": 391,
    "path": "../public/_nuxt/CGYW6dQL.js"
  },
  "/_nuxt/CHtqQnz4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"755-eyLU/tGBkh/XwRs8Zn9+7UO9fbg\"",
    "mtime": "2026-01-27T14:05:21.717Z",
    "size": 1877,
    "path": "../public/_nuxt/CHtqQnz4.js"
  },
  "/_nuxt/CJpTl_Ft.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1528-RtmtRlcTWr67aVL1vqoYz07LqMA\"",
    "mtime": "2026-01-27T14:05:21.717Z",
    "size": 5416,
    "path": "../public/_nuxt/CJpTl_Ft.js"
  },
  "/_nuxt/CkEn40tg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"129-CwI5QqJvhqsi0yJ7WR2KstjNWto\"",
    "mtime": "2026-01-27T14:05:22.021Z",
    "size": 297,
    "path": "../public/_nuxt/CkEn40tg.js"
  },
  "/_nuxt/CmGsslhI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"99-9lFciwxKj/IrKn1lARnd4E2RgMM\"",
    "mtime": "2026-01-27T14:05:21.660Z",
    "size": 153,
    "path": "../public/_nuxt/CmGsslhI.js"
  },
  "/_nuxt/CofZ32pa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8-/Clh4i33E0rO+M4L9ZwFDYBH/NQ\"",
    "mtime": "2026-01-27T14:05:22.054Z",
    "size": 184,
    "path": "../public/_nuxt/CofZ32pa.js"
  },
  "/_nuxt/COic8KYV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"59f-tC75jOI/kr5YXue5ZwYiKtEl+pQ\"",
    "mtime": "2026-01-27T14:05:21.736Z",
    "size": 1439,
    "path": "../public/_nuxt/COic8KYV.js"
  },
  "/_nuxt/consulting.DG5YVFYn.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1af-+LrAwkaVBOt2shuEOcbRWij0cTk\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 431,
    "path": "../public/_nuxt/consulting.DG5YVFYn.css"
  },
  "/_nuxt/contact-us.BQFdQf4n.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"699-c/3z22wnpk7uj6JS7tKSNIocXLA\"",
    "mtime": "2026-01-27T14:05:21.559Z",
    "size": 1689,
    "path": "../public/_nuxt/contact-us.BQFdQf4n.css"
  },
  "/_nuxt/CrPV4T31.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-nmUR29MelC9ZA7UxbaJMk0P8pSQ\"",
    "mtime": "2026-01-27T14:05:22.054Z",
    "size": 181,
    "path": "../public/_nuxt/CrPV4T31.js"
  },
  "/_nuxt/Cs3ZvtcQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8539-H3fW+VwfbuYef8+GbF0ANy4O91c\"",
    "mtime": "2026-01-27T14:05:21.829Z",
    "size": 34105,
    "path": "../public/_nuxt/Cs3ZvtcQ.js"
  },
  "/_nuxt/CTnW7aTZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b4-zNSCg0Oima92ztmxEX2ObgF5c3I\"",
    "mtime": "2026-01-27T14:05:22.034Z",
    "size": 180,
    "path": "../public/_nuxt/CTnW7aTZ.js"
  },
  "/_nuxt/CvPsDBTO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"da6-4jFy1sQkMW4lNIIylfbbEyACqRo\"",
    "mtime": "2026-01-27T14:05:21.879Z",
    "size": 3494,
    "path": "../public/_nuxt/CvPsDBTO.js"
  },
  "/_nuxt/CWzzemBs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bd0-ROXgp3PT5fFMVYedcZ9o0fIUbHQ\"",
    "mtime": "2026-01-27T14:05:21.716Z",
    "size": 11216,
    "path": "../public/_nuxt/CWzzemBs.js"
  },
  "/_nuxt/CxhcdM7b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f26-i0+BwQI6jxA3Hbmdc1ToFg38WP4\"",
    "mtime": "2026-01-27T14:05:22.021Z",
    "size": 3878,
    "path": "../public/_nuxt/CxhcdM7b.js"
  },
  "/_nuxt/CyJce57w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"59-870qQGPkCFIVlKeRYfmp1coIfc8\"",
    "mtime": "2026-01-27T14:05:21.755Z",
    "size": 89,
    "path": "../public/_nuxt/CyJce57w.js"
  },
  "/_nuxt/CyURY_L0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-/m5QW4sN+3VOS6EJTXZnBcAjnCU\"",
    "mtime": "2026-01-27T14:05:22.068Z",
    "size": 181,
    "path": "../public/_nuxt/CyURY_L0.js"
  },
  "/_nuxt/D27_Nt-w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9c-mdI6MAItast/w5KGw3mOhHYtzU4\"",
    "mtime": "2026-01-27T14:05:21.879Z",
    "size": 156,
    "path": "../public/_nuxt/D27_Nt-w.js"
  },
  "/_nuxt/D4kAAOiL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"120f-1sJH5sn1lWh0vma2apSEuGEa7y8\"",
    "mtime": "2026-01-27T14:05:21.830Z",
    "size": 4623,
    "path": "../public/_nuxt/D4kAAOiL.js"
  },
  "/_nuxt/D5y124ud.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-obOSOrGOoUhFIlhp3r2o0Xp6eoM\"",
    "mtime": "2026-01-27T14:05:22.195Z",
    "size": 181,
    "path": "../public/_nuxt/D5y124ud.js"
  },
  "/_nuxt/DBzdA5KT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18a-myAg6sKoQxMmxe6da9sot7vsakg\"",
    "mtime": "2026-01-27T14:05:21.962Z",
    "size": 394,
    "path": "../public/_nuxt/DBzdA5KT.js"
  },
  "/_nuxt/default.CRqElL5d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"70-zaCP4uOc6utJ9toT2LznJhxW6S0\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 112,
    "path": "../public/_nuxt/default.CRqElL5d.css"
  },
  "/_nuxt/Dg8y_IXK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"28c-ANPuXPfGvXCyT99nRrA3p9SyldM\"",
    "mtime": "2026-01-27T14:05:21.835Z",
    "size": 652,
    "path": "../public/_nuxt/Dg8y_IXK.js"
  },
  "/_nuxt/DHdUATm7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"98-FCcT2RVLs6KdUn5mFu4wuaWy49E\"",
    "mtime": "2026-01-27T14:05:21.716Z",
    "size": 152,
    "path": "../public/_nuxt/DHdUATm7.js"
  },
  "/_nuxt/DHf1EQt_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"af-loRMZm+wHJBntGFsKLrtkrj1vdM\"",
    "mtime": "2026-01-27T14:05:22.246Z",
    "size": 175,
    "path": "../public/_nuxt/DHf1EQt_.js"
  },
  "/_nuxt/DHMh_ruB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4c9-twd8JCNTCR1CSFCWucNcVX5Q5TA\"",
    "mtime": "2026-01-27T14:05:22.021Z",
    "size": 1225,
    "path": "../public/_nuxt/DHMh_ruB.js"
  },
  "/_nuxt/DM7Lh97Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"165b-UUlK74UaJNYA99HVOX3XMVioqdE\"",
    "mtime": "2026-01-27T14:05:21.710Z",
    "size": 5723,
    "path": "../public/_nuxt/DM7Lh97Z.js"
  },
  "/_nuxt/DNKHpXC3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-ExzBsR7JF26I+tt9WEgor/sIE98\"",
    "mtime": "2026-01-27T14:05:22.264Z",
    "size": 181,
    "path": "../public/_nuxt/DNKHpXC3.js"
  },
  "/_nuxt/DODUaZxX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a4f-iyOMbo7Z9vH+w2O/xB0OsFaE2+k\"",
    "mtime": "2026-01-27T14:05:21.710Z",
    "size": 10831,
    "path": "../public/_nuxt/DODUaZxX.js"
  },
  "/_nuxt/DqrZ7urC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bba-A7CVWEXCKc1SOT4Y1D3vSDs1dsg\"",
    "mtime": "2026-01-27T14:05:22.021Z",
    "size": 3002,
    "path": "../public/_nuxt/DqrZ7urC.js"
  },
  "/_nuxt/DRtf66dh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-NupjQpSCbnwvYEMq1YuGm7D6GlE\"",
    "mtime": "2026-01-27T14:05:22.078Z",
    "size": 181,
    "path": "../public/_nuxt/DRtf66dh.js"
  },
  "/_nuxt/DU8jEndg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-9HhJoSCB9HoROgQ7MwtVnD4OXLo\"",
    "mtime": "2026-01-27T14:05:22.067Z",
    "size": 181,
    "path": "../public/_nuxt/DU8jEndg.js"
  },
  "/_nuxt/Dy3zXaZS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1518-k0jEDAQZ8LFIlixmDfsJyvn5188\"",
    "mtime": "2026-01-27T14:05:21.736Z",
    "size": 5400,
    "path": "../public/_nuxt/Dy3zXaZS.js"
  },
  "/_nuxt/DYasLQYY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9d-nMzsHGpVdPmqwmjVTYhB9b4ctfA\"",
    "mtime": "2026-01-27T14:05:21.830Z",
    "size": 157,
    "path": "../public/_nuxt/DYasLQYY.js"
  },
  "/_nuxt/DyGDvHoe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"667-DFRXUugG8tE3yhCK1UtCnkgmyTg\"",
    "mtime": "2026-01-27T14:05:22.021Z",
    "size": 1639,
    "path": "../public/_nuxt/DyGDvHoe.js"
  },
  "/_nuxt/entry.BXvAOWsM.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15d7-qMIISeODAcccR5oTpg1XANVSKas\"",
    "mtime": "2026-01-27T14:05:20.862Z",
    "size": 5591,
    "path": "../public/_nuxt/entry.BXvAOWsM.css"
  },
  "/_nuxt/fJ9XiZzW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4e-ddMOwr4KAc3Zm43xRt8h7x+ZlLw\"",
    "mtime": "2026-01-27T14:05:22.246Z",
    "size": 78,
    "path": "../public/_nuxt/fJ9XiZzW.js"
  },
  "/_nuxt/G1PNlqFk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b6-yO1vl94xJSHvoxxJla9m2G+Lj7g\"",
    "mtime": "2026-01-27T14:05:22.034Z",
    "size": 182,
    "path": "../public/_nuxt/G1PNlqFk.js"
  },
  "/_nuxt/GenericCard.Cnnd4uL_.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"338-KjYJON/7lIkI2wJSudli1DOc4HY\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 824,
    "path": "../public/_nuxt/GenericCard.Cnnd4uL_.css"
  },
  "/_nuxt/index.CBKG_qLg.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2429-pAhA8m823FyVwpYuF7gS/JBZARE\"",
    "mtime": "2026-01-27T14:05:21.558Z",
    "size": 9257,
    "path": "../public/_nuxt/index.CBKG_qLg.css"
  },
  "/_nuxt/index.CMgUUyPI.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"260-WfwkOoI0M44BjFNqaGZJSa0t5po\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 608,
    "path": "../public/_nuxt/index.CMgUUyPI.css"
  },
  "/_nuxt/index.DkaBrE2q.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"764-okfug6XmAnLTMaOIwxJlO3arinE\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 1892,
    "path": "../public/_nuxt/index.DkaBrE2q.css"
  },
  "/_nuxt/index.DqeisaHX.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ad-gzeuDPBMiqHeQFLhOl83z/UaSms\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 685,
    "path": "../public/_nuxt/index.DqeisaHX.css"
  },
  "/_nuxt/index.q9jkNqfN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e8-maeoiSRlElU3/ueLUoQnz3OHBZA\"",
    "mtime": "2026-01-27T14:05:21.641Z",
    "size": 488,
    "path": "../public/_nuxt/index.q9jkNqfN.css"
  },
  "/_nuxt/KNrs7nZb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"60-0OcCad/jknHdPG/Wj0HqqZlCdMs\"",
    "mtime": "2026-01-27T14:05:21.830Z",
    "size": 96,
    "path": "../public/_nuxt/KNrs7nZb.js"
  },
  "/_nuxt/media-production.BeHjv1yG.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ad-UGktM0qAZjcvEUpjLJ98uLSBTNk\"",
    "mtime": "2026-01-27T14:05:21.654Z",
    "size": 685,
    "path": "../public/_nuxt/media-production.BeHjv1yG.css"
  },
  "/_nuxt/mission.BDNGB6Yc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"289-OZHW4FcZ4Rt9zIlHv1a3AZAgrgs\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 649,
    "path": "../public/_nuxt/mission.BDNGB6Yc.css"
  },
  "/_nuxt/multilingual-dubbing.Dbivfcgs.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"193-1vH1Lv+Ac6n6xQ0vj5Ga6+OIk3U\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 403,
    "path": "../public/_nuxt/multilingual-dubbing.Dbivfcgs.css"
  },
  "/_nuxt/newsletters.DVX3g37I.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c8-+U/MyGwtnbFEWav2MxxBq6fuJCU\"",
    "mtime": "2026-01-27T14:05:21.443Z",
    "size": 968,
    "path": "../public/_nuxt/newsletters.DVX3g37I.css"
  },
  "/_nuxt/NlRLsKjE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21a-4NqIUt/71ZCzg4xOJ/9BY8vDNXw\"",
    "mtime": "2026-01-27T14:05:21.830Z",
    "size": 538,
    "path": "../public/_nuxt/NlRLsKjE.js"
  },
  "/_nuxt/Ok2QKn2n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e7e-XW3vuwoFiabs21KZPyXW485EcP4\"",
    "mtime": "2026-01-27T14:05:21.909Z",
    "size": 3710,
    "path": "../public/_nuxt/Ok2QKn2n.js"
  },
  "/_nuxt/our-partners.uuou27hz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2fd-4/1nEmlUpGpESm2LF3+XvAY7Hho\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 765,
    "path": "../public/_nuxt/our-partners.uuou27hz.css"
  },
  "/_nuxt/Paginator.BQ1-v7m5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"21d-wxf82/zjyGRY93kp9+uU3o8+ZNA\"",
    "mtime": "2026-01-27T14:05:21.561Z",
    "size": 541,
    "path": "../public/_nuxt/Paginator.BQ1-v7m5.css"
  },
  "/_nuxt/press.BqAImWCx.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d5-QKayShEIgibwDoY5ynpdB5W09Q0\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 469,
    "path": "../public/_nuxt/press.BqAImWCx.css"
  },
  "/_nuxt/previous-projects.CuqxcJY8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4dd-jPIC1dQCu2rQFK/GfaQI1g/fShU\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 1245,
    "path": "../public/_nuxt/previous-projects.CuqxcJY8.css"
  },
  "/_nuxt/privacy-policy.Cu0xF7sg.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ef-DcchpVR2vvSltkDGuHSO4pfW4D8\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 495,
    "path": "../public/_nuxt/privacy-policy.Cu0xF7sg.css"
  },
  "/_nuxt/QvV8H1Du.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3471-NDDixIZXYGMahODBgNo2GGvVapc\"",
    "mtime": "2026-01-27T14:05:21.717Z",
    "size": 13425,
    "path": "../public/_nuxt/QvV8H1Du.js"
  },
  "/_nuxt/R46160Au.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1837-g7maq2FnpiwXNTGke+McgS4xCEQ\"",
    "mtime": "2026-01-27T14:05:21.677Z",
    "size": 6199,
    "path": "../public/_nuxt/R46160Au.js"
  },
  "/_nuxt/rHWOHycB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"584-uD8uqUDvn53yOadBD1IXOeQDJUI\"",
    "mtime": "2026-01-27T14:05:21.829Z",
    "size": 1412,
    "path": "../public/_nuxt/rHWOHycB.js"
  },
  "/_nuxt/RowWithIconsAndText.rX9hsFuk.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"399-eQZjlzYSOddGwZ5kJoRACVi7Z68\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 921,
    "path": "../public/_nuxt/RowWithIconsAndText.rX9hsFuk.css"
  },
  "/_nuxt/terms-and-conditions.BDa_oOT5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"236-1qt+A1JHHPgKqU0RYSv5ce3GojM\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 566,
    "path": "../public/_nuxt/terms-and-conditions.BDa_oOT5.css"
  },
  "/_nuxt/tv-movie-access.Cf8Ty_ei.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ee0-xWJS9VmIqMAhG8g4XSs7dbpvCH4\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 3808,
    "path": "../public/_nuxt/tv-movie-access.Cf8Ty_ei.css"
  },
  "/_nuxt/TwoColumns.PHwk8cdd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"279-Sy34YTBlO+FX/vOdAOlEeuVDaHE\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 633,
    "path": "../public/_nuxt/TwoColumns.PHwk8cdd.css"
  },
  "/_nuxt/TwoColumnTextAndImage.Du87tGkz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"557-ejhEz64vR/38+Do9hVMy54DX968\"",
    "mtime": "2026-01-27T14:05:21.558Z",
    "size": 1367,
    "path": "../public/_nuxt/TwoColumnTextAndImage.Du87tGkz.css"
  },
  "/_nuxt/uhCx6AhG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b2-HDPoySMD8G4NY1+nW7bxlsEtK+o\"",
    "mtime": "2026-01-27T14:05:22.121Z",
    "size": 178,
    "path": "../public/_nuxt/uhCx6AhG.js"
  },
  "/_nuxt/vKkRfU2v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e30-SX40D0wVlH4mReViEoOqJSSWCAM\"",
    "mtime": "2026-01-27T14:05:21.724Z",
    "size": 3632,
    "path": "../public/_nuxt/vKkRfU2v.js"
  },
  "/_nuxt/white-paper-article.BwuEY0y1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"57b-psJ0TT4ui1WZa+C46MLqNK0I3tk\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 1403,
    "path": "../public/_nuxt/white-paper-article.BwuEY0y1.css"
  },
  "/_nuxt/white-papers.C_51rWsd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d6-NQuH41MI2L9Navg+QzmqzO+unlU\"",
    "mtime": "2026-01-27T14:05:21.643Z",
    "size": 726,
    "path": "../public/_nuxt/white-papers.C_51rWsd.css"
  },
  "/_nuxt/x-4Q-xfc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2cb-JWiVvlTcSZv5/O0UMOq1Rm8MQzA\"",
    "mtime": "2026-01-27T14:05:21.768Z",
    "size": 715,
    "path": "../public/_nuxt/x-4Q-xfc.js"
  },
  "/_nuxt/zLg7XNpX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b6-EUzCSVl3oUdrxgMpPek8msPKG34\"",
    "mtime": "2026-01-27T14:05:22.220Z",
    "size": 182,
    "path": "../public/_nuxt/zLg7XNpX.js"
  },
  "/_nuxt/_id_.BW25KOGt.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f4-pYQ1q939lp7tKmBhwoH3GmOr7so\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 500,
    "path": "../public/_nuxt/_id_.BW25KOGt.css"
  },
  "/_nuxt/_id_.CUy5jFlW.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"504-1P9MgWa/1wWVMV89ic3+Ytrz1zA\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 1284,
    "path": "../public/_nuxt/_id_.CUy5jFlW.css"
  },
  "/_nuxt/_id_.CyNybeCz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2a7-Js+rMvDrRvSuINZlt2kqL/22nIA\"",
    "mtime": "2026-01-27T14:05:21.444Z",
    "size": 679,
    "path": "../public/_nuxt/_id_.CyNybeCz.css"
  },
  "/_nuxt/_id_.DmlWDoOf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"191-BTl5DQvKLEiqJ8SuKoeHFElrHfw\"",
    "mtime": "2026-01-27T14:05:21.642Z",
    "size": 401,
    "path": "../public/_nuxt/_id_.DmlWDoOf.css"
  },
  "/assets/fonts/hind-v16-latin-500.woff2": {
    "type": "font/woff2",
    "etag": "\"4194-l4w9UkzGqBFNEfeLYpK1jGnLhjI\"",
    "mtime": "2026-01-23T17:50:53.585Z",
    "size": 16788,
    "path": "../public/assets/fonts/hind-v16-latin-500.woff2"
  },
  "/assets/fonts/hind-v16-latin-600.woff2": {
    "type": "font/woff2",
    "etag": "\"40e4-U1A+OMbBOi0MshiexWUntTQONnM\"",
    "mtime": "2026-01-23T17:50:53.588Z",
    "size": 16612,
    "path": "../public/assets/fonts/hind-v16-latin-600.woff2"
  },
  "/assets/fonts/hind-v16-latin-regular.woff2": {
    "type": "font/woff2",
    "etag": "\"3f58-8FH0ggYdxI0JwyjEVFndBNtbVUc\"",
    "mtime": "2026-01-23T17:50:53.590Z",
    "size": 16216,
    "path": "../public/assets/fonts/hind-v16-latin-regular.woff2"
  },
  "/assets/fonts/montserrat-v29-latin-500.woff2": {
    "type": "font/woff2",
    "etag": "\"4934-nNhb/QuylOA4IkCXbJPga/4gjYw\"",
    "mtime": "2026-01-23T17:50:53.590Z",
    "size": 18740,
    "path": "../public/assets/fonts/montserrat-v29-latin-500.woff2"
  },
  "/assets/fonts/montserrat-v29-latin-500italic.woff2": {
    "type": "font/woff2",
    "etag": "\"4b90-ii4e1udFaDv9G+Q+y1f3o2lgxxk\"",
    "mtime": "2026-01-23T17:50:53.591Z",
    "size": 19344,
    "path": "../public/assets/fonts/montserrat-v29-latin-500italic.woff2"
  },
  "/assets/fonts/montserrat-v29-latin-600.woff2": {
    "type": "font/woff2",
    "etag": "\"48fc-FO+L+Ps8R9zMk8rxf1c8gsFIciA\"",
    "mtime": "2026-01-23T17:50:53.592Z",
    "size": 18684,
    "path": "../public/assets/fonts/montserrat-v29-latin-600.woff2"
  },
  "/assets/fonts/montserrat-v29-latin-regular.woff2": {
    "type": "font/woff2",
    "etag": "\"4968-cDD08zGDuN6EPoLu25y2ps3RB8M\"",
    "mtime": "2026-01-23T17:50:53.593Z",
    "size": 18792,
    "path": "../public/assets/fonts/montserrat-v29-latin-regular.woff2"
  },
  "/assets/images/a4a-black.webp": {
    "type": "image/webp",
    "etag": "\"dbc-nARgJhKbR/dTMuSYQYUzwtMXq4E\"",
    "mtime": "2026-01-23T17:50:53.596Z",
    "size": 3516,
    "path": "../public/assets/images/a4a-black.webp"
  },
  "/assets/images/a4a-white.webp": {
    "type": "image/webp",
    "etag": "\"9c0-btqvdtTy/hnd5qzTrwHJPwveYu0\"",
    "mtime": "2026-01-23T17:50:53.597Z",
    "size": 2496,
    "path": "../public/assets/images/a4a-white.webp"
  },
  "/assets/images/access4all-feeling-through.webp": {
    "type": "image/webp",
    "etag": "\"4d5e-5+AW9sSe2w9yh1dkrv8oJ3n426Q\"",
    "mtime": "2026-01-23T17:50:53.597Z",
    "size": 19806,
    "path": "../public/assets/images/access4all-feeling-through.webp"
  },
  "/assets/images/ad-black.webp": {
    "type": "image/webp",
    "etag": "\"960-KHokkm23lxFwvP84fkQTcHpulxM\"",
    "mtime": "2026-01-23T17:50:53.598Z",
    "size": 2400,
    "path": "../public/assets/images/ad-black.webp"
  },
  "/assets/images/ad-white.webp": {
    "type": "image/webp",
    "etag": "\"612-RmBpX5d/kL32+XN4cWl/NdnsC8I\"",
    "mtime": "2026-01-23T17:50:53.599Z",
    "size": 1554,
    "path": "../public/assets/images/ad-white.webp"
  },
  "/assets/images/african-american-boy.webp": {
    "type": "image/webp",
    "etag": "\"5cc8-Blp3Kanq+k/NR4/D6KULDEYa1VU\"",
    "mtime": "2026-01-23T17:50:53.599Z",
    "size": 23752,
    "path": "../public/assets/images/african-american-boy.webp"
  },
  "/assets/images/all4access-banner.webp": {
    "type": "image/webp",
    "etag": "\"1be3a-QbalGf6jkLPZ1rZBxnp9r4J6moA\"",
    "mtime": "2026-01-23T17:50:53.601Z",
    "size": 114234,
    "path": "../public/assets/images/all4access-banner.webp"
  },
  "/assets/images/all4voicing-banner-m.webp": {
    "type": "image/webp",
    "etag": "\"862c-LU+/t9FCXjnd8ySagwTJ9aB3LxM\"",
    "mtime": "2026-01-23T17:50:53.602Z",
    "size": 34348,
    "path": "../public/assets/images/all4voicing-banner-m.webp"
  },
  "/assets/images/all4voicing-banner.webp": {
    "type": "image/webp",
    "etag": "\"3d608-B7/MtSHYa86dckNF6YFKAeyhS14\"",
    "mtime": "2026-01-23T17:50:53.604Z",
    "size": 251400,
    "path": "../public/assets/images/all4voicing-banner.webp"
  },
  "/assets/images/all4voicing-icons.webp": {
    "type": "image/webp",
    "etag": "\"17e6-m1za+mKynNqIIYHO+7xNOHZeGW4\"",
    "mtime": "2026-01-23T17:50:53.605Z",
    "size": 6118,
    "path": "../public/assets/images/all4voicing-icons.webp"
  },
  "/assets/images/all4voicing-logo.webp": {
    "type": "image/webp",
    "etag": "\"62c8-4aOzMeoNeigs4kNKCTmOW8GbWz4\"",
    "mtime": "2026-01-23T17:50:53.606Z",
    "size": 25288,
    "path": "../public/assets/images/all4voicing-logo.webp"
  },
  "/assets/images/All4Voicingimage.webp": {
    "type": "image/webp",
    "etag": "\"2161a-yiNOA5lr/uJrhDp9O29BqoULO7k\"",
    "mtime": "2026-01-23T17:50:53.595Z",
    "size": 136730,
    "path": "../public/assets/images/All4Voicingimage.webp"
  },
  "/assets/images/apple-store.png": {
    "type": "image/png",
    "etag": "\"10f9-ZHi0ysYCVVBb8kGOojzAQRUNWo0\"",
    "mtime": "2026-01-23T17:50:53.607Z",
    "size": 4345,
    "path": "../public/assets/images/apple-store.png"
  },
  "/assets/images/asl-black.webp": {
    "type": "image/webp",
    "etag": "\"6ad4-Ro5nDBPxxhSkXGsml1vb5NtgxGI\"",
    "mtime": "2026-01-23T17:50:53.650Z",
    "size": 27348,
    "path": "../public/assets/images/asl-black.webp"
  },
  "/assets/images/asl-white.webp": {
    "type": "image/webp",
    "etag": "\"567c-Gg76PiB1C7D0De8hflpZn+DLgj4\"",
    "mtime": "2026-01-23T17:50:53.651Z",
    "size": 22140,
    "path": "../public/assets/images/asl-white.webp"
  },
  "/assets/images/audiodescription.webp": {
    "type": "image/webp",
    "etag": "\"e72-lgQzrSrpT7eo4kdwrKtmm0766TY\"",
    "mtime": "2026-01-23T17:50:53.652Z",
    "size": 3698,
    "path": "../public/assets/images/audiodescription.webp"
  },
  "/assets/images/boy-headset.webp": {
    "type": "image/webp",
    "etag": "\"1726-PDOGZM/+EidIoTPQjBI0hXnW0Uo\"",
    "mtime": "2026-01-23T17:50:53.653Z",
    "size": 5926,
    "path": "../public/assets/images/boy-headset.webp"
  },
  "/assets/images/braile-computer.webp": {
    "type": "image/webp",
    "etag": "\"4a76-Ix37gZzTNBQrLsdnj+ltkEfyHCo\"",
    "mtime": "2026-01-23T17:50:53.654Z",
    "size": 19062,
    "path": "../public/assets/images/braile-computer.webp"
  },
  "/assets/images/captioning.webp": {
    "type": "image/webp",
    "etag": "\"1e94-0bo4r9SpQwsjXZ/YDzCqKQIQaDE\"",
    "mtime": "2026-01-23T17:50:53.655Z",
    "size": 7828,
    "path": "../public/assets/images/captioning.webp"
  },
  "/assets/images/cc-black.webp": {
    "type": "image/webp",
    "etag": "\"47a-S3lZVo8u0CSZWqdxrTPyyu1C+0c\"",
    "mtime": "2026-01-23T17:50:53.655Z",
    "size": 1146,
    "path": "../public/assets/images/cc-black.webp"
  },
  "/assets/images/cc-white.webp": {
    "type": "image/webp",
    "etag": "\"340-4oEy9x22gL/R87RV+jZWW/e0ytI\"",
    "mtime": "2026-01-23T17:50:53.656Z",
    "size": 832,
    "path": "../public/assets/images/cc-white.webp"
  },
  "/assets/images/cncc.webp": {
    "type": "image/webp",
    "etag": "\"1f00-iGV//vc4GG4j33A7+YpfAzpYNnY\"",
    "mtime": "2026-01-23T17:50:53.656Z",
    "size": 7936,
    "path": "../public/assets/images/cncc.webp"
  },
  "/assets/images/consulting-ada.webp": {
    "type": "image/webp",
    "etag": "\"45d88-RW9vmaSnm63rFOXHipfn31H+5jA\"",
    "mtime": "2026-01-23T17:50:53.659Z",
    "size": 286088,
    "path": "../public/assets/images/consulting-ada.webp"
  },
  "/assets/images/consulting-blind.png": {
    "type": "image/png",
    "etag": "\"1d79-VwV0/dkh6BzUEQ1ohKl2sL3LbJA\"",
    "mtime": "2026-01-23T17:50:53.660Z",
    "size": 7545,
    "path": "../public/assets/images/consulting-blind.png"
  },
  "/assets/images/consulting-on-site-icon.png": {
    "type": "image/png",
    "etag": "\"139d-NAyasuVGOwRtxWz6gr4GrfCuQJk\"",
    "mtime": "2026-01-23T17:50:53.660Z",
    "size": 5021,
    "path": "../public/assets/images/consulting-on-site-icon.png"
  },
  "/assets/images/consulting-tailored-icon.png": {
    "type": "image/png",
    "etag": "\"32eb-D15J7wQWN1XCpFH3aKwLEX5fDvI\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 13035,
    "path": "../public/assets/images/consulting-tailored-icon.png"
  },
  "/assets/images/consulting-workshops.webp": {
    "type": "image/webp",
    "etag": "\"12834-gkXMajqifiK9Yn09UXBd2QFiXXA\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 75828,
    "path": "../public/assets/images/consulting-workshops.webp"
  },
  "/assets/images/consulting.webp": {
    "type": "image/webp",
    "etag": "\"ed4-YXbmTprANyA1QX71C77FXA2Wr9Y\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 3796,
    "path": "../public/assets/images/consulting.webp"
  },
  "/assets/images/contact-us.webp": {
    "type": "image/webp",
    "etag": "\"5ea8-qOLnWN8YudQSz8TrUWVDnjdWlwk\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 24232,
    "path": "../public/assets/images/contact-us.webp"
  },
  "/assets/images/couple-watching-tv.webp": {
    "type": "image/webp",
    "etag": "\"4c3e-zuT0S5XN57dBBCcpwOcwKpsx2Zg\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 19518,
    "path": "../public/assets/images/couple-watching-tv.webp"
  },
  "/assets/images/cover_dicapta_boilerplate.png": {
    "type": "image/png",
    "etag": "\"de27-IyqQMgUh+gfzYs/OA4QFe1uNz/k\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 56871,
    "path": "../public/assets/images/cover_dicapta_boilerplate.png"
  },
  "/assets/images/dad-technology.webp": {
    "type": "image/webp",
    "etag": "\"42dc-wFsAerZRAMwcmNo+Zp0o9UGRyA8\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 17116,
    "path": "../public/assets/images/dad-technology.webp"
  },
  "/assets/images/dicapta-workflow-control-platform.webp": {
    "type": "image/webp",
    "etag": "\"23d78-+fN4DlJzHmECIM+BgTRoVfPi1Lk\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 146808,
    "path": "../public/assets/images/dicapta-workflow-control-platform.webp"
  },
  "/assets/images/dubbing-ai-cloning.png": {
    "type": "image/png",
    "etag": "\"1004-n3yt9xlJ6rTwvn0wrlLOLEMs/o4\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 4100,
    "path": "../public/assets/images/dubbing-ai-cloning.png"
  },
  "/assets/images/dubbing-ai.png": {
    "type": "image/png",
    "etag": "\"220f-fhuaxaYXcbqwhGHVUj9mYJxxjJA\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 8719,
    "path": "../public/assets/images/dubbing-ai.png"
  },
  "/assets/images/dubbing.webp": {
    "type": "image/webp",
    "etag": "\"da2-Fnsl4wxfdEptHed3qJvE/7oTYKE\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 3490,
    "path": "../public/assets/images/dubbing.webp"
  },
  "/assets/images/emergingtechnologies.png": {
    "type": "image/png",
    "etag": "\"7c4-fGGnc3OGp6Lf10fZ6PkraajkJpM\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 1988,
    "path": "../public/assets/images/emergingtechnologies.png"
  },
  "/assets/images/facebook-logo.webp": {
    "type": "image/webp",
    "etag": "\"524-KpORCzQtSL0mzZC55TIaEMMrArs\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 1316,
    "path": "../public/assets/images/facebook-logo.webp"
  },
  "/assets/images/film-festival-miami.webp": {
    "type": "image/webp",
    "etag": "\"268d2-+P2uhcWA/OWINjzvlzvVPZj7I90\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 157906,
    "path": "../public/assets/images/film-festival-miami.webp"
  },
  "/assets/images/girl-and-boy-illustration.webp": {
    "type": "image/webp",
    "etag": "\"bf22-zpLBXsFnKqKjteIPJ4IEkjZddT4\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 48930,
    "path": "../public/assets/images/girl-and-boy-illustration.webp"
  },
  "/assets/images/gocc4all-captions.webp": {
    "type": "image/webp",
    "etag": "\"50ce-Y/3jSP88PKK16SmUBv8I6GI/eJU\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 20686,
    "path": "../public/assets/images/gocc4all-captions.webp"
  },
  "/assets/images/google-play-badge.png": {
    "type": "image/png",
    "etag": "\"3a67-KwDyYuDJLqJYoY+0i7jasPyUkTo\"",
    "mtime": "2026-01-23T17:50:53.661Z",
    "size": 14951,
    "path": "../public/assets/images/google-play-badge.png"
  },
  "/assets/images/hands-connection.png": {
    "type": "image/png",
    "etag": "\"8f847-sw0HkoNV7GjW9GlxkQTBrHPuufU\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 587847,
    "path": "../public/assets/images/hands-connection.png"
  },
  "/assets/images/home-banner-m.webp": {
    "type": "image/webp",
    "etag": "\"9cc2-XRLFZ4+e8Jx9C4dBHYNDb3FlNkM\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 40130,
    "path": "../public/assets/images/home-banner-m.webp"
  },
  "/assets/images/home-banner.webp": {
    "type": "image/webp",
    "etag": "\"1874c-SPZ314HBKYlYMS1c6i1perdFGeI\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 100172,
    "path": "../public/assets/images/home-banner.webp"
  },
  "/assets/images/ico-collaboration.webp": {
    "type": "image/webp",
    "etag": "\"6378-ondyTcGRE9SldyTFtfsy9UuGRMc\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 25464,
    "path": "../public/assets/images/ico-collaboration.webp"
  },
  "/assets/images/ico-distribution.webp": {
    "type": "image/webp",
    "etag": "\"5652-+5pirX9n4jwjaF8QhyWddXCl3s4\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 22098,
    "path": "../public/assets/images/ico-distribution.webp"
  },
  "/assets/images/ico-production.webp": {
    "type": "image/webp",
    "etag": "\"31ca-SwR/Uft61uyGPIKoh+XlRaYz3ok\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 12746,
    "path": "../public/assets/images/ico-production.webp"
  },
  "/assets/images/icon1devoicing.png": {
    "type": "image/png",
    "etag": "\"93e-r13vKk86f5hn9pPXrf1NO8HfIaA\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 2366,
    "path": "../public/assets/images/icon1devoicing.png"
  },
  "/assets/images/icon2devoicing.png": {
    "type": "image/png",
    "etag": "\"c74-om8y5wIWrowUGAdNa8RIj7RView\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 3188,
    "path": "../public/assets/images/icon2devoicing.png"
  },
  "/assets/images/icon3devoicing.png": {
    "type": "image/png",
    "etag": "\"e92-Bbi8uAPfpvvSmEFocDhVHJz0+O8\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 3730,
    "path": "../public/assets/images/icon3devoicing.png"
  },
  "/assets/images/ideas-that-work-logo.webp": {
    "type": "image/webp",
    "etag": "\"2f76-VYrSEUE3ca1Wtyp3RCdw8x7vYrc\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 12150,
    "path": "../public/assets/images/ideas-that-work-logo.webp"
  },
  "/assets/images/img2-tecno.webp": {
    "type": "image/webp",
    "etag": "\"420e-MHVszSXJDGLtouVVeHuyiiIqWwQ\"",
    "mtime": "2026-01-23T17:50:53.676Z",
    "size": 16910,
    "path": "../public/assets/images/img2-tecno.webp"
  },
  "/assets/images/instagram-logo.webp": {
    "type": "image/webp",
    "etag": "\"1218-SyTc6A1PtWbGiloBQzycgChFqIs\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 4632,
    "path": "../public/assets/images/instagram-logo.webp"
  },
  "/assets/images/keyboard-accessibility.webp": {
    "type": "image/webp",
    "etag": "\"12c20-CMrSj7ef6Ai8zv7WTs7UzUJHvqY\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 76832,
    "path": "../public/assets/images/keyboard-accessibility.webp"
  },
  "/assets/images/latino.webp": {
    "type": "image/webp",
    "etag": "\"4e7a-J3qz522W5YSI7kA4Sf1XOEAvNFI\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 20090,
    "path": "../public/assets/images/latino.webp"
  },
  "/assets/images/lets-all-see-workshop.webp": {
    "type": "image/webp",
    "etag": "\"e188-Pb3sKigqJ24blvx5A8qhA9myoYE\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 57736,
    "path": "../public/assets/images/lets-all-see-workshop.webp"
  },
  "/assets/images/linkedin-logo.webp": {
    "type": "image/webp",
    "etag": "\"b66-QX+di/bn6hfyjrUqw8ebr11XfOY\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 2918,
    "path": "../public/assets/images/linkedin-logo.webp"
  },
  "/assets/images/liveevents.webp": {
    "type": "image/webp",
    "etag": "\"f38-ndbIIbcS4yqmR4dYahYdE/LJr0Y\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 3896,
    "path": "../public/assets/images/liveevents.webp"
  },
  "/assets/images/media-production-icon.webp": {
    "type": "image/webp",
    "etag": "\"1e8c-RpG24LG+/8SwvrNBHx30goWSRJI\"",
    "mtime": "2026-01-23T17:50:53.740Z",
    "size": 7820,
    "path": "../public/assets/images/media-production-icon.webp"
  },
  "/assets/images/media-production.webp": {
    "type": "image/webp",
    "etag": "\"d73c-ilJN7TG/MzVMnLu/p6bMeiHmx3I\"",
    "mtime": "2026-01-23T17:50:53.741Z",
    "size": 55100,
    "path": "../public/assets/images/media-production.webp"
  },
  "/assets/images/meeting.jpg": {
    "type": "image/jpeg",
    "etag": "\"5985-31oYBufpBwOl1xQl0VrC179Ez/w\"",
    "mtime": "2026-01-23T17:50:53.742Z",
    "size": 22917,
    "path": "../public/assets/images/meeting.jpg"
  },
  "/assets/images/mission-banner-m.webp": {
    "type": "image/webp",
    "etag": "\"14218-D8O0k7gZgIe3iu+EH7WFziVe45c\"",
    "mtime": "2026-01-23T17:50:53.744Z",
    "size": 82456,
    "path": "../public/assets/images/mission-banner-m.webp"
  },
  "/assets/images/mission-banner.webp": {
    "type": "image/webp",
    "etag": "\"324f6-aXXfo4elLog1g86Dp8bczZ53Xrw\"",
    "mtime": "2026-01-23T17:50:53.746Z",
    "size": 206070,
    "path": "../public/assets/images/mission-banner.webp"
  },
  "/assets/images/mutilingualexpertise.png": {
    "type": "image/png",
    "etag": "\"941-xM3egyvvFRwcO9l0LYMmNphJQi4\"",
    "mtime": "2026-01-23T17:50:53.746Z",
    "size": 2369,
    "path": "../public/assets/images/mutilingualexpertise.png"
  },
  "/assets/images/our-team-banner-m.webp": {
    "type": "image/webp",
    "etag": "\"796e-+6pX1B90r7/v2muX0Z67BPvZVv8\"",
    "mtime": "2026-01-23T17:50:53.761Z",
    "size": 31086,
    "path": "../public/assets/images/our-team-banner-m.webp"
  },
  "/assets/images/our-team-banner.webp": {
    "type": "image/webp",
    "etag": "\"12520-xLP0rg0GZ/VhZ2+BXaChnW6x890\"",
    "mtime": "2026-01-23T17:50:53.763Z",
    "size": 75040,
    "path": "../public/assets/images/our-team-banner.webp"
  },
  "/assets/images/partners-in-accessibility.webp": {
    "type": "image/webp",
    "etag": "\"12a3c-+Aqmfm/DaKW0+dJByQ3TfYu7oTc\"",
    "mtime": "2026-01-23T17:50:53.764Z",
    "size": 76348,
    "path": "../public/assets/images/partners-in-accessibility.webp"
  },
  "/assets/images/projects-banner.webp": {
    "type": "image/webp",
    "etag": "\"2568e-b2fMoKtZklX5sDOMKqqooVtJRCg\"",
    "mtime": "2026-01-23T17:50:53.787Z",
    "size": 153230,
    "path": "../public/assets/images/projects-banner.webp"
  },
  "/assets/images/quotes.svg": {
    "type": "image/svg+xml",
    "etag": "\"43f-EIZAzvXRSnCWopjFyl5Ku/fH56I\"",
    "mtime": "2026-01-23T17:50:53.788Z",
    "size": 1087,
    "path": "../public/assets/images/quotes.svg"
  },
  "/assets/images/resources-banner.webp": {
    "type": "image/webp",
    "etag": "\"134fa-M2Pa11PpUeUlN9sO8ceCI2MKRJw\"",
    "mtime": "2026-01-23T17:50:53.789Z",
    "size": 79098,
    "path": "../public/assets/images/resources-banner.webp"
  },
  "/assets/images/sesame.png": {
    "type": "image/png",
    "etag": "\"1f32-J+WKdEqfv/X8V61o2lHka9wJW1U\"",
    "mtime": "2026-01-23T17:50:53.791Z",
    "size": 7986,
    "path": "../public/assets/images/sesame.png"
  },
  "/assets/images/shutterstock.webp": {
    "type": "image/webp",
    "etag": "\"10fe6-mcD5t/wGhlYpKcvke16Nx1bjeD0\"",
    "mtime": "2026-01-23T17:50:53.792Z",
    "size": 69606,
    "path": "../public/assets/images/shutterstock.webp"
  },
  "/assets/images/technology-illustration.webp": {
    "type": "image/webp",
    "etag": "\"3e76-W3LN35qD8N5jOi4o8VSZ1m24+ZM\"",
    "mtime": "2026-01-23T17:50:53.795Z",
    "size": 15990,
    "path": "../public/assets/images/technology-illustration.webp"
  },
  "/assets/images/tv-movie-access-banner-m.webp": {
    "type": "image/webp",
    "etag": "\"5cb2-0xuZY+UblTujXgBWmqrfwKqhpXc\"",
    "mtime": "2026-01-23T17:50:53.796Z",
    "size": 23730,
    "path": "../public/assets/images/tv-movie-access-banner-m.webp"
  },
  "/assets/images/tv-movie-access-banner.webp": {
    "type": "image/webp",
    "etag": "\"d46c-91JHl62VSbsbCfbJzeCSzhrPBsA\"",
    "mtime": "2026-01-23T17:50:53.797Z",
    "size": 54380,
    "path": "../public/assets/images/tv-movie-access-banner.webp"
  },
  "/assets/images/video.png": {
    "type": "image/png",
    "etag": "\"7d5-y6yh1CwjUHyye6YRjjdYOOWtWAo\"",
    "mtime": "2026-01-23T17:50:53.798Z",
    "size": 2005,
    "path": "../public/assets/images/video.png"
  },
  "/assets/images/x-logo.webp": {
    "type": "image/webp",
    "etag": "\"7c8-c204IkMy0SYk/6RwrxZcidJSm+o\"",
    "mtime": "2026-01-23T17:50:53.799Z",
    "size": 1992,
    "path": "../public/assets/images/x-logo.webp"
  },
  "/assets/images/youtube-logo.webp": {
    "type": "image/webp",
    "etag": "\"766-/uF15nHCg8nJAbp69YyVWDO15lQ\"",
    "mtime": "2026-01-23T17:50:53.800Z",
    "size": 1894,
    "path": "../public/assets/images/youtube-logo.webp"
  },
  "/assets/pdf/accesible-screenings-guidelines-dicapta.pdf": {
    "type": "application/pdf",
    "etag": "\"2fd102-tB50QSmjsgvzoFpF8uW2lW7UDso\"",
    "mtime": "2026-01-23T17:50:53.824Z",
    "size": 3133698,
    "path": "../public/assets/pdf/accesible-screenings-guidelines-dicapta.pdf"
  },
  "/assets/pdf/all4access-effortless-universal-access-2022.pdf": {
    "type": "application/pdf",
    "etag": "\"33367-daoUByvalYl4HUMpB8l/dMI3vVs\"",
    "mtime": "2026-01-23T17:50:53.827Z",
    "size": 209767,
    "path": "../public/assets/pdf/all4access-effortless-universal-access-2022.pdf"
  },
  "/assets/pdf/all4access-eua.pdf": {
    "type": "application/pdf",
    "etag": "\"2ef84-VkNkeClh3bNR0/NmvYgeYySXkGI\"",
    "mtime": "2026-01-23T17:50:53.830Z",
    "size": 192388,
    "path": "../public/assets/pdf/all4access-eua.pdf"
  },
  "/assets/pdf/be-our-partner.pdf": {
    "type": "application/pdf",
    "etag": "\"1a7f7-vffhDfk9ZI6VWWcpp5fSn32tN9k\"",
    "mtime": "2026-01-23T17:50:53.832Z",
    "size": 108535,
    "path": "../public/assets/pdf/be-our-partner.pdf"
  },
  "/assets/pdf/blindnes-in-the-usa-2022.pdf": {
    "type": "application/pdf",
    "etag": "\"38980-21/Jqu12aHslXMCd72fPspV48E8\"",
    "mtime": "2026-01-23T17:50:53.835Z",
    "size": 231808,
    "path": "../public/assets/pdf/blindnes-in-the-usa-2022.pdf"
  },
  "/assets/pdf/deaf-blindness-in-the-usa-2022.pdf": {
    "type": "application/pdf",
    "etag": "\"3b595-biWrxy4vWOYDt7gkXMb5ZsVPLOE\"",
    "mtime": "2026-01-23T17:50:53.838Z",
    "size": 243093,
    "path": "../public/assets/pdf/deaf-blindness-in-the-usa-2022.pdf"
  },
  "/assets/pdf/deafness-in-the-usa-2022.pdf": {
    "type": "application/pdf",
    "etag": "\"3b8b0-50eYO0m9Lj2wpfgpGfxc2VtLSbs\"",
    "mtime": "2026-01-23T17:50:53.840Z",
    "size": 243888,
    "path": "../public/assets/pdf/deafness-in-the-usa-2022.pdf"
  },
  "/assets/pdf/dicapta-boilerplate.pdf": {
    "type": "application/pdf",
    "etag": "\"210b41-5QkuplO2dtcrDNL92uhyt8xw1ec\"",
    "mtime": "2026-01-23T17:50:53.856Z",
    "size": 2165569,
    "path": "../public/assets/pdf/dicapta-boilerplate.pdf"
  },
  "/assets/pdf/embracing-diversity-in-audio-description.pdf": {
    "type": "application/pdf",
    "etag": "\"1d64b8-Pt3u+oUH/J9Leia48Yr/UKZfXhA\"",
    "mtime": "2026-01-23T17:50:53.869Z",
    "size": 1926328,
    "path": "../public/assets/pdf/embracing-diversity-in-audio-description.pdf"
  },
  "/assets/pdf/gocc4all-emergency-information-at-your-fingertips.pdf": {
    "type": "application/pdf",
    "etag": "\"85de7-jaKj2JBdZiTJzSPkeT7+1UvWj1Y\"",
    "mtime": "2026-01-23T17:50:53.873Z",
    "size": 548327,
    "path": "../public/assets/pdf/gocc4all-emergency-information-at-your-fingertips.pdf"
  },
  "/assets/pdf/hispanic-children-with-disabilities-in-the-usa-2022.pdf": {
    "type": "application/pdf",
    "etag": "\"3c599-J1q8o2dvSxWLQIQ+LJ+Abyh1K68\"",
    "mtime": "2026-01-23T17:50:53.875Z",
    "size": 247193,
    "path": "../public/assets/pdf/hispanic-children-with-disabilities-in-the-usa-2022.pdf"
  },
  "/assets/pdf/latinos-in-the-usa-2022.pdf": {
    "type": "application/pdf",
    "etag": "\"3fbbc-c/0Tljv9H4UEk4JddPeGxZNu+xw\"",
    "mtime": "2026-01-23T17:50:53.876Z",
    "size": 261052,
    "path": "../public/assets/pdf/latinos-in-the-usa-2022.pdf"
  },
  "/assets/pdf/latinos-with-disablities-in-the-usa.pdf": {
    "type": "application/pdf",
    "etag": "\"309c1-nFKigVQneU2QnriB4OC/u2Zu9s0\"",
    "mtime": "2026-01-23T17:50:53.878Z",
    "size": 199105,
    "path": "../public/assets/pdf/latinos-with-disablities-in-the-usa.pdf"
  },
  "/assets/pdf/sensory-disabilities-in-the-usa-2022.pdf": {
    "type": "application/pdf",
    "etag": "\"3b8e9-DMAWJS8cto6vvUl3NhwIBCmfSG0\"",
    "mtime": "2026-01-23T17:50:54.044Z",
    "size": 243945,
    "path": "../public/assets/pdf/sensory-disabilities-in-the-usa-2022.pdf"
  },
  "/assets/pdf/you-are-our-partner-so-what-now.pdf": {
    "type": "application/pdf",
    "etag": "\"ed4f-53+ZGulVpW1TjAi9a7Z/w+t8DrM\"",
    "mtime": "2026-01-23T17:50:54.046Z",
    "size": 60751,
    "path": "../public/assets/pdf/you-are-our-partner-so-what-now.pdf"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-OPdNtWnt3ocvZ+fTZ6kiIl8Pv5c\"",
    "mtime": "2026-01-27T14:05:32.810Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/assets/images/articles/ACB-Awards-Gala-2024-2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"423c2-glMVEqwNBTOs19spw2nGCC4onB0\"",
    "mtime": "2026-01-23T17:50:53.609Z",
    "size": 271298,
    "path": "../public/assets/images/articles/ACB-Awards-Gala-2024-2.jpeg"
  },
  "/assets/images/articles/at_2023_0111.webp": {
    "type": "image/webp",
    "etag": "\"12746-Uu7Co7j+xU0K6VFmnS5JgoK+7Gg\"",
    "mtime": "2026-01-23T17:50:53.611Z",
    "size": 75590,
    "path": "../public/assets/images/articles/at_2023_0111.webp"
  },
  "/assets/images/articles/at_2023_0112.webp": {
    "type": "image/webp",
    "etag": "\"4e84-4YdI9w2bV1xp8Z4XkpC5ZWoVm00\"",
    "mtime": "2026-01-23T17:50:53.611Z",
    "size": 20100,
    "path": "../public/assets/images/articles/at_2023_0112.webp"
  },
  "/assets/images/articles/at_2023_0630.webp": {
    "type": "image/webp",
    "etag": "\"980e-MVPdDcl9IcxRzX58TQCUw4eL3IA\"",
    "mtime": "2026-01-23T17:50:53.612Z",
    "size": 38926,
    "path": "../public/assets/images/articles/at_2023_0630.webp"
  },
  "/assets/images/articles/at_2023_0714.webp": {
    "type": "image/webp",
    "etag": "\"c598-1yHaGHkRIOcLHwO5hF3h1hu1gSo\"",
    "mtime": "2026-01-23T17:50:53.614Z",
    "size": 50584,
    "path": "../public/assets/images/articles/at_2023_0714.webp"
  },
  "/assets/images/articles/at_2023_0728.webp": {
    "type": "image/webp",
    "etag": "\"f092-lcHfmG5Xy7Tp9rsLh3ZyHkSIARU\"",
    "mtime": "2026-01-23T17:50:53.615Z",
    "size": 61586,
    "path": "../public/assets/images/articles/at_2023_0728.webp"
  },
  "/assets/images/articles/at_2023_1011.webp": {
    "type": "image/webp",
    "etag": "\"211e-fAYbIu8KXYrYva+1KRzJEIOCzuU\"",
    "mtime": "2026-01-23T17:50:53.615Z",
    "size": 8478,
    "path": "../public/assets/images/articles/at_2023_1011.webp"
  },
  "/assets/images/articles/at_2023_1030.webp": {
    "type": "image/webp",
    "etag": "\"830c-WgkrY80iihdrDk2x3MGP+miSedM\"",
    "mtime": "2026-01-23T17:50:53.616Z",
    "size": 33548,
    "path": "../public/assets/images/articles/at_2023_1030.webp"
  },
  "/assets/images/articles/at_2023_1109.webp": {
    "type": "image/webp",
    "etag": "\"a2b6-8mhB9W100qBlPXBs+feIB3w2rzY\"",
    "mtime": "2026-01-23T17:50:53.617Z",
    "size": 41654,
    "path": "../public/assets/images/articles/at_2023_1109.webp"
  },
  "/assets/images/articles/at_2023_1111.webp": {
    "type": "image/webp",
    "etag": "\"45bc-GYsKfrq72vOh1E9gOtv4uiTJnHY\"",
    "mtime": "2026-01-23T17:50:53.618Z",
    "size": 17852,
    "path": "../public/assets/images/articles/at_2023_1111.webp"
  },
  "/assets/images/articles/at_2023_117.webp": {
    "type": "image/webp",
    "etag": "\"1e5a4-q0i4PxArEEyl1GN73ZkxMTTVqZ0\"",
    "mtime": "2026-01-23T17:50:53.619Z",
    "size": 124324,
    "path": "../public/assets/images/articles/at_2023_117.webp"
  },
  "/assets/images/articles/at_2023_1172.webp": {
    "type": "image/webp",
    "etag": "\"463e-s5Sx3nEvdVQ7QcQCZdCepzwCeSg\"",
    "mtime": "2026-01-23T17:50:53.620Z",
    "size": 17982,
    "path": "../public/assets/images/articles/at_2023_1172.webp"
  },
  "/assets/images/articles/at_2023_118.webp": {
    "type": "image/webp",
    "etag": "\"6274-M6nVzS2Jy45d5Tf/qqjG/liUqHI\"",
    "mtime": "2026-01-23T17:50:53.621Z",
    "size": 25204,
    "path": "../public/assets/images/articles/at_2023_118.webp"
  },
  "/assets/images/articles/at_2023_1241.webp": {
    "type": "image/webp",
    "etag": "\"dc02-6UWPa2/IqzioN/sBUyL2XkrCOaE\"",
    "mtime": "2026-01-23T17:50:53.623Z",
    "size": 56322,
    "path": "../public/assets/images/articles/at_2023_1241.webp"
  },
  "/assets/images/articles/at_2023_2223.webp": {
    "type": "image/webp",
    "etag": "\"fc1a-5A6HUBF0vxqe8VfXTTwyKxmTqrc\"",
    "mtime": "2026-01-23T17:50:53.624Z",
    "size": 64538,
    "path": "../public/assets/images/articles/at_2023_2223.webp"
  },
  "/assets/images/articles/at_2023_3110.webp": {
    "type": "image/webp",
    "etag": "\"644e-C0PmLMP3bCQx+hlLdwtxFWQzzXo\"",
    "mtime": "2026-01-23T17:50:53.625Z",
    "size": 25678,
    "path": "../public/assets/images/articles/at_2023_3110.webp"
  },
  "/assets/images/articles/at_2023_3112.webp": {
    "type": "image/webp",
    "etag": "\"2174-HTwl5lfwkhuLGb8Xlmqv8w+mVkg\"",
    "mtime": "2026-01-23T17:50:53.626Z",
    "size": 8564,
    "path": "../public/assets/images/articles/at_2023_3112.webp"
  },
  "/assets/images/articles/at_2023_3331.webp": {
    "type": "image/webp",
    "etag": "\"28e2-srH9+o/7iQMolCVHLf5X4ALiArs\"",
    "mtime": "2026-01-23T17:50:53.627Z",
    "size": 10466,
    "path": "../public/assets/images/articles/at_2023_3331.webp"
  },
  "/assets/images/articles/at_2023_830.webp": {
    "type": "image/webp",
    "etag": "\"9e6e-NO96Palf5QWe9y7E9dRsqi5JZX0\"",
    "mtime": "2026-01-23T17:50:53.628Z",
    "size": 40558,
    "path": "../public/assets/images/articles/at_2023_830.webp"
  },
  "/assets/images/articles/at_2023_8302.webp": {
    "type": "image/webp",
    "etag": "\"6876-crcADrN0k/yr5bXQnEcp7ms0suU\"",
    "mtime": "2026-01-23T17:50:53.629Z",
    "size": 26742,
    "path": "../public/assets/images/articles/at_2023_8302.webp"
  },
  "/assets/images/articles/blog-mocked-1.webp": {
    "type": "image/webp",
    "etag": "\"1c9d2-8eoG9K16FiRcTs79qlm2MeNlgbw\"",
    "mtime": "2026-01-23T17:50:53.631Z",
    "size": 117202,
    "path": "../public/assets/images/articles/blog-mocked-1.webp"
  },
  "/assets/images/articles/blog-mocked-2.webp": {
    "type": "image/webp",
    "etag": "\"d42e-neSkgHjNTE2QRiTFH7ifca6o3Pc\"",
    "mtime": "2026-01-23T17:50:53.632Z",
    "size": 54318,
    "path": "../public/assets/images/articles/blog-mocked-2.webp"
  },
  "/assets/images/articles/images_2.webp": {
    "type": "image/webp",
    "etag": "\"fe20-C4Qxbn/pcXjstUBjuWyRMVRJJPA\"",
    "mtime": "2026-01-23T17:50:53.633Z",
    "size": 65056,
    "path": "../public/assets/images/articles/images_2.webp"
  },
  "/assets/images/articles/utilizing-multimedia-interactive-tools-teaching.jpg": {
    "type": "image/jpeg",
    "etag": "\"2f1a99-UrmAwGhdKc+1jnNH7hue95hyL8c\"",
    "mtime": "2026-01-23T17:50:53.649Z",
    "size": 3087001,
    "path": "../public/assets/images/articles/utilizing-multimedia-interactive-tools-teaching.jpg"
  },
  "/assets/images/material-icons/arrow-back.svg": {
    "type": "image/svg+xml",
    "etag": "\"11d-jDPF4dmcvLVHX7mmZLyLX4i6gA8\"",
    "mtime": "2026-01-23T17:50:53.734Z",
    "size": 285,
    "path": "../public/assets/images/material-icons/arrow-back.svg"
  },
  "/assets/images/material-icons/arrow-forward.svg": {
    "type": "image/svg+xml",
    "etag": "\"125-4r6x89cHJ3/WQDLgK7f/LcT7GYU\"",
    "mtime": "2026-01-23T17:50:53.735Z",
    "size": 293,
    "path": "../public/assets/images/material-icons/arrow-forward.svg"
  },
  "/assets/images/material-icons/call.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e7-oRPEqkyBChDZ6Ue8AQc63bf5G+s\"",
    "mtime": "2026-01-23T17:50:53.736Z",
    "size": 487,
    "path": "../public/assets/images/material-icons/call.svg"
  },
  "/assets/images/material-icons/close.svg": {
    "type": "image/svg+xml",
    "etag": "\"15e-sS6pi/lwhp/kpohnGxzRmECJrOU\"",
    "mtime": "2026-01-23T17:50:53.736Z",
    "size": 350,
    "path": "../public/assets/images/material-icons/close.svg"
  },
  "/assets/images/material-icons/mail.svg": {
    "type": "image/svg+xml",
    "etag": "\"18c-QiimmO3p1jpUdTQVZdstjSM+wO0\"",
    "mtime": "2026-01-23T17:50:53.737Z",
    "size": 396,
    "path": "../public/assets/images/material-icons/mail.svg"
  },
  "/assets/images/material-icons/menu.svg": {
    "type": "image/svg+xml",
    "etag": "\"1c3-sH+PGvvxuhhaSBJYnU6vV92vOi0\"",
    "mtime": "2026-01-23T17:50:53.738Z",
    "size": 451,
    "path": "../public/assets/images/material-icons/menu.svg"
  },
  "/assets/images/material-icons/play-circle.svg": {
    "type": "image/svg+xml",
    "etag": "\"1f8-Pmc2v2ASN0tztqskKyRCHvv0kso\"",
    "mtime": "2026-01-23T17:50:53.739Z",
    "size": 504,
    "path": "../public/assets/images/material-icons/play-circle.svg"
  },
  "/assets/images/newsletters/august-2024.jpg": {
    "type": "image/jpeg",
    "etag": "\"22424-1irJRQrz00WVm1y/Ri9kYvg0UT0\"",
    "mtime": "2026-01-23T17:50:53.749Z",
    "size": 140324,
    "path": "../public/assets/images/newsletters/august-2024.jpg"
  },
  "/assets/images/newsletters/july-2024.png": {
    "type": "image/png",
    "etag": "\"4bbbd-SMOwqxwTRsDAkwmlSKVsAVAtMPc\"",
    "mtime": "2026-01-23T17:50:53.751Z",
    "size": 310205,
    "path": "../public/assets/images/newsletters/july-2024.png"
  },
  "/assets/images/newsletters/june-2024.jpg": {
    "type": "image/jpeg",
    "etag": "\"8289-eMB69ZL+rWcQK505ueHGrQoUc9c\"",
    "mtime": "2026-01-23T17:50:53.752Z",
    "size": 33417,
    "path": "../public/assets/images/newsletters/june-2024.jpg"
  },
  "/assets/images/newsletters/may-2024.jpg": {
    "type": "image/jpeg",
    "etag": "\"870f-j/W+lhANQGIaVMU4A4qMxy2Wz4A\"",
    "mtime": "2026-01-23T17:50:53.754Z",
    "size": 34575,
    "path": "../public/assets/images/newsletters/may-2024.jpg"
  },
  "/assets/images/newsletters/november-2024-cover.webp": {
    "type": "image/webp",
    "etag": "\"1a71a-gVwShY4KL+QkHbnGVnWsUOa+Hu0\"",
    "mtime": "2026-01-23T17:50:53.755Z",
    "size": 108314,
    "path": "../public/assets/images/newsletters/november-2024-cover.webp"
  },
  "/assets/images/newsletters/october-2024.jpg": {
    "type": "image/jpeg",
    "etag": "\"4341d-Z+I4OgbvtZMU0w0y1JwpHMn/1BY\"",
    "mtime": "2026-01-23T17:50:53.758Z",
    "size": 275485,
    "path": "../public/assets/images/newsletters/october-2024.jpg"
  },
  "/assets/images/newsletters/september-2024.jpg": {
    "type": "image/jpeg",
    "etag": "\"25c66-YzzrjPgWMZA29VhKknNLmq5K/bk\"",
    "mtime": "2026-01-23T17:50:53.760Z",
    "size": 154726,
    "path": "../public/assets/images/newsletters/september-2024.jpg"
  },
  "/assets/images/pdf-images/accesible-screenings-guidelines-dicapta.png": {
    "type": "image/png",
    "etag": "\"51b02-2MtEwOnFzKT8Oy0g52by5wBT23o\"",
    "mtime": "2026-01-23T17:50:53.767Z",
    "size": 334594,
    "path": "../public/assets/images/pdf-images/accesible-screenings-guidelines-dicapta.png"
  },
  "/assets/images/pdf-images/all4access-effortless-universal-access-2022.png": {
    "type": "image/png",
    "etag": "\"237ec-uDK4oxsmpPNqZcHcoXhBPnN1Oso\"",
    "mtime": "2026-01-23T17:50:53.769Z",
    "size": 145388,
    "path": "../public/assets/images/pdf-images/all4access-effortless-universal-access-2022.png"
  },
  "/assets/images/pdf-images/all4access-eua.png": {
    "type": "image/png",
    "etag": "\"1c4ab-4ohTO5Xp7mRBz0NoaXmiIP8Rbok\"",
    "mtime": "2026-01-23T17:50:53.770Z",
    "size": 115883,
    "path": "../public/assets/images/pdf-images/all4access-eua.png"
  },
  "/assets/images/pdf-images/be-our-partner.png": {
    "type": "image/png",
    "etag": "\"f2a1-A9d66jODbpW3AEe7OcwsvoH3NHo\"",
    "mtime": "2026-01-23T17:50:53.772Z",
    "size": 62113,
    "path": "../public/assets/images/pdf-images/be-our-partner.png"
  },
  "/assets/images/pdf-images/blindnes-in-the-usa-2022.png": {
    "type": "image/png",
    "etag": "\"1094d-bGn17MGKx7KajSiszdOrS7DmWk8\"",
    "mtime": "2026-01-23T17:50:53.773Z",
    "size": 67917,
    "path": "../public/assets/images/pdf-images/blindnes-in-the-usa-2022.png"
  },
  "/assets/images/pdf-images/deaf-blindness-in-the-usa-2022.png": {
    "type": "image/png",
    "etag": "\"fb67-QT8Dcn8th5s6hJNU3Svbd0fXwnI\"",
    "mtime": "2026-01-23T17:50:53.774Z",
    "size": 64359,
    "path": "../public/assets/images/pdf-images/deaf-blindness-in-the-usa-2022.png"
  },
  "/assets/images/pdf-images/deafness-in-the-usa-2022.png": {
    "type": "image/png",
    "etag": "\"113a8-YS/wuXTP8HvUz4i8QhCOllG+jlA\"",
    "mtime": "2026-01-23T17:50:53.776Z",
    "size": 70568,
    "path": "../public/assets/images/pdf-images/deafness-in-the-usa-2022.png"
  },
  "/assets/images/pdf-images/gocc4all-emergency-information-at-your-fingertips.png": {
    "type": "image/png",
    "etag": "\"118c4-X64HhZGw3zdQCOrA6xZeSiTKbWg\"",
    "mtime": "2026-01-23T17:50:53.778Z",
    "size": 71876,
    "path": "../public/assets/images/pdf-images/gocc4all-emergency-information-at-your-fingertips.png"
  },
  "/assets/images/pdf-images/hispanic-children-with-disabilities-in-the-usa-2022.png": {
    "type": "image/png",
    "etag": "\"e7c9-+DlBFboJW/jMgMwAyuaEziNSJn4\"",
    "mtime": "2026-01-23T17:50:53.780Z",
    "size": 59337,
    "path": "../public/assets/images/pdf-images/hispanic-children-with-disabilities-in-the-usa-2022.png"
  },
  "/assets/images/pdf-images/latinos-in-the-usa-2022.png": {
    "type": "image/png",
    "etag": "\"d786-KAKyOOdxDeOFTCuZZATt8yR/Axo\"",
    "mtime": "2026-01-23T17:50:53.781Z",
    "size": 55174,
    "path": "../public/assets/images/pdf-images/latinos-in-the-usa-2022.png"
  },
  "/assets/images/pdf-images/latinos-with-disablities-in-the-usa.png": {
    "type": "image/png",
    "etag": "\"1161e-aDQSsTrjD79r7AQ8yfY9pecl0Ao\"",
    "mtime": "2026-01-23T17:50:53.782Z",
    "size": 71198,
    "path": "../public/assets/images/pdf-images/latinos-with-disablities-in-the-usa.png"
  },
  "/assets/images/pdf-images/sensory-disabilities-in-the-usa-2022.png": {
    "type": "image/png",
    "etag": "\"f4e1-+N5AxToKNZCAmS2dcuSzobj2gHA\"",
    "mtime": "2026-01-23T17:50:53.784Z",
    "size": 62689,
    "path": "../public/assets/images/pdf-images/sensory-disabilities-in-the-usa-2022.png"
  },
  "/assets/images/pdf-images/you-are-our-partner-so-what-now.png": {
    "type": "image/png",
    "etag": "\"12ed9-0Q5hvjcuvBD8lXM3HehZgnYumYM\"",
    "mtime": "2026-01-23T17:50:53.785Z",
    "size": 77529,
    "path": "../public/assets/images/pdf-images/you-are-our-partner-so-what-now.png"
  },
  "/assets/images/team/avatar.png": {
    "type": "image/png",
    "etag": "\"40dc-RAy/jRbCD3ijStJe4G0gkuMeY/k\"",
    "mtime": "2026-01-23T17:50:53.794Z",
    "size": 16604,
    "path": "../public/assets/images/team/avatar.png"
  },
  "/assets/images/logos/acb.png": {
    "type": "image/png",
    "etag": "\"5171-QVlKw7RJoiLvsgii6MYjEFRawyo\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 20849,
    "path": "../public/assets/images/logos/acb.png"
  },
  "/assets/images/logos/all-4-access-hd.png": {
    "type": "image/png",
    "etag": "\"19d5a-xjKf1hL/sOSXMrwWgJx4Vqku6gs\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 105818,
    "path": "../public/assets/images/logos/all-4-access-hd.png"
  },
  "/assets/images/logos/aph.png": {
    "type": "image/png",
    "etag": "\"2e35-SXGCl5p3bcnNRvCsCYda7gn1sfk\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 11829,
    "path": "../public/assets/images/logos/aph.png"
  },
  "/assets/images/logos/bare-feet.png": {
    "type": "image/png",
    "etag": "\"27fa-/bEHg/ZVJgm/v5LC5ge12SFw5UA\"",
    "mtime": "2026-01-23T17:50:53.692Z",
    "size": 10234,
    "path": "../public/assets/images/logos/bare-feet.png"
  },
  "/assets/images/logos/canal22.png": {
    "type": "image/png",
    "etag": "\"cf4a-h0Tgcw6sAEw6ImvS3BbjoGT+b08\"",
    "mtime": "2026-01-23T17:50:53.703Z",
    "size": 53066,
    "path": "../public/assets/images/logos/canal22.png"
  },
  "/assets/images/logos/crawford.png": {
    "type": "image/png",
    "etag": "\"91fe-7fI0MBLIsBhXyvbSqzTKKras57k\"",
    "mtime": "2026-01-23T17:50:53.704Z",
    "size": 37374,
    "path": "../public/assets/images/logos/crawford.png"
  },
  "/assets/images/logos/dcmp.png": {
    "type": "image/png",
    "etag": "\"421e-H0FyxQ0Ou2T1CcbJKN+QR6KvA4Y\"",
    "mtime": "2026-01-23T17:50:53.705Z",
    "size": 16926,
    "path": "../public/assets/images/logos/dcmp.png"
  },
  "/assets/images/logos/deaf-blind.png": {
    "type": "image/png",
    "etag": "\"92a4-EOocn6L37upolwmnwqElX7Y/mhg\"",
    "mtime": "2026-01-23T17:50:53.706Z",
    "size": 37540,
    "path": "../public/assets/images/logos/deaf-blind.png"
  },
  "/assets/images/logos/docon.png": {
    "type": "image/png",
    "etag": "\"3e90-xQx2f46QBFxYaiFnB+p7YFOLKgo\"",
    "mtime": "2026-01-23T17:50:53.707Z",
    "size": 16016,
    "path": "../public/assets/images/logos/docon.png"
  },
  "/assets/images/logos/fcc.png": {
    "type": "image/png",
    "etag": "\"2d89-Ejl2AzWhbA4iyFZaTHDGzSs9TdU\"",
    "mtime": "2026-01-23T17:50:53.707Z",
    "size": 11657,
    "path": "../public/assets/images/logos/fcc.png"
  },
  "/assets/images/logos/frp.webp": {
    "type": "image/webp",
    "etag": "\"171a-7IeyzYb2x+xUrqCqbLo29PGEMwk\"",
    "mtime": "2026-01-23T17:50:53.709Z",
    "size": 5914,
    "path": "../public/assets/images/logos/frp.webp"
  },
  "/assets/images/logos/gocc4all.png": {
    "type": "image/png",
    "etag": "\"d888-VV58TaBmV3TtRA+pfXsXnGeNEIA\"",
    "mtime": "2026-01-23T17:50:53.711Z",
    "size": 55432,
    "path": "../public/assets/images/logos/gocc4all.png"
  },
  "/assets/images/logos/hitn.png": {
    "type": "image/png",
    "etag": "\"1fbd-2MFWhbZ0LaptQhHdtdGp007sMvY\"",
    "mtime": "2026-01-23T17:50:53.712Z",
    "size": 8125,
    "path": "../public/assets/images/logos/hitn.png"
  },
  "/assets/images/logos/iampeace.png": {
    "type": "image/png",
    "etag": "\"6d00-JJrofO16oSXB34iyMAUVevPi2J8\"",
    "mtime": "2026-01-23T17:50:53.713Z",
    "size": 27904,
    "path": "../public/assets/images/logos/iampeace.png"
  },
  "/assets/images/logos/independent-producers.png": {
    "type": "image/png",
    "etag": "\"1bca-YDgwoBcV/9EmU13+VaU6nCloFs0\"",
    "mtime": "2026-01-23T17:50:53.714Z",
    "size": 7114,
    "path": "../public/assets/images/logos/independent-producers.png"
  },
  "/assets/images/logos/ket.png": {
    "type": "image/png",
    "etag": "\"4e45-AikD+CsFobqHRNLe69uSJo9RPVU\"",
    "mtime": "2026-01-23T17:50:53.715Z",
    "size": 20037,
    "path": "../public/assets/images/logos/ket.png"
  },
  "/assets/images/logos/ncdb.png": {
    "type": "image/png",
    "etag": "\"1c22-vM7TuM+H31sc4ahmI7U9KrcdThk\"",
    "mtime": "2026-01-23T17:50:53.716Z",
    "size": 7202,
    "path": "../public/assets/images/logos/ncdb.png"
  },
  "/assets/images/logos/new-day-films.png": {
    "type": "image/png",
    "etag": "\"a1df-HD65+9ZvOe5PFOuzIoxaKbVkXqU\"",
    "mtime": "2026-01-23T17:50:53.717Z",
    "size": 41439,
    "path": "../public/assets/images/logos/new-day-films.png"
  },
  "/assets/images/logos/pov.webp": {
    "type": "image/webp",
    "etag": "\"6f6-OFPXgVhFfbylYJtcKtzbqgwKAGk\"",
    "mtime": "2026-01-23T17:50:53.718Z",
    "size": 1782,
    "path": "../public/assets/images/logos/pov.webp"
  },
  "/assets/images/logos/pragda.png": {
    "type": "image/png",
    "etag": "\"1cd5-VMjWmtpFy2ek+/9DtPMC8O+5Qfk\"",
    "mtime": "2026-01-23T17:50:53.719Z",
    "size": 7381,
    "path": "../public/assets/images/logos/pragda.png"
  },
  "/assets/images/logos/ptk.webp": {
    "type": "image/webp",
    "etag": "\"161c-5zbAA9jzVCNhOqh38WGaXszaiUE\"",
    "mtime": "2026-01-23T17:50:53.720Z",
    "size": 5660,
    "path": "../public/assets/images/logos/ptk.webp"
  },
  "/assets/images/logos/semillitas.png": {
    "type": "image/png",
    "etag": "\"9ccb-dzvoaf6Nym1LDK8J2tTE8m31bbc\"",
    "mtime": "2026-01-23T17:50:53.721Z",
    "size": 40139,
    "path": "../public/assets/images/logos/semillitas.png"
  },
  "/assets/images/logos/sesame-workshop.webp": {
    "type": "image/webp",
    "etag": "\"504-2UPx5qMOWuK162cpptYrA4B2Od0\"",
    "mtime": "2026-01-23T17:50:53.721Z",
    "size": 1284,
    "path": "../public/assets/images/logos/sesame-workshop.webp"
  },
  "/assets/images/logos/spf.png": {
    "type": "image/png",
    "etag": "\"34f2-ZageObsTs7hNmEnsz4Gmp6xvOD8\"",
    "mtime": "2026-01-23T17:50:53.722Z",
    "size": 13554,
    "path": "../public/assets/images/logos/spf.png"
  },
  "/assets/images/logos/teach-access.png": {
    "type": "image/png",
    "etag": "\"71cf-9ATkHMW6a0ZSNTVu2sHPdzvbGPA\"",
    "mtime": "2026-01-23T17:50:53.724Z",
    "size": 29135,
    "path": "../public/assets/images/logos/teach-access.png"
  },
  "/assets/images/logos/trece.png": {
    "type": "image/png",
    "etag": "\"14d0-mDIHjrctY/g66b+En7ycj5jIHqk\"",
    "mtime": "2026-01-23T17:50:53.725Z",
    "size": 5328,
    "path": "../public/assets/images/logos/trece.png"
  },
  "/assets/images/logos/uc3m.png": {
    "type": "image/png",
    "etag": "\"3b778-g7U/9R2Z+BThgTWAWE3e9thNMQc\"",
    "mtime": "2026-01-23T17:50:53.729Z",
    "size": 243576,
    "path": "../public/assets/images/logos/uc3m.png"
  },
  "/assets/images/logos/wb.webp": {
    "type": "image/webp",
    "etag": "\"68c-lJTQgghnD1/7YzK7RR/6U9/Ny2U\"",
    "mtime": "2026-01-23T17:50:53.730Z",
    "size": 1676,
    "path": "../public/assets/images/logos/wb.webp"
  },
  "/assets/images/logos/wipr.png": {
    "type": "image/png",
    "etag": "\"30b3-MXweHVnzMkGY57/yTLe8euNSEKk\"",
    "mtime": "2026-01-23T17:50:53.731Z",
    "size": 12467,
    "path": "../public/assets/images/logos/wipr.png"
  },
  "/assets/images/logos/wucf.png": {
    "type": "image/png",
    "etag": "\"99ed-d4XJkXjfAYBE0z5GNeNVJfnqeZ0\"",
    "mtime": "2026-01-23T17:50:53.732Z",
    "size": 39405,
    "path": "../public/assets/images/logos/wucf.png"
  },
  "/assets/pdf/newsletters/august-2024.pdf": {
    "type": "application/pdf",
    "etag": "\"515d1f-Rz0yQPkUhWKDW30iuk42bbQvCm0\"",
    "mtime": "2026-01-23T17:50:53.911Z",
    "size": 5332255,
    "path": "../public/assets/pdf/newsletters/august-2024.pdf"
  },
  "/assets/pdf/newsletters/july-2024.pdf": {
    "type": "application/pdf",
    "etag": "\"29a3da-Ar7PElHxJ+nvXVApSljr14XNSOg\"",
    "mtime": "2026-01-23T17:50:53.927Z",
    "size": 2728922,
    "path": "../public/assets/pdf/newsletters/july-2024.pdf"
  },
  "/assets/pdf/newsletters/june-2024.pdf": {
    "type": "application/pdf",
    "etag": "\"4bfa4d-xL1U+2ikuk98W/AZpvbzd43e/uM\"",
    "mtime": "2026-01-23T17:50:53.960Z",
    "size": 4979277,
    "path": "../public/assets/pdf/newsletters/june-2024.pdf"
  },
  "/assets/pdf/newsletters/may-2024.pdf": {
    "type": "application/pdf",
    "etag": "\"34a812-sCyL8l7Ubce5MuW4Vt6xiOwIdQc\"",
    "mtime": "2026-01-23T17:50:53.980Z",
    "size": 3450898,
    "path": "../public/assets/pdf/newsletters/may-2024.pdf"
  },
  "/assets/pdf/newsletters/october-2024.pdf": {
    "type": "application/pdf",
    "etag": "\"5ba9dd-hZeJYllumcwXDSIAcRaKgd2aGDY\"",
    "mtime": "2026-01-23T17:50:54.018Z",
    "size": 6007261,
    "path": "../public/assets/pdf/newsletters/october-2024.pdf"
  },
  "/assets/pdf/newsletters/september-2024.pdf": {
    "type": "application/pdf",
    "etag": "\"377299-97zh7nWKKx8N/CgoMGbAajXYrwY\"",
    "mtime": "2026-01-23T17:50:54.042Z",
    "size": 3633817,
    "path": "../public/assets/pdf/newsletters/september-2024.pdf"
  },
  "/_nuxt/builds/meta/b2e11859-535c-456e-83e3-f19bbc0c8e32.json": {
    "type": "application/json",
    "etag": "\"8b-iZPWKZceTgbiVFDJO7M1m2GEsUM\"",
    "mtime": "2026-01-27T14:05:32.810Z",
    "size": 139,
    "path": "../public/_nuxt/builds/meta/b2e11859-535c-456e-83e3-f19bbc0c8e32.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets$1[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _ASRjXz = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_sfvXGA = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _ASRjXz, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_sfvXGA, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_sfvXGA, lazy: true, middleware: false, method: undefined }
];

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === "undefined") {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter(
        (key) => key.startsWith(base) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"C:\\Users\\crist\\Desktop\\Landingpage_dicapta\\dicapta\\.data\\kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "b2e11859-535c-456e-83e3-f19bbc0c8e32",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "strapiBlocksRenderer": {
      "prefix": "",
      "blocksPrefix": "StrapiBlocksText"
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

export { $fetch as $, trapUnhandledNodeErrors as a, useNitroApp as b, defineRenderHandler as c, destr as d, createError$1 as e, getRouteRules as f, getQuery as g, getResponseStatus as h, getResponseStatusText as i, joinRelativeURL as j, defu as k, createHooks as l, getContext as m, hasProtocol as n, isScriptProtocol as o, parseQuery as p, joinURL as q, toRouteMatcher as r, setupGracefulShutdown as s, toNodeListener as t, useRuntimeConfig as u, createRouter$1 as v, withQuery as w, sanitizeStatusCode as x, withTrailingSlash as y, withoutTrailingSlash as z };
//# sourceMappingURL=nitro.mjs.map
