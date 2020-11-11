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

var Value = /*#__PURE__*/function (_React$Component) {
  _inherits(Value, _React$Component);

  var _super = _createSuper(Value);

  function Value(props) {
    var _this;

    _classCallCheck(this, Value);

    _this = _super.call(this, props);
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_this));
    _this.onRemove = _this.onRemove.bind(_assertThisInitialized(_this));
    _this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Value, [{
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      if (event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (this.props.onClick) {
        event.stopPropagation();
        this.props.onClick(this.props.value, event);
        return;
      }

      if (this.props.value.href) {
        event.stopPropagation();
      }
    }
  }, {
    key: "onRemove",
    value: function onRemove(event) {
      event.preventDefault();
      event.stopPropagation();
      this.props.onRemove(this.props.value);
    }
  }, {
    key: "handleTouchEndRemove",
    value: function handleTouchEndRemove(event) {
      // Check if the view is being dragged, In this case
      // we don't want to fire the click event (because the user only wants to scroll)
      if (this.dragging) return; // Fire the mouse events

      this.onRemove(event);
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
    key: "renderRemoveIcon",
    value: function renderRemoveIcon() {
      if (this.props.disabled || !this.props.onRemove) return;
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "Select-value-icon",
        "aria-hidden": "true",
        onMouseDown: this.onRemove,
        onTouchEnd: this.handleTouchEndRemove,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove
      }, "\xD7");
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var className = 'Select-value-label';
      return this.props.onClick || this.props.value.href ? /*#__PURE__*/_react["default"].createElement("a", {
        className: className,
        href: this.props.value.href,
        target: this.props.value.target,
        onMouseDown: this.handleMouseDown,
        onTouchEnd: this.handleMouseDown
      }, this.props.children) : /*#__PURE__*/_react["default"].createElement("span", {
        className: className,
        role: "option",
        "aria-selected": "true",
        id: this.props.id
      }, this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('Select-value', this.props.value.className),
        style: this.props.value.style,
        title: this.props.value.title
      }, this.renderRemoveIcon(), this.renderLabel());
    }
  }]);

  return Value;
}(_react["default"].Component);

;
Value.propTypes = {
  children: _propTypes["default"].node,
  disabled: _propTypes["default"].bool,
  // disabled prop passed to ReactSelect
  id: _propTypes["default"].string,
  // Unique id for the value - used for aria
  onClick: _propTypes["default"].func,
  // method to handle click on value label
  onRemove: _propTypes["default"].func,
  // method to handle removal of the value
  value: _propTypes["default"].object.isRequired // the option object for this value

};
var _default = Value;
exports["default"] = _default;