"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("./Select"));

var _stripDiacritics = _interopRequireDefault(require("./utils/stripDiacritics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var propTypes = {
  autoload: _propTypes["default"].bool.isRequired,
  // automatically call the `loadOptions` prop on-mount; defaults to true
  cache: _propTypes["default"].any,
  // object to use to cache results; set to null/false to disable caching
  children: _propTypes["default"].func.isRequired,
  // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
  ignoreAccents: _propTypes["default"].bool,
  // strip diacritics when filtering; defaults to true
  ignoreCase: _propTypes["default"].bool,
  // perform case-insensitive filtering; defaults to true
  loadOptions: _propTypes["default"].func.isRequired,
  // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
  loadingPlaceholder: _propTypes["default"].oneOfType([// replaces the placeholder while options are loading
  _propTypes["default"].string, _propTypes["default"].node]),
  multi: _propTypes["default"].bool,
  // multi-value input
  noResultsText: _propTypes["default"].oneOfType([// field noResultsText, displayed when no options come back from the server
  _propTypes["default"].string, _propTypes["default"].node]),
  onChange: _propTypes["default"].func,
  // onChange handler: function (newValue) {}
  onInputChange: _propTypes["default"].func,
  // optional for keeping track of what is being typed
  options: _propTypes["default"].array.isRequired,
  // array of options
  placeholder: _propTypes["default"].oneOfType([// field placeholder, displayed when there's no value (shared with Select)
  _propTypes["default"].string, _propTypes["default"].node]),
  searchPromptText: _propTypes["default"].oneOfType([// label to prompt for search input
  _propTypes["default"].string, _propTypes["default"].node]),
  value: _propTypes["default"].any // initial field value

};
var defaultCache = {};
var defaultProps = {
  autoload: true,
  cache: defaultCache,
  children: defaultChildren,
  ignoreAccents: true,
  ignoreCase: true,
  loadingPlaceholder: 'Loading...',
  options: [],
  searchPromptText: 'Type to search'
};

var Async = /*#__PURE__*/function (_Component) {
  _inherits(Async, _Component);

  var _super = _createSuper(Async);

  function Async(props, context) {
    var _this;

    _classCallCheck(this, Async);

    _this = _super.call(this, props, context);
    _this._cache = props.cache === defaultCache ? {} : props.cache;
    _this.state = {
      inputValue: '',
      isLoading: false,
      options: props.options
    };
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Async, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var autoload = this.props.autoload;

      if (autoload) {
        this.loadOptions('');
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.options !== this.props.options) {
        this.setState({
          options: nextProps.options
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._callback = null;
    }
  }, {
    key: "loadOptions",
    value: function loadOptions(inputValue) {
      var _this2 = this;

      var loadOptions = this.props.loadOptions;
      var cache = this._cache;

      if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
        this.setState({
          options: cache[inputValue]
        });
        return;
      }

      var callback = function callback(error, data) {
        if (callback === _this2._callback) {
          _this2._callback = null;
          var options = data && data.options || [];

          if (cache) {
            cache[inputValue] = options;
          }

          _this2.setState({
            isLoading: false,
            options: options
          });
        }
      }; // Ignore all but the most recent request


      this._callback = callback;
      var promise = loadOptions(inputValue, callback);

      if (promise) {
        promise.then(function (data) {
          return callback(null, data);
        }, function (error) {
          return callback(error);
        });
      }

      if (this._callback && !this.state.isLoading) {
        this.setState({
          isLoading: true
        });
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(inputValue) {
      var _this$props = this.props,
          ignoreAccents = _this$props.ignoreAccents,
          ignoreCase = _this$props.ignoreCase,
          onInputChange = _this$props.onInputChange;
      var transformedInputValue = inputValue;

      if (ignoreAccents) {
        transformedInputValue = (0, _stripDiacritics["default"])(transformedInputValue);
      }

      if (ignoreCase) {
        transformedInputValue = transformedInputValue.toLowerCase();
      }

      if (onInputChange) {
        onInputChange(transformedInputValue);
      }

      this.setState({
        inputValue: inputValue
      });
      this.loadOptions(transformedInputValue); // Return the original input value to avoid modifying the user's view of the input while typing.

      return inputValue;
    }
  }, {
    key: "noResultsText",
    value: function noResultsText() {
      var _this$props2 = this.props,
          loadingPlaceholder = _this$props2.loadingPlaceholder,
          noResultsText = _this$props2.noResultsText,
          searchPromptText = _this$props2.searchPromptText;
      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          isLoading = _this$state.isLoading;

      if (isLoading) {
        return loadingPlaceholder;
      }

      if (inputValue && noResultsText) {
        return noResultsText;
      }

      return searchPromptText;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.select.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          loadingPlaceholder = _this$props3.loadingPlaceholder,
          multi = _this$props3.multi,
          onChange = _this$props3.onChange,
          placeholder = _this$props3.placeholder,
          value = _this$props3.value;
      var _this$state2 = this.state,
          isLoading = _this$state2.isLoading,
          options = _this$state2.options;
      var props = {
        noResultsText: this.noResultsText(),
        placeholder: isLoading ? loadingPlaceholder : placeholder,
        options: isLoading && loadingPlaceholder ? [] : options,
        ref: function ref(_ref) {
          return _this3.select = _ref;
        }
      };
      return children(_objectSpread(_objectSpread(_objectSpread({}, this.props), props), {}, {
        isLoading: isLoading,
        onInputChange: this.onInputChange
      }));
    }
  }]);

  return Async;
}(_react.Component);

exports["default"] = Async;
Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

function defaultChildren(props) {
  return /*#__PURE__*/_react["default"].createElement(_Select["default"], props);
}