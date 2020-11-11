"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("./Select"));

var _defaultFilterOptions = _interopRequireDefault(require("./utils/defaultFilterOptions"));

var _defaultMenuRenderer = _interopRequireDefault(require("./utils/defaultMenuRenderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var CreatableSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(CreatableSelect, _React$Component);

  var _super = _createSuper(CreatableSelect);

  function CreatableSelect(props, context) {
    var _this;

    _classCallCheck(this, CreatableSelect);

    _this = _super.call(this, props, context);
    _this.filterOptions = _this.filterOptions.bind(_assertThisInitialized(_this));
    _this.menuRenderer = _this.menuRenderer.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onOptionSelect = _this.onOptionSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CreatableSelect, [{
    key: "createNewOption",
    value: function createNewOption() {
      var _this$props = this.props,
          isValidNewOption = _this$props.isValidNewOption,
          newOptionCreator = _this$props.newOptionCreator,
          onNewOptionClick = _this$props.onNewOptionClick,
          _this$props$options = _this$props.options,
          options = _this$props$options === void 0 ? [] : _this$props$options,
          shouldKeyDownEventCreateNewOption = _this$props.shouldKeyDownEventCreateNewOption;

      if (isValidNewOption({
        label: this.inputValue
      })) {
        var option = newOptionCreator({
          label: this.inputValue,
          labelKey: this.labelKey,
          valueKey: this.valueKey
        });

        var _isOptionUnique = this.isOptionUnique({
          option: option
        }); // Don't add the same option twice.


        if (_isOptionUnique) {
          if (onNewOptionClick) {
            onNewOptionClick(option);
          } else {
            options.unshift(option);
            this.select.selectValue(option);
          }
        }
      }
    }
  }, {
    key: "filterOptions",
    value: function filterOptions() {
      var _this$props2 = this.props,
          filterOptions = _this$props2.filterOptions,
          isValidNewOption = _this$props2.isValidNewOption,
          options = _this$props2.options,
          promptTextCreator = _this$props2.promptTextCreator; // TRICKY Check currently selected options as well.
      // Don't display a create-prompt for a value that's selected.
      // This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

      var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];
      var filteredOptions = filterOptions.apply(void 0, arguments) || [];

      if (isValidNewOption({
        label: this.inputValue
      })) {
        var _newOptionCreator = this.props.newOptionCreator;

        var option = _newOptionCreator({
          label: this.inputValue,
          labelKey: this.labelKey,
          valueKey: this.valueKey
        }); // TRICKY Compare to all options (not just filtered options) in case option has already been selected).
        // For multi-selects, this would remove it from the filtered list.


        var _isOptionUnique2 = this.isOptionUnique({
          option: option,
          options: excludeOptions.concat(filteredOptions)
        });

        if (_isOptionUnique2) {
          var prompt = promptTextCreator(this.inputValue);
          this._createPlaceholderOption = _newOptionCreator({
            label: prompt,
            labelKey: this.labelKey,
            valueKey: this.valueKey
          });
          filteredOptions.unshift(this._createPlaceholderOption);
        }
      }

      return filteredOptions;
    }
  }, {
    key: "isOptionUnique",
    value: function isOptionUnique(_ref) {
      var option = _ref.option,
          options = _ref.options;
      var isOptionUnique = this.props.isOptionUnique;
      options = options || this.select.filterOptions();
      return isOptionUnique({
        labelKey: this.labelKey,
        option: option,
        options: options,
        valueKey: this.valueKey
      });
    }
  }, {
    key: "menuRenderer",
    value: function menuRenderer(params) {
      var menuRenderer = this.props.menuRenderer;
      return menuRenderer(_objectSpread(_objectSpread({}, params), {}, {
        onSelect: this.onOptionSelect,
        selectValue: this.onOptionSelect
      }));
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(input) {
      var onInputChange = this.props.onInputChange;

      if (onInputChange) {
        onInputChange(input);
      } // This value may be needed in between Select mounts (when this.select is null)


      this.inputValue = input;
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      var _this$props3 = this.props,
          shouldKeyDownEventCreateNewOption = _this$props3.shouldKeyDownEventCreateNewOption,
          onInputKeyDown = _this$props3.onInputKeyDown;
      var focusedOption = this.select.getFocusedOption();

      if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption({
        keyCode: event.keyCode
      })) {
        this.createNewOption(); // Prevent decorated Select from doing anything additional with this keyDown event

        event.preventDefault();
      } else if (onInputKeyDown) {
        onInputKeyDown(event);
      }
    }
  }, {
    key: "onOptionSelect",
    value: function onOptionSelect(option, event) {
      if (option === this._createPlaceholderOption) {
        this.createNewOption();
      } else {
        this.select.selectValue(option);
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.select.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          newOptionCreator = _this$props4.newOptionCreator,
          shouldKeyDownEventCreateNewOption = _this$props4.shouldKeyDownEventCreateNewOption,
          restProps = _objectWithoutProperties(_this$props4, ["newOptionCreator", "shouldKeyDownEventCreateNewOption"]);

      var children = this.props.children; // We can't use destructuring default values to set the children,
      // because it won't apply work if `children` is null. A falsy check is
      // more reliable in real world use-cases.

      if (!children) {
        children = defaultChildren;
      }

      var props = _objectSpread(_objectSpread({}, restProps), {}, {
        allowCreate: true,
        filterOptions: this.filterOptions,
        menuRenderer: this.menuRenderer,
        onInputChange: this.onInputChange,
        onInputKeyDown: this.onInputKeyDown,
        ref: function ref(_ref2) {
          _this2.select = _ref2; // These values may be needed in between Select mounts (when this.select is null)

          if (_ref2) {
            _this2.labelKey = _ref2.props.labelKey;
            _this2.valueKey = _ref2.props.valueKey;
          }
        }
      });

      return children(props);
    }
  }]);

  return CreatableSelect;
}(_react["default"].Component);

;

function defaultChildren(props) {
  return /*#__PURE__*/_react["default"].createElement(_Select["default"], props);
}

;

function isOptionUnique(_ref3) {
  var option = _ref3.option,
      options = _ref3.options,
      labelKey = _ref3.labelKey,
      valueKey = _ref3.valueKey;
  return options.filter(function (existingOption) {
    return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
  }).length === 0;
}

;

function isValidNewOption(_ref4) {
  var label = _ref4.label;
  return !!label;
}

;

function newOptionCreator(_ref5) {
  var label = _ref5.label,
      labelKey = _ref5.labelKey,
      valueKey = _ref5.valueKey;
  var option = {};
  option[valueKey] = label;
  option[labelKey] = label;
  option.className = 'Select-create-option-placeholder';
  return option;
}

;

function promptTextCreator(label) {
  return "Create option \"".concat(label, "\"");
}

function shouldKeyDownEventCreateNewOption(_ref6) {
  var keyCode = _ref6.keyCode;

  switch (keyCode) {
    case 9: // TAB

    case 13: // ENTER

    case 188:
      // COMMA
      return true;
  }

  return false;
}

; // Default prop methods

CreatableSelect.isOptionUnique = isOptionUnique;
CreatableSelect.isValidNewOption = isValidNewOption;
CreatableSelect.newOptionCreator = newOptionCreator;
CreatableSelect.promptTextCreator = promptTextCreator;
CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;
CreatableSelect.defaultProps = {
  filterOptions: _defaultFilterOptions["default"],
  isOptionUnique: isOptionUnique,
  isValidNewOption: isValidNewOption,
  menuRenderer: _defaultMenuRenderer["default"],
  newOptionCreator: newOptionCreator,
  promptTextCreator: promptTextCreator,
  shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption
};
CreatableSelect.propTypes = {
  // Child function responsible for creating the inner Select component
  // This component can be used to compose HOCs (eg Creatable and Async)
  // (props: Object): PropTypes.element
  children: _propTypes["default"].func,
  // See Select.propTypes.filterOptions
  filterOptions: _propTypes["default"].any,
  // Searches for any matching option within the set of options.
  // This function prevents duplicate options from being created.
  // ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
  isOptionUnique: _propTypes["default"].func,
  // Determines if the current input text represents a valid option.
  // ({ label: string }): boolean
  isValidNewOption: _propTypes["default"].func,
  // See Select.propTypes.menuRenderer
  menuRenderer: _propTypes["default"].any,
  // Factory to create new option.
  // ({ label: string, labelKey: string, valueKey: string }): Object
  newOptionCreator: _propTypes["default"].func,
  // input change handler: function (inputValue) {}
  onInputChange: _propTypes["default"].func,
  // input keyDown handler: function (event) {}
  onInputKeyDown: _propTypes["default"].func,
  // new option click handler: function (option) {}
  onNewOptionClick: _propTypes["default"].func,
  // See Select.propTypes.options
  options: _propTypes["default"].array,
  // Creates prompt/placeholder option text.
  // (filterText: string): string
  promptTextCreator: _propTypes["default"].func,
  // Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
  shouldKeyDownEventCreateNewOption: _propTypes["default"].func
};
var _default = CreatableSelect;
exports["default"] = _default;