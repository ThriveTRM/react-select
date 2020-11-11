"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = arrowRenderer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function arrowRenderer(_ref) {
  var onMouseDown = _ref.onMouseDown;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "Select-arrow",
    onMouseDown: onMouseDown
  });
}

;
arrowRenderer.propTypes = {
  onMouseDown: _propTypes["default"].func
};