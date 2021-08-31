'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core$1 = require('@web3-react/core');
var core = require('@material-ui/core');
var CloseIcon = require('@material-ui/icons/Close');
var HelpOutlineOutlinedIcon = require('@material-ui/icons/HelpOutlineOutlined');
var injectedConnector = require('@web3-react/injected-connector');
var walletconnectConnector = require('@web3-react/walletconnect-connector');
var bscConnector = require('@binance-chain/bsc-connector');
var BigNumber = require('bignumber.js/bignumber');
var BigNumber$1 = require('bignumber.js');
var Web3 = require('web3');
var ethereumMulticall = require('ethereum-multicall');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
var HelpOutlineOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(HelpOutlineOutlinedIcon);
var BigNumber__default = /*#__PURE__*/_interopDefaultLegacy(BigNumber);
var BigNumber__default$1 = /*#__PURE__*/_interopDefaultLegacy(BigNumber$1);
var Web3__default = /*#__PURE__*/_interopDefaultLegacy(Web3);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded$1 = ["children"];
var useStyles$2 = core.makeStyles(function (theme) {
  var _body;

  return {
    root: {
      background: "linear-gradient(245.22deg,#c200fb 7.97%,#3772ff 49.17%,#3773fe 0,#5ac4be 92.1%)",
      borderRadius: 5,
      padding: 1
    },
    body: (_body = {
      backgroundColor: "#131a35",
      padding: 30,
      borderRadius: 5,
      opacity: 0.9
    }, _defineProperty(_body, theme.breakpoints.down("sm"), {
      padding: 20
    }), _defineProperty(_body, theme.breakpoints.down("xs"), {
      padding: 16
    }), _body)
  };
});

var CustomCard = function CustomCard(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$1);

  var classes = useStyles$2();
  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: classes.root
  }, restProps), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.body
  }, children));
};

var WalletModalContext = /*#__PURE__*/React__default['default'].createContext({
  open: false,
  error: undefined,
  setOpen: function setOpen() {},
  setError: function setError() {}
});

var useWalletModal = function useWalletModal() {
  var _useWeb3React = core$1.useWeb3React(),
      activate = _useWeb3React.activate,
      deactivate = _useWeb3React.deactivate;

  var _useContext = React.useContext(WalletModalContext),
      open = _useContext.open,
      setOpen = _useContext.setOpen,
      error = _useContext.error,
      setError = _useContext.setError;

  return {
    open: open,
    setOpen: setOpen,
    activate: activate,
    deactivate: deactivate,
    error: error,
    setError: setError
  };
};

var _excluded = ["open", "close", "isDarkMode"];
var useStyles$1 = core.makeStyles(function () {
  return {
    root: {
      padding: 20,
      overflow: "auto"
    },
    closeIcon: {
      position: "absolute",
      boxSizing: 'content-box',
      right: 0,
      top: 0,
      transform: "translate(17px,-17px)",
      background: '#4f8dff',
      color: 'white',
      padding: 10,
      borderRadius: 10,
      boxShadow: "3px -3px 10px rgba(0,0,0,0.3)"
    },
    darkCloseIcon: {
      position: "absolute",
      right: 0,
      top: 0,
      transform: "translate(17px,-17px)",
      background: "rgb(9,9,21)",
      color: "magenta",
      cursor: "pointer",
      padding: 5,
      borderRadius: 10,
      height: 40,
      width: 40,
      zIndex: 9,
      border: "1px solid #bb00f2",
      boxShadow: "3px -3px 10px rgba(0,0,0,0.3)"
    }
  };
});

