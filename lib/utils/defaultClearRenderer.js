"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = clearRenderer;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function clearRenderer() {
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "Select-clear",
    dangerouslySetInnerHTML: {
      __html: '&times;'
    }
  });
}

;