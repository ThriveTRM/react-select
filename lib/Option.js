"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Option = /*#__PURE__*/function (_React$Component) {
  _inherits(Option, _React$Component);

  var _super = _createSuper(Option);

  function Option(props) {
    var _this;

    _classCallCheck(this, Option);

    _this = _super.call(this, props);
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_assertThisInitialized(_this));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Option, [{
    key: "blockEvent",
    value: function blockEvent(event) {
      event.preventDefault();
      event.stopPropagation();

      if (event.target.tagName !== 'A' || !('href' in event.target)) {
        return;
      }

      if (event.target.target) {
        window.open(event.target.href, event.target.target);
      } else {
        window.location.href = event.target.href;
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      event.preventDefault();
      event.stopPropagation();
      this.props.onSelect(this.props.option, event);
    }
  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter(event) {
      this.onFocus(event);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      this.onFocus(event);
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      // Check if the view is being dragged, In this case
      // we don't want to fire the click event (because the user only wants to scroll)
      if (this.dragging) return;
      this.handleMouseDown(event);
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      // Set a flag that the view is being dragged
      this.dragging = true;
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      // Set a flag that the view is not being dragged
      this.dragging = false;
    }
  }, {
    key: "onFocus",
    value: function onFocus(event) {
      if (!this.props.isFocused) {
        this.props.onFocus(this.props.option, event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          option = _this$props.option,
          instancePrefix = _this$props.instancePrefix,
          optionIndex = _this$props.optionIndex;
      var className = (0, _classnames["default"])(this.props.className, option.className);
      return option.disabled ? /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        onMouseDown: this.blockEvent,
        onClick: this.blockEvent
      }, this.props.children) : /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        style: option.style,
        role: "option",
        onMouseDown: this.handleMouseDown,
        onMouseEnter: this.handleMouseEnter,
        onMouseMove: this.handleMouseMove,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        id: instancePrefix + '-option-' + optionIndex,
        title: option.title
      }, this.props.children);
    }
  }]);

  return Option;
}(_react["default"].Component);

;
Option.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  // className (based on mouse position)
  instancePrefix: _propTypes["default"].string.isRequired,
  // unique prefix for the ids (used for aria)
  isDisabled: _propTypes["default"].bool,
  // the option is disabled
  isFocused: _propTypes["default"].bool,
  // the option is focused
  isSelected: _propTypes["default"].bool,
  // the option is selected
  onFocus: _propTypes["default"].func,
  // method to handle mouseEnter on option element
  onSelect: _propTypes["default"].func,
  // method to handle click on option element
  onUnfocus: _propTypes["default"].func,
  // method to handle mouseLeave on option element
  option: _propTypes["default"].object.isRequired,
  // object that is base for that option
  optionIndex: _propTypes["default"].number // index of the option, used to generate unique ids for aria

};
var _default = Option;
exports["default"] = _default;