var ModalManager = function ModalManager(_ref) {
  var open = _ref.open,
      close = _ref.close,
      isDarkMode = _ref.isDarkMode,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles$1();
  return /*#__PURE__*/React__default['default'].createElement(core.Dialog, {
    open: open,
    onClose: close,
    maxWidth: "xl",
    BackdropProps: {
      style: {
        backgroundColor: "rgba(0, 0, 0, 0.7)"
      }
    } // disableBackdropClick
    ,
    PaperProps: {
      style: {
        overflow: "visible",
        borderRadius: 15
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement(CloseIcon__default['default'], {
    className: isDarkMode ? classes.darkCloseIcon : classes.closeIcon,
    fontSize: "small",
    onClick: close
  }), isDarkMode ? /*#__PURE__*/React__default['default'].createElement(CustomCard, {
    style: {
      overflow: "auto"
    }
  }, props.children) : /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.root
  }, props.children));
};

var img$6 = "data:image/svg+xml,%3csvg viewBox='0 0 96 96' width='32px' color='text' xmlns='http://www.w3.org/2000/svg' class='sc-bdfBwQ lkvAzg'%3e %3ccircle cx='48' cy='48' r='48' fill='white'%3e%3c/circle%3e %3cpath d='M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z' fill='%23E17726'%3e%3c/path%3e %3cpath d='M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z' fill='%23E27625'%3e%3c/path%3e %3cpath d='M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z' fill='%23E27625'%3e%3c/path%3e %3cpath d='M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z' fill='%23E27625'%3e%3c/path%3e %3cpath d='M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z' fill='%23E27625'%3e%3c/path%3e %3cpath d='M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z' fill='%23E27625'%3e%3c/path%3e %3cpath d='M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z' fill='%23E27625'%3e%3c/path%3e %3cpath d='M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z' fill='%23E27625'%3e%3c/path%3e %3cpath d='M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z' fill='%23D5BFB2'%3e%3c/path%3e %3cpath d='M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z' fill='%23D5BFB2'%3e%3c/path%3e %3cpath d='M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z' fill='%23233447'%3e%3c/path%3e %3cpath d='M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z' fill='%23233447'%3e%3c/path%3e %3cpath d='M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z' fill='%23CC6228'%3e%3c/path%3e %3cpath d='M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z' fill='%23CC6228'%3e%3c/path%3e %3cpath d='M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z' fill='%23CC6228'%3e%3c/path%3e %3cpath d='M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z' fill='%23CC6228'%3e%3c/path%3e %3cpath d='M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z' fill='%23E27525'%3e%3c/path%3e %3cpath d='M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z' fill='%23E27525'%3e%3c/path%3e %3cpath d='M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z' fill='%23E27525'%3e%3c/path%3e %3cpath d='M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z' fill='%23E27525'%3e%3c/path%3e %3cpath d='M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z' fill='%23F5841F'%3e%3c/path%3e %3cpath d='M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z' fill='%23F5841F'%3e%3c/path%3e %3cpath d='M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z' fill='%23C0AC9D'%3e%3c/path%3e %3cpath d='M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z' fill='%23161616'%3e%3c/path%3e %3cpath d='M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z' fill='%23763E1A'%3e%3c/path%3e %3cpath d='M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z' fill='%23763E1A'%3e%3c/path%3e %3cpath d='M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z' fill='%23F5841F'%3e%3c/path%3e %3cpath d='M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z' fill='%23F5841F'%3e%3c/path%3e %3cpath d='M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z' fill='%23F5841F'%3e%3c/path%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3csvg viewBox='0 0 96 96' width='32px' color='text' xmlns='http://www.w3.org/2000/svg' class='sc-bdfBwQ lkvAzg'%3e %3cg clip-path='url(%23clip0)'%3e %3cpath d='M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z' fill='%233375BB'%3e%3c/path%3e %3cpath d='M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z' fill='white'%3e%3c/path%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0'%3e %3crect width='96' height='96' fill='white'%3e%3c/rect%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg viewBox='0 0 96 96' width='32px' color='text' xmlns='http://www.w3.org/2000/svg' class='sc-bdfBwQ lkvAzg'%3e %3ccircle cx='48' cy='48' r='48' fill='white'%3e%3c/circle%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z' fill='%231D222A'%3e%3c/path%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg viewBox='0 0 96 96' width='32px' color='text' xmlns='http://www.w3.org/2000/svg' class='sc-bdfBwQ lkvAzg'%3e %3ccircle cx='48' cy='48' r='48' fill='white'%3e%3c/circle%3e %3cpath d='M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z' fill='%2329AEFF'%3e%3c/path%3e %3cpath d='M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z' fill='%232761E7'%3e%3c/path%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg viewBox='0 0 96 96' width='32px' color='text' xmlns='http://www.w3.org/2000/svg' class='sc-bdfBwQ lkvAzg'%3e %3cpath d='M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z' fill='%233389FB'%3e%3c/path%3e %3cpath d='M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z' fill='white'%3e%3c/path%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg viewBox='0 0 32 32' width='32px' color='text' xmlns='http://www.w3.org/2000/svg' class='sc-bdfBwQ lkvAzg'%3e %3cpath d='M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z' fill='%231E2026'%3e%3c/path%3e %3cpath d='M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z' fill='%23F0B90B'%3e%3c/path%3e %3cpath d='M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z' fill='%23F0B90B'%3e%3c/path%3e %3cpath d='M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z' fill='%23F0B90B'%3e%3c/path%3e %3cpath d='M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z' fill='%23F0B90B'%3e%3c/path%3e %3cpath d='M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z' fill='%23F0B90B'%3e%3c/path%3e %3cpath d='M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z' fill='%23F0B90B'%3e%3c/path%3e %3cpath d='M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z' fill='%23F0B90B'%3e%3c/path%3e %3cpath d='M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z' fill='%23F0B90B'%3e%3c/path%3e %3cpath d='M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z' fill='%23F0B90B'%3e%3c/path%3e %3cpath d='M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z' fill='%23F0B90B'%3e%3c/path%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg viewBox='0 0 96 96' width='32px' color='text' xmlns='http://www.w3.org/2000/svg' class='sc-bdfBwQ lkvAzg'%3e %3ccircle cx='48' cy='48' r='48' fill='%23F5F5F5'%3e%3c/circle%3e %3cpath d='M56.5504425%2c41.9387033 L56.5504425%2c50.4659601 L47.3948342%2c50.4659601 L47.3948342%2c85.5971142 L45.0078131%2c84.7075452 C43.8992633%2c84.2955753 42.1136272%2c83.5937969 39.9052997%2c82.5918134 L38.8675775%2c82.1177881 L38.8675775%2c14.6817622 L47.9569067%2c11.8769231 L56.5504425%2c14.5267861 L56.5504425%2c23.7259307 L47.9569067%2c21.0669705 L47.3948342%2c21.2411155 L47.3948342%2c41.9387033 L56.5504425%2c41.9387033 Z M16%2c50.4659926 L16%2c21.7739797 L36.1702794%2c15.548296 L36.1702794%2c24.7052039 L24.526282%2c28.3200122 L24.526282%2c41.9387358 L36.1702794%2c41.9387358 L36.1702794%2c81.3806284 L33.591244%2c80.0543973 C25.5662786%2c75.923652 16%2c68.9585019 16%2c59.2339983 L16%2c54.6496962 L24.526282%2c54.6496962 L24.526282%2c59.2339983 C24.526282%2c61.2460878 25.5734263%2c63.3605199 27.6426978%2c65.5373324 L27.6426978%2c50.4659926 L16%2c50.4659926 Z M59.1389325%2c15.3302574 L79.8040306%2c21.7261873 L79.8040306%2c50.4659601 L67.6710627%2c50.4659601 L67.6710627%2c62.9111544 C67.6710627%2c62.9111544 64.9581695%2c66.4674811 59.1464051%2c69.4451657 C59.1464051%2c67.0682164 59.1389325%2c15.3302574 59.1389325%2c15.3302574 Z M71.2780734%2c41.9387033 L71.2780734%2c28.2783928 L67.6710627%2c27.1649695 L67.6710627%2c41.9387033 L71.2780734%2c41.9387033 Z M71.2780734%2c59.8661186 L71.2780734%2c54.6495662 L79.8040306%2c54.6495662 L79.8040306%2c59.8661186 C79.8040306%2c74.3588162 58.7760221%2c82.7005566 52.330058%2c84.9127828 L49.9859233%2c85.7230769 L49.9859233%2c76.7068496 L51.1311866%2c76.2744112 C61.1591444%2c72.5004032 71.2780734%2c65.962818 71.2780734%2c59.8661186 Z' fill='black'%3e%3c/path%3e%3c/svg%3e";

BigNumber__default['default'].config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80
});
var config = {
  chainId: 56,
  bsc: true,
  darkMode: false,
  wrappedNative: {
    address: '',
    symbol: ''
  },
  usd: {
    address: '',
    symbol: ''
  },
  nativeUsdLp: {
    address: '',
    symbol: ''
  },
  rpcUrls: {
    56: 'https://bsc-dataseed.binance.org/',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
  },
  walletConnectPoolingInterval: 12000,
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
  unsupportedChainSetup: {
    97: {
      chainId: "0x61",
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18
      },
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      blockExplorerUrls: ['https://testnet.bscscan.com']
    },
    56: {
      chainId: "0x38",
      chainName: 'Binance Smart Chain Mainnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com/']
    }
  }
};

var ConfigContext = /*#__PURE__*/React__default['default'].createContext({
  config: config,
  setConfig: function setConfig() {}
});

var ConfigProvider = function ConfigProvider(_ref) {
  var children = _ref.children,
      config$1 = _ref.config;

  var _useState = React.useState(_objectSpread2(_objectSpread2(_objectSpread2({}, config), config$1), {}, {
    rpcUrls: _objectSpread2(_objectSpread2({}, config), config$1)
  })),
      _useState2 = _slicedToArray(_useState, 2),
      _config = _useState2[0],
      _setConfig = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(ConfigContext.Provider, {
    value: {
      config: _config,
      setConfig: _setConfig
    }
  }, children);
};

var useConfig = function useConfig() {
  return React.useContext(ConfigContext);
};

var connectorNames = {
  injected: "INJECTED",
  walletConnect: "WALLET_CONNECT",
  bsc: "BSC"
};
var useConnectors = function useConnectors() {
  var _useConfig = useConfig(),
      config = _useConfig.config;

  var _useState = React.useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      connectorsByName = _useState2[0],
      setConnectorsByName = _useState2[1];

  React.useEffect(function () {
    var _setConnectorsByName;

    var injected = new injectedConnector.InjectedConnector({
      supportedChainIds: config.supportedChainIds
    });
    var bsc = new bscConnector.BscConnector({
      supportedChainIds: config.supportedChainIds
    });
    var walletconnect = new walletconnectConnector.WalletConnectConnector({
      rpc: config.rpcUrls,
      bridge: 'https://bridge.walletconnect.org',
      qrcode: true,
      pollingInterval: config.walletConnectPoolingInterval
    });
    setConnectorsByName((_setConnectorsByName = {}, _defineProperty(_setConnectorsByName, connectorNames.injected, injected), _defineProperty(_setConnectorsByName, connectorNames.bsc, bsc), _defineProperty(_setConnectorsByName, connectorNames.walletConnect, walletconnect), _setConnectorsByName));
  }, [config]);
  return connectorsByName;
};

var wallets = [{
  title: "MetaMask",
  image: img$6,
  connector: connectorNames.injected
}, {
  title: "Binance Chain Wallet",
  image: img$1,
  connector: connectorNames.bsc
}, {
  title: "Trust Wallet",
  image: img$5,
  connector: connectorNames.injected
}, {
  title: "Wallet Connect",
  image: img$2,
  connector: connectorNames.walletConnect
}, {
  title: "Math Wallet",
  image: img$4,
  connector: connectorNames.injected
}, {
  title: "Token Pocket",
  image: img$3,
  connector: connectorNames.injected
}, {
  title: "SafePal Wallet",
  image: img,
  connector: connectorNames.injected
}];

var connectorLocalStorageKey = "LOCAL_STORAGE_CONNECTOR";
var ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
var MAX_UINT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

var constants = /*#__PURE__*/Object.freeze({
  __proto__: null,
  connectorLocalStorageKey: connectorLocalStorageKey,
  ZERO_ADDRESS: ZERO_ADDRESS,
  MAX_UINT: MAX_UINT
});

var switchChain = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(network) {
    var provider;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            provider = window.ethereum;

            if (!provider) {
              _context.next = 23;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return provider.request({
              method: 'wallet_switchEthereumChain',
              params: [{
                chainId: network.chainId
              }]
            });

          case 5:
            return _context.abrupt("return", true);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);

            if (!(_context.t0.code === 4902)) {
              _context.next = 21;
              break;
            }

            _context.prev = 11;
            _context.next = 14;
            return provider.request({
              method: 'wallet_addEthereumChain',
              params: [network]
            });

          case 14:
            return _context.abrupt("return", true);

          case 17:
            _context.prev = 17;
            _context.t1 = _context["catch"](11);
            console.error("Can't setup the network on metamask because window.ethereum is undefined");
            return _context.abrupt("return", false);

          case 21:
            console.error("Can't setup the network on metamask because window.ethereum is undefined");
            return _context.abrupt("return", false);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8], [11, 17]]);
  }));

  return function switchChain(_x) {
    return _ref.apply(this, arguments);
  };
}();
var addTokenToWallet = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tokenAddress, tokenSymbol, tokenDecimals, tokenImage) {
    var tokenAdded;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return window.ethereum.request({
              method: 'wallet_watchAsset',
              params: {
                type: 'ERC20',
                options: {
                  address: tokenAddress,
                  symbol: tokenSymbol,
                  decimals: tokenDecimals,
                  image: tokenImage
                }
              }
            });

          case 2:
            tokenAdded = _context2.sent;
            return _context2.abrupt("return", tokenAdded);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addTokenToWallet(_x2, _x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var toLower = function toLower(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "18";
  var bignumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var ans = new BigNumber__default$1['default']("0");
  if (value) ans = new BigNumber__default$1['default'](value.toString()).div(new BigNumber__default$1['default'](10).exponentiatedBy(decimals));
  if (bignumber) return ans;else return ans.toNumber();
};
var toUpper = function toUpper(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "18";
  var bignumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var ans = new BigNumber__default$1['default']("0");

  if (value) {
    ans = new BigNumber__default$1['default'](value.toString()).times(new BigNumber__default$1['default'](10).exponentiatedBy(decimals));
  }

  if (bignumber) return ans;else return ans.toNumber();
};
var getTimeLeft = function getTimeLeft(delta) {
  if (!delta) return "";
  if (delta && delta === "0") return null; // calculate (and subtract) whole days

  var days = Math.floor(delta / 86400);
  delta -= days * 86400;
  days = parseInt(days); // calculate (and subtract) whole hours

  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  hours = parseInt(hours); // calculate (and subtract) whole minutes

  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  minutes = parseInt(minutes); // what's left is seconds

  var seconds = delta % 60;
  seconds = parseInt(seconds);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

var useWallet = function useWallet(chainId) {
  var _useWalletModal = useWalletModal(),
      setError = _useWalletModal.setError,
      activate = _useWalletModal.activate;

  var _useConfig = useConfig(),
      config = _useConfig.config;

  var connectorsByName = useConnectors();
  var login = React.useCallback(function (connectorID) {
    if (!connectorsByName) return;
    var connector = connectorsByName[connectorID];

    if (connector) {
      window.localStorage.setItem(connectorLocalStorageKey, connectorID);
      activate(connector, /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error) {
          var network, hasSetup;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(error instanceof core$1.UnsupportedChainIdError)) {
                    _context.next = 14;
                    break;
                  }

                  network = config.unsupportedChainSetup[chainId];
                  _context.next = 4;
                  return switchChain(network !== null && network !== void 0 ? network : {
                    chainId: "0x".concat(parseInt(chainId).toString(16))
                  });

                case 4:
                  hasSetup = _context.sent;

                  if (!hasSetup) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 8;
                  return activate(connector);

                case 8:
                  setError(undefined);
                  _context.next = 12;
                  break;

                case 11:
                  setError("Unable to connect to required network ".concat(chainId ? chainId : ''));

                case 12:
                  _context.next = 16;
                  break;

                case 14:
                  window.localStorage.removeItem(connectorLocalStorageKey);

                  if (error instanceof injectedConnector.NoEthereumProviderError || error instanceof bscConnector.NoBscProviderError) {
                    setError('Provider Error', 'No provider was found');
                  } else if (error instanceof injectedConnector.UserRejectedRequestError || error instanceof walletconnectConnector.UserRejectedRequestError) {
                    if (connector instanceof walletconnectConnector.WalletConnectConnector) {
                      connector.walletConnectProvider = null;
                    }

                    setError('Authorization Error', 'Please authorize to access your account');
                  } else {
                    setError(error.name, error.message);
                  }

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    } else {
      setError("Can't find connector", 'The connector config is wrong');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [connectorsByName]);
  return login;
};

var useStyles = core.makeStyles(function (theme) {
  return {
    root: {
      color: 'rgba(0,0,0,0.8)'
    },
    grid: {
      marginTop: 10,
      maxWidth: 300
    },
    walletBtn: {
      display: 'flex',
      justifyContent: "space-between",
      padding: "8px 20px",
      background: "rgb(239, 244, 245)",
      borderRadius: 15,
      cursor: "pointer",
      "&:hover": {
        background: "rgba(239, 244, 245,0.5)"
      }
    },
    title: {
      color: '#34DFF7',
      fontWeight: 700,
      fontSize: 16
    },
    learnText: {
      color: '#34DFF7',
      marginTop: 20,
      cursor: "pointer",
      fontWeight: 700
    },
    darkWalletBtn: {
      justifyContent: "space-between",
      padding: "8px 20px",
      background: "rgba(0,0,0,0.4)",
      borderRadius: 15,
      cursor: "pointer",
      "&:hover": {
        background: "rgba(0,0,0,0.6)"
      }
    },
    darkTitle: {
      color: "white",
      fontSize: 16
    }
  };
});
var WalletModal = function WalletModal(_ref) {
  var chainId = _ref.chainId,
      isBSC = _ref.isBSC,
      isDarkMode = _ref.isDarkMode;
  var classes = useStyles();
  var login = useWallet(chainId);

  var _useWalletModal = useWalletModal(),
      setOpen = _useWalletModal.setOpen;

  var _useWeb3React = core$1.useWeb3React(),
      library = _useWeb3React.library;

  React.useEffect(function () {
    if (library) {
      setOpen(false);
    }
  }, [library]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React__default['default'].createElement(core.Typography, {
    className: "acmeFont",
    variant: "h6",
    style: {
      marginBottom: 20
    }
  }, "Connect Wallet"), /*#__PURE__*/React__default['default'].createElement(core.Divider, null), /*#__PURE__*/React__default['default'].createElement(core.Grid, {
    container: true,
    spacing: 1,
    className: classes.grid
  }, wallets.filter(function (i) {
    return isBSC || i.connector !== connectorNames.bsc;
  }).map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement(core.Grid, {
      item: true,
      xs: 12,
      key: index
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "flex ".concat(isDarkMode ? classes.darkWalletBtn : classes.walletBtn),
      onClick: function onClick() {
        return login(item.connector);
      }
    }, /*#__PURE__*/React__default['default'].createElement(core.Typography, {
      className: isDarkMode ? classes.darkTitle : classes.title
    }, item.title), /*#__PURE__*/React__default['default'].createElement("img", {
      alt: "",
      src: item.image
    })));
  })), /*#__PURE__*/React__default['default'].createElement(core.Typography, {
    className: "flex ".concat(classes.learnText)
  }, /*#__PURE__*/React__default['default'].createElement(HelpOutlineOutlinedIcon__default['default'], null), "\xA0Learn how to connect"));
};

BigNumber__default$1['default'].config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80
});
var WalletProvider = function WalletProvider(_ref) {
  var _config$chainId;

  var children = _ref.children,
      config = _ref.config;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isWalletOpen = _useState2[0],
      setIsWalletOpen = _useState2[1];

  var _useState3 = React.useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  React.useEffect(function () {
    if (error) console.log('Unable to connect Wallet!', error);
  }, [error]);
  return /*#__PURE__*/React__default['default'].createElement(core$1.Web3ReactProvider, {
    getLibrary: function getLibrary(provider) {
      return provider;
    }
  }, /*#__PURE__*/React__default['default'].createElement(WalletModalContext.Provider, {
    value: {
      open: isWalletOpen,
      setOpen: setIsWalletOpen,
      error: error,
      setError: setError
    }
  }, /*#__PURE__*/React__default['default'].createElement(ConfigProvider, {
    config: config
  }, children, /*#__PURE__*/React__default['default'].createElement(ModalManager, {
    isDarkMode: config === null || config === void 0 ? void 0 : config.darkMode,
    open: isWalletOpen,
    close: function close() {
      return setIsWalletOpen(false);
    }
  }, /*#__PURE__*/React__default['default'].createElement(WalletModal, {
    isBSC: config === null || config === void 0 ? void 0 : config.bsc,
    isDarkMode: config === null || config === void 0 ? void 0 : config.darkMode,
    chainId: (_config$chainId = config.chainId) !== null && _config$chainId !== void 0 ? _config$chainId : 56
  })))));
};

var _binanceChainListener = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              return Object.defineProperty(window, 'BinanceChain', {
                get: function get() {
                  return this.bsc;
                },
                set: function set(bsc) {
                  this.bsc = bsc;
                  resolve();
                }
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function _binanceChainListener() {
    return _ref.apply(this, arguments);
  };
}();

var useEagerConnect = function useEagerConnect() {
  var login = useWallet();
  React.useEffect(function () {
    var connectorId = window.localStorage.getItem(connectorLocalStorageKey);

    if (connectorId) {
      var isConnectorBinanceChain = connectorId === connectorNames.bsc;
      var isBinanceChainDefined = Reflect.has(window, 'BinanceChain'); // Currently BSC extension doesn't always inject in time.
      // We must check to see if it exists, and if not, wait for it before proceeding.

      if (isConnectorBinanceChain && !isBinanceChainDefined) {
        _binanceChainListener().then(function () {
          return login(connectorId);
        });

        return;
      }

      login(connectorId);
    }
  }, [login]);
};

/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the provider change
 */

var useWeb3 = function useWeb3() {
  var _useState = React.useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      balance = _useState2[0],
      setBalance = _useState2[1];

  var _useConfig = useConfig(),
      config = _useConfig.config;

  var httpProvider;
  var web3NoAccount;
  var rpc = config.rpcUrls[config.chainId];

  if (rpc) {
    httpProvider = new Web3__default['default'].providers.HttpProvider(rpc);
    web3NoAccount = new Web3__default['default'](httpProvider);
  }

  var _useWeb3React = core$1.useWeb3React(),
      library = _useWeb3React.library,
      account = _useWeb3React.account;

  var refEth = React.useRef(library);

  var _useState3 = React.useState(library ? new Web3__default['default'](library) : web3NoAccount),
      _useState4 = _slicedToArray(_useState3, 2),
      web3 = _useState4[0],
      setweb3 = _useState4[1];

  React.useEffect(function () {
    if (library !== refEth.current) {
      setweb3(library ? new Web3__default['default'](library) : web3NoAccount);
      refEth.current = library;
    }
  }, [library]);
  React.useEffect(function () {
    var fetch = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var bal;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return web3.eth.getBalance(account);

              case 2:
                bal = _context.sent;
                setBalance(bal);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetch() {
        return _ref.apply(this, arguments);
      };
    }();

    if (account && web3) {
      fetch();
    }
  }, [web3, account]);
  return {
    web3: web3,
    account: account,
    balance: balance,
    displayAccount: "".concat(account === null || account === void 0 ? void 0 : account.substring(0, 4), "...").concat(account === null || account === void 0 ? void 0 : account.substring((account === null || account === void 0 ? void 0 : account.length) - 4, account === null || account === void 0 ? void 0 : account.length)),
    connected: account ? true : false
  };
};

var lp_abi = [
	{
		inputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Burn",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		name: "Mint",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			}
		],
		name: "Sync",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		constant: true,
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "MINIMUM_LIQUIDITY",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "PERMIT_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "burn",
		outputs: [
			{
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getReserves",
		outputs: [
			{
				internalType: "uint112",
				name: "_reserve0",
				type: "uint112"
			},
			{
				internalType: "uint112",
				name: "_reserve1",
				type: "uint112"
			},
			{
				internalType: "uint32",
				name: "_blockTimestampLast",
				type: "uint32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_token0",
				type: "address"
			},
			{
				internalType: "address",
				name: "_token1",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "kLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price0CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price1CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "skim",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "swap",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "sync",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token0",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token1",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	}
];

var ERC20_ABI = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address"
			},
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			},
			{
				name: "_spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	}
];

/**
 * 
 * A easy to use hook, to get token info and price of tokens of an LP token
 * 
 * @param {Address Of LP Token} address 
 * @param {Symbol of token to use as base token to calculate price} baseTokenSymbol 
 * @param {Address of token to use as base token to calculate price} baseTokenAddress 
 * @returns 
 * 
 * If baseTokenSymbol is provided, it will be given priority over baseTokenAddress
 * 
 */

var useLp = function useLp(address, baseTokenSymbol, baseTokenAddress) {
  var _useWeb = useWeb3(),
      web3 = _useWeb.web3;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = React.useState({
    name: undefined,
    symbol: undefined,
    token0: undefined,
    token1: undefined
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      lp = _useState4[0],
      setLp = _useState4[1];

  var _useState5 = React.useState({
    name: undefined,
    symbol: undefined,
    decimals: undefined,
    address: undefined,
    totalSupply: undefined,
    lpBalance: undefined
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      token0 = _useState6[0],
      setToken0 = _useState6[1];

  var _useState7 = React.useState({
    name: undefined,
    symbol: undefined,
    decimals: undefined,
    address: undefined,
    totalSupply: undefined,
    lpBalance: undefined
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      token1 = _useState8[0],
      setToken1 = _useState8[1];

  var _useState9 = React.useState({
    token0: undefined,
    token1: undefined,
    basePrice: undefined
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      price = _useState10[0],
      setPrice = _useState10[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var multicall, lpCall, data1, lpresult, tokensCall, data2, token0result, token1result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              multicall = new ethereumMulticall.Multicall({
                web3Instance: web3,
                tryAggregate: true
              });
              lpCall = [{
                reference: "lp",
                contractAddress: address,
                abi: lp_abi,
                calls: [{
                  methodName: "token0",
                  methodParameters: []
                }, {
                  methodName: "token1",
                  methodParameters: []
                }, {
                  methodName: "name",
                  methodParameters: []
                }, {
                  methodName: "symbol",
                  methodParameters: []
                }]
              }];
              _context.next = 6;
              return multicall.call(lpCall);

            case 6:
              data1 = _context.sent;
              lpresult = data1.results.lp.callsReturnContext;
              setLp({
                token0: lpresult[0].returnValues[0],
                token1: lpresult[1].returnValues[0],
                name: lpresult[2].returnValues[0],
                symbol: lpresult[3].returnValues[0]
              });
              tokensCall = [{
                reference: "token0",
                contractAddress: lpresult[0].returnValues[0],
                abi: ERC20_ABI,
                calls: [{
                  methodName: "name",
                  methodParameters: []
                }, {
                  methodName: "symbol",
                  methodParameters: []
                }, {
                  methodName: "decimals",
                  methodParameters: []
                }, {
                  methodName: "totalSupply",
                  methodParameters: []
                }, {
                  methodName: "balanceOf",
                  methodParameters: [address]
                }]
              }, {
                reference: "token1",
                contractAddress: lpresult[1].returnValues[0],
                abi: ERC20_ABI,
                calls: [{
                  methodName: "name",
                  methodParameters: []
                }, {
                  methodName: "symbol",
                  methodParameters: []
                }, {
                  methodName: "decimals",
                  methodParameters: []
                }, {
                  methodName: "totalSupply",
                  methodParameters: []
                }, {
                  methodName: "balanceOf",
                  methodParameters: [address]
                }]
              }];
              _context.next = 12;
              return multicall.call(tokensCall);

            case 12:
              data2 = _context.sent;
              token0result = data2.results.token0.callsReturnContext;
              token1result = data2.results.token1.callsReturnContext;
              setToken0({
                address: lp.token0,
                name: token0result[0].returnValues[0],
                symbol: token0result[1].returnValues[0],
                decimals: token0result[2].returnValues[0],
                totalSupply: token0result[3].returnValues[0],
                lpBalance: token0result[4].returnValues[0]
              });
              setToken1({
                address: lp.token1,
                name: token1result[0].returnValues[0],
                symbol: token1result[1].returnValues[0],
                decimals: token1result[2].returnValues[0],
                totalSupply: token1result[3].returnValues[0],
                lpBalance: token1result[4].returnValues[0]
              });
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](1);
              console.log("Error During Multicall: ".concat(_context.t0));

            case 22:
              setLoading(false);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 19]]);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  React.useEffect(function () {
    if (web3) fetchData();
  }, [web3]);
  React.useEffect(function () {
    if (lp.name && token0.name && token1.name) {
      var token0Balance = new BigNumber__default$1['default'](token0.lpBalance.hex, 16);
      var token1Balance = new BigNumber__default$1['default'](token1.lpBalance.hex, 16);
      var token0Price = token1Balance.div(new BigNumber__default$1['default'](10).exponentiatedBy(token1.decimals)).div(token0Balance.div(new BigNumber__default$1['default'](10).exponentiatedBy(token0.decimals)));
      var token1Price = token0Balance.div(new BigNumber__default$1['default'](10).exponentiatedBy(token0.decimals)).div(token1Balance.div(new BigNumber__default$1['default'](10).exponentiatedBy(token1.decimals)));
      setPrice({
        token0: token0Price,
        token1: token1Price,
        basePrice: token0.symbol === baseTokenSymbol ? token0Price : token1.symbol === baseTokenSymbol ? token1Price : token0.address === baseTokenAddress ? token0Price : token1.address === baseTokenAddress ? token1Price : "Invalid Symbol/Address"
      });
    }
  }, [lp, token0, token1]);
  return {
    lp: lp,
    token0: token0,
    token1: token1,
    price: price,
    loading: loading
  };
};
/**
 * Use this hook with token-native lp to get usd price
 * 
 * @param {Address of TOKEN-NATIVE lp pair} address 
 * @returns 
 */

var useUSDLp = function useUSDLp(address) {
  var _useConfig = useConfig(),
      config = _useConfig.config;

  var nativeUsdLp = config.nativeUsdLp,
      wrappedNative = config.wrappedNative;
  var native_usd_lp = useLp(nativeUsdLp.address, wrappedNative.symbol);
  var token_native_lp = useLp(address, wrappedNative.symbol);

  var _useState11 = React.useState(undefined),
      _useState12 = _slicedToArray(_useState11, 2),
      price = _useState12[0],
      setPrice = _useState12[1];

  React.useEffect(function () {
    var _native_usd_lp$price, _token_native_lp$pric;

    if (native_usd_lp !== null && native_usd_lp !== void 0 && (_native_usd_lp$price = native_usd_lp.price) !== null && _native_usd_lp$price !== void 0 && _native_usd_lp$price.basePrice && token_native_lp !== null && token_native_lp !== void 0 && (_token_native_lp$pric = token_native_lp.price) !== null && _token_native_lp$pric !== void 0 && _token_native_lp$pric.basePrice && !native_usd_lp.loading && !token_native_lp.loading) {
      var _price = native_usd_lp.price.basePrice.div(token_native_lp.price.basePrice);

      setPrice(_price);
    }
  }, [native_usd_lp.loading, token_native_lp.loading]);
  return {
    lp: token_native_lp.lp,
    token0: token_native_lp.token0,
    token1: token_native_lp.token1,
    loading: token_native_lp.loading || nativeUsdLp.loading,
    price: _objectSpread2(_objectSpread2({}, token_native_lp.price), {}, {
      usdPrice: price
    })
  };
};

var ERC721_ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string"
			},
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			},
			{
				internalType: "address",
				name: "signer",
				type: "address"
			},
			{
				internalType: "string",
				name: "contractURI",
				type: "string"
			},
			{
				internalType: "string",
				name: "tokenURIPrefix",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "address[]",
				name: "recipients",
				type: "address[]"
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "bps",
				type: "uint256[]"
			}
		],
		name: "SecondarySaleFees",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "SignerAdded",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "SignerRemoved",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "addSigner",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "burn",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "minter",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256"
					}
				],
				internalType: "struct ERC721Base.Fee[]",
				name: "fees",
				type: "tuple[]"
			}
		],
		name: "calculateHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "contractURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "fees",
		outputs: [
			{
				internalType: "address payable",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256"
			}
		],
		name: "getFeeBps",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256"
			}
		],
		name: "getFeeRecipients",
		outputs: [
			{
				internalType: "address payable[]",
				name: "",
				type: "address[]"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "isOwner",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "isSigner",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "minter",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256"
					}
				],
				internalType: "struct ERC721Base.Fee[]",
				name: "_fees",
				type: "tuple[]"
			},
			{
				internalType: "string",
				name: "tokenURI",
				type: "string"
			}
		],
		name: "mint",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256"
					}
				],
				internalType: "struct ERC721Base.Fee[]",
				name: "_fees",
				type: "tuple[]"
			},
			{
				internalType: "string",
				name: "tokenURI",
				type: "string"
			}
		],
		name: "mint",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "removeSigner",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "renounceSigner",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "string",
				name: "contractURI",
				type: "string"
			}
		],
		name: "setContractURI",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "string",
				name: "tokenURIPrefix",
				type: "string"
			}
		],
		name: "setTokenURIPrefix",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenOfOwnerByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "tokenURIPrefix",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "minter",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256"
					}
				],
				internalType: "struct ERC721Base.Fee[]",
				name: "fees",
				type: "tuple[]"
			}
		],
		name: "validationHash",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var ERC1155_ABI = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_name",
				type: "string"
			},
			{
				internalType: "string",
				name: "_symbol",
				type: "string"
			},
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			},
			{
				internalType: "address",
				name: "signer",
				type: "address"
			},
			{
				internalType: "string",
				name: "contractURI",
				type: "string"
			},
			{
				internalType: "string",
				name: "tokenURIPrefix",
				type: "string"
			},
			{
				internalType: "uint256",
				name: "royaltyFee",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "_operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "_approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "fee",
				type: "uint256"
			}
		],
		name: "RoyaltyFeeUpdated",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "address[]",
				name: "recipients",
				type: "address[]"
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "bps",
				type: "uint256[]"
			}
		],
		name: "SecondarySaleFees",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "SignerAdded",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "SignerRemoved",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "_from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "_to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "_ids",
				type: "uint256[]"
			},
			{
				indexed: false,
				internalType: "uint256[]",
				name: "_values",
				type: "uint256[]"
			}
		],
		name: "TransferBatch",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "_from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "_to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_id",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "_value",
				type: "uint256"
			}
		],
		name: "TransferSingle",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "_value",
				type: "string"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "_id",
				type: "uint256"
			}
		],
		name: "URI",
		type: "event"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "addSigner",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "_owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address[]",
				name: "_owners",
				type: "address[]"
			},
			{
				internalType: "uint256[]",
				name: "_ids",
				type: "uint256[]"
			}
		],
		name: "balanceOfBatch",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_value",
				type: "uint256"
			}
		],
		name: "burn",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "contractURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "creators",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "fees",
		outputs: [
			{
				internalType: "address payable",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256"
			}
		],
		name: "getFeeBps",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256"
			}
		],
		name: "getFeeRecipients",
		outputs: [
			{
				internalType: "address payable[]",
				name: "",
				type: "address[]"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "_owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "_operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "isOwner",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "isSigner",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			},
			{
				components: [
					{
						internalType: "address payable",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256"
					}
				],
				internalType: "struct ERC1155Base.Fee[]",
				name: "fees",
				type: "tuple[]"
			},
			{
				internalType: "uint256",
				name: "supply",
				type: "uint256"
			},
			{
				internalType: "string",
				name: "uri",
				type: "string"
			}
		],
		name: "mint",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "removeSigner",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "renounceSigner",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_from",
				type: "address"
			},
			{
				internalType: "address",
				name: "_to",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "_ids",
				type: "uint256[]"
			},
			{
				internalType: "uint256[]",
				name: "_values",
				type: "uint256[]"
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes"
			}
		],
		name: "safeBatchTransferFrom",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_from",
				type: "address"
			},
			{
				internalType: "address",
				name: "_to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "_value",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "_operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "_approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "fee",
				type: "uint256"
			}
		],
		name: "setBaseRoyaltyFee",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "string",
				name: "contractURI",
				type: "string"
			}
		],
		name: "setContractURI",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "string",
				name: "tokenURIPrefix",
				type: "string"
			}
		],
		name: "setTokenURIPrefix",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "tokenURIPrefix",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256"
			}
		],
		name: "uri",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var getContract = function getContract(abi, address, web3) {
  if (web3) return new web3.eth.Contract(abi, address);
};

var useERC721 = function useERC721(address) {
  var _useWeb = useWeb3(),
      web3 = _useWeb.web3;

  return React.useMemo(function () {
    return getContract(ERC721_ABI, address, web3);
  }, [web3]);
};
var useERC1155 = function useERC1155(address) {
  var _useWeb2 = useWeb3(),
      web3 = _useWeb2.web3;

  return React.useMemo(function () {
    return getContract(ERC1155_ABI, address, web3);
  }, [web3]);
};
var useERC20 = function useERC20(address) {
  var _useWeb3 = useWeb3(),
      web3 = _useWeb3.web3;

  return React.useMemo(function () {
    return getContract(ERC20_ABI, address, web3);
  }, [web3]);
};

var STATE = {
  IDLE: "IDLE",
  BUSY: "BUSY",
  FAILED: "FAILED",
  SUCCEED: "SUCCEED"
};

var ZERO_BALANCE = new BigNumber__default$1['default'](0);
var useERC20Approval = function useERC20Approval(erc20Address, toApprove, requiredApprovedBalance) {
  var _useState = React.useState(ZERO_BALANCE),
      _useState2 = _slicedToArray(_useState, 2),
      approvedBalance = _useState2[0],
      setApprovedBalance = _useState2[1];

  var _useState3 = React.useState(STATE.IDLE),
      _useState4 = _slicedToArray(_useState3, 2),
      approveState = _useState4[0],
      setApproveState = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isApproved = _useState6[0],
      setIsApproved = _useState6[1];

  var _useWeb = useWeb3(),
      account = _useWeb.account;

  var token = useERC20(erc20Address);

  var fetchApprovedBalance = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var bal, approveBal;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(erc20Address === ZERO_ADDRESS)) {
                _context.next = 3;
                break;
              }

              setIsApproved(true);
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              _context.next = 6;
              return token.methods.allowance(account, toApprove).call();

            case 6:
              bal = _context.sent;
              approveBal = new BigNumber__default$1['default'](bal);
              setApprovedBalance(approveBal);
              setIsApproved(approveBal.gte(new BigNumber__default$1['default'](requiredApprovedBalance ? requiredApprovedBalance : 1)));
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 12]]);
    }));

    return function fetchApprovedBalance() {
      return _ref.apply(this, arguments);
    };
  }();

  React.useEffect(function () {
    if (account && token) {
      fetchApprovedBalance();
    }
  }, [account, token]);

  var approve = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setApproveState(STATE.BUSY);
              _context2.next = 4;
              return token.methods.approve(toApprove, MAX_UINT).send({
                from: account
              });

            case 4:
              _context2.next = 6;
              return fetchApprovedBalance();

            case 6:
              setApproveState(STATE.SUCCEED);
              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              setApproveState(STATE.FAILED);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function approve() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    approvedBalance: approvedBalance,
    isApproved: isApproved,
    approveState: approveState,
    approve: approve
  };
};
var useERC721Approval = function useERC721Approval(erc721Address, toApprove) {
  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isApproved = _useState8[0],
      setIsApproved = _useState8[1];

  var _useState9 = React.useState(STATE.BUSY),
      _useState10 = _slicedToArray(_useState9, 2),
      approveState = _useState10[0],
      setApproveState = _useState10[1];

  var _useWeb2 = useWeb3(),
      account = _useWeb2.account;

  var contract = useERC721(erc721Address);

  var fetchApproved = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var _isApproved;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setApproveState(STATE.BUSY);
              _context3.next = 3;
              return contract.methods.isApprovedForAll(account, toApprove).call();

            case 3:
              _isApproved = _context3.sent;
              setIsApproved(_isApproved);
              setApproveState(STATE.SUCCEED);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fetchApproved() {
      return _ref3.apply(this, arguments);
    };
  }();

  React.useEffect(function () {
    if (account && contract) {
      fetchApproved();
    }
  }, [account, contract]);

  var approve = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setApproveState(STATE.BUSY);
              _context4.next = 4;
              return contract.methods.setApprovalForAll(toApprove, true).send({
                from: account
              });

            case 4:
              _context4.next = 6;
              return fetchApproved();

            case 6:
              setApproveState(STATE.SUCCEED);
              _context4.next = 13;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);
              setApproveState(STATE.FAILED);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));

    return function approve() {
      return _ref4.apply(this, arguments);
    };
  }();

  return {
    isApproved: isApproved,
    approveState: approveState,
    approve: approve
  };
};

var useERC20Balance = function useERC20Balance(address) {
  var _useState = React.useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      balance = _useState2[0],
      setBalance = _useState2[1];

  var contract = useERC20(address);

  var _useWeb = useWeb3(),
      account = _useWeb.account;

  React.useEffect(function () {
    var fetch = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var bal;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return contract.methods.balanceOf(account).call();

              case 2:
                bal = _context.sent;
                setBalance(bal);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetch() {
        return _ref.apply(this, arguments);
      };
    }();

    if (contract) {
      fetch();
    }
  }, [contract]);
  return balance;
};

var useInputValue = function useInputValue(maxValue) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "18";
  var fixedDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      _setValue = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      max = _useState4[0],
      _setMax = _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      maxDisplayValue = _useState8[0],
      setMaxDisplayValue = _useState8[1];

  React.useEffect(function () {
    setMaxDisplayValue(toLower(maxValue, decimals).toFixed(fixedDecimals));
  }, [maxValue]);

  var setValue = function setValue(_value) {
    _setValue(_value !== null && _value !== void 0 ? _value : 0);

    if (_value !== '' && isNaN(_value)) {
      setError("Invalid Number!");
      return;
    }

    if (!_value || _value === "" || _value === "0") {
      setError(null);
      return;
    }
    if (maxDisplayValue === _value) return;

    _setMax(false);

    if (toUpper(_value, decimals).gt(BigNumber__default$1['default'](maxValue))) setError("Invalid Amount!");else setError(null);
  };

  var getValue = function getValue() {
    return max ? new BigNumber__default$1['default'](maxValue).toString() : toUpper(value, decimals, true).toString();
  };

  var selectMaxValue = function selectMaxValue() {
    setError(null);

    _setMax(true);

    _setValue(toLower(maxValue, decimals).toFixed(fixedDecimals));
  };

  return {
    value: value,
    maxDisplayValue: maxDisplayValue,
    error: error,
    setValue: setValue,
    getValue: getValue,
    selectMaxValue: selectMaxValue
  };
};

var useWaleltSign = function useWaleltSign() {
  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      signature = _useState2[0],
      setSignature = _useState2[1];

  var _useState3 = React.useState(STATE.IDLE),
      _useState4 = _slicedToArray(_useState3, 2),
      signState = _useState4[0],
      setSignState = _useState4[1];

  var _useWeb = useWeb3(),
      account = _useWeb.account,
      web3 = _useWeb.web3;

  var sign = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(hash, pauseSuccessState) {
      var sig;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // const value = ethers.utils.arrayify(hash);
              setSignState(STATE.BUSY);
              _context.next = 4;
              return web3.eth.personal.sign(hash, account);

            case 4:
              sig = _context.sent;
              setSignature(sig);
              if (!pauseSuccessState) setSignState(STATE.SUCCEED);
              return _context.abrupt("return", sig);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              setSignState(STATE.FAILED);
              return _context.abrupt("return", null);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function sign(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    sign: sign,
    signState: signState,
    signature: signature,
    setSignState: setSignState,
    setSignature: setSignature
  };
};

exports.CONSTANTS = constants;
exports.WalletProvider = WalletProvider;
exports.ZERO_BALANCE = ZERO_BALANCE;
exports.addTokenToWallet = addTokenToWallet;
exports.connectorNames = connectorNames;
exports.getTimeLeft = getTimeLeft;
exports.switchChain = switchChain;
exports.toLower = toLower;
exports.toUpper = toUpper;
exports.useConnectors = useConnectors;
exports.useERC1155 = useERC1155;
exports.useERC20 = useERC20;
exports.useERC20Approval = useERC20Approval;
exports.useERC20Balance = useERC20Balance;
exports.useERC721 = useERC721;
exports.useERC721Approval = useERC721Approval;
exports.useEagerConnect = useEagerConnect;
exports.useInputValue = useInputValue;
exports.useLp = useLp;
exports.useUSDLp = useUSDLp;
exports.useWaleltSign = useWaleltSign;
exports.useWalletModal = useWalletModal;
exports.useWeb3 = useWeb3;
