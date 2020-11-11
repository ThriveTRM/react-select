"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactInputAutosize = _interopRequireDefault(require("react-input-autosize"));

var _classnames = _interopRequireDefault(require("classnames"));

var _defaultArrowRenderer = _interopRequireDefault(require("./utils/defaultArrowRenderer"));

var _defaultFilterOptions = _interopRequireDefault(require("./utils/defaultFilterOptions"));

var _defaultMenuRenderer = _interopRequireDefault(require("./utils/defaultMenuRenderer"));

var _defaultClearRenderer = _interopRequireDefault(require("./utils/defaultClearRenderer"));

var _Option = _interopRequireDefault(require("./Option"));

var _Value = _interopRequireDefault(require("./Value"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var stringifyValue = function stringifyValue(value) {
  return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]);

var instanceId = 1;

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);
    ['clearValue', 'focusOption', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleRequired', 'handleTouchOutside', 'handleTouchMove', 'handleTouchStart', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleValueClick', 'getOptionLabel', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
      return _this[fn] = _this[fn].bind(_assertThisInitialized(_this));
    });
    _this.state = {
      inputValue: '',
      isFocused: false,
      isOpen: false,
      isPseudoFocused: false,
      required: false
    };
    return _this;
  }

  _createClass(Select, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
      var valueArray = this.getValueArray(this.props.value);

      if (this.props.required) {
        this.setState({
          required: this.handleRequired(valueArray[0], this.props.multi)
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autofocus) {
        this.focus();
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var valueArray = this.getValueArray(nextProps.value, nextProps);

      if (nextProps.required) {
        this.setState({
          required: this.handleRequired(valueArray[0], nextProps.multi)
        });
      } else if (this.props.required) {
        // Used to be required but it's not any more
        this.setState({
          required: false
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillUpdate",
    value: function UNSAFE_componentWillUpdate(nextProps, nextState) {
      if (nextState.isOpen !== this.state.isOpen) {
        this.toggleTouchOutsideEvent(nextState.isOpen);
        var handler = nextState.isOpen ? nextProps.onOpen : nextProps.onClose;
        handler && handler();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // focus to the selected option
      if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
        var focusedOptionNode = _reactDom["default"].findDOMNode(this.focused);

        var menuNode = _reactDom["default"].findDOMNode(this.menu);

        menuNode.scrollTop = focusedOptionNode.offsetTop;
        this.hasScrolledToOption = true;
      } else if (!this.state.isOpen) {
        this.hasScrolledToOption = false;
      }

      if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
        this._scrollToFocusedOptionOnUpdate = false;

        var focusedDOM = _reactDom["default"].findDOMNode(this.focused);

        var menuDOM = _reactDom["default"].findDOMNode(this.menu);

        var focusedRect = focusedDOM.getBoundingClientRect();
        var menuRect = menuDOM.getBoundingClientRect();

        if (focusedRect.bottom > menuRect.bottom) {
          menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
        } else if (focusedRect.top < menuRect.top) {
          menuDOM.scrollTop = focusedDOM.offsetTop;
        }
      }

      if (this.props.scrollMenuIntoView && this.menuContainer) {
        var menuContainerRect = this.menuContainer.getBoundingClientRect();

        if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
          window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
        }
      }

      if (prevProps.disabled !== this.props.disabled) {
        this.setState({
          isFocused: false
        }); // eslint-disable-line react/no-did-update-set-state

        this.closeMenu();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!document.removeEventListener && document.detachEvent) {
        document.detachEvent('ontouchstart', this.handleTouchOutside);
      } else {
        document.removeEventListener('touchstart', this.handleTouchOutside);
      }
    }
  }, {
    key: "toggleTouchOutsideEvent",
    value: function toggleTouchOutsideEvent(enabled) {
      if (enabled) {
        if (!document.addEventListener && document.attachEvent) {
          document.attachEvent('ontouchstart', this.handleTouchOutside);
        } else {
          document.addEventListener('touchstart', this.handleTouchOutside);
        }
      } else {
        if (!document.removeEventListener && document.detachEvent) {
          document.detachEvent('ontouchstart', this.handleTouchOutside);
        } else {
          document.removeEventListener('touchstart', this.handleTouchOutside);
        }
      }
    }
  }, {
    key: "handleTouchOutside",
    value: function handleTouchOutside(event) {
      // handle touch outside on ios to dismiss menu
      if (this.wrapper && !this.wrapper.contains(event.target)) {
        this.closeMenu();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (!this.input) return;
      this.input.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.input) return;
      this.input.blur();
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
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      // Check if the view is being dragged, In this case
      // we don't want to fire the click event (because the user only wants to scroll)
      if (this.dragging) return; // Fire the mouse events

      this.handleMouseDown(event);
    }
  }, {
    key: "handleTouchEndClearValue",
    value: function handleTouchEndClearValue(event) {
      // Check if the view is being dragged, In this case
      // we don't want to fire the click event (because the user only wants to scroll)
      if (this.dragging) return; // Clear the value

      this.clearValue(event);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      // if the event was triggered by a mousedown and not the primary
      // button, or if the component is disabled, ignore it.
      if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (event.target.tagName === 'INPUT') {
        return;
      } // prevent default event handlers


      event.stopPropagation();
      event.preventDefault(); // for the non-searchable select, toggle the menu

      if (!this.props.searchable) {
        // TODO: This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
        this.focus();
        return this.setState({
          isOpen: !this.state.isOpen
        });
      }

      if (this.state.isFocused) {
        // On iOS, we can get into a state where we think the input is focused but it isn't really,
        // since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
        // Call focus() again here to be safe.
        this.focus();
        var input = this.input;

        if (typeof input.getInput === 'function') {
          // Get the actual DOM input if the ref is an <AutosizeInput /> component
          input = input.getInput();
        } // clears the value so that the cursor will be at the end of input when the component re-renders


        input.value = ''; // if the input is focused, ensure the menu is open

        this.setState({
          isOpen: true,
          isPseudoFocused: false
        });
      } else {
        // otherwise, focus the input and open the menu
        this._openAfterFocus = this.props.openOnClick;
        this.focus();
      }
    }
  }, {
    key: "handleMouseDownOnArrow",
    value: function handleMouseDownOnArrow(event) {
      // if the event was triggered by a mousedown and not the primary
      // button, or if the component is disabled, ignore it.
      if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
        return;
      } // If the menu isn't open, let the event bubble to the main handleMouseDown


      if (!this.state.isOpen) {
        return;
      } // prevent default event handlers


      event.stopPropagation();
      event.preventDefault(); // close the menu

      this.closeMenu();
    }
  }, {
    key: "handleMouseDownOnMenu",
    value: function handleMouseDownOnMenu(event) {
      // if the event was triggered by a mousedown and not the primary
      // button, or if the component is disabled, ignore it.
      if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      this._openAfterFocus = true;
      this.focus();
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      if (this.props.onCloseResetsInput) {
        this.setState({
          isOpen: false,
          isPseudoFocused: this.state.isFocused && !this.props.multi,
          inputValue: this.handleInputValueChange('')
        });
      } else {
        this.setState({
          isOpen: false,
          isPseudoFocused: this.state.isFocused && !this.props.multi
        });
      }

      this.hasScrolledToOption = false;
    }
  }, {
    key: "handleInputFocus",
    value: function handleInputFocus(event) {
      if (this.props.disabled) return;
      var isOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }

      this.setState({
        isFocused: true,
        isOpen: isOpen
      });
      this._openAfterFocus = false;
    }
  }, {
    key: "handleInputBlur",
    value: function handleInputBlur(event) {
      // The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
      if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
        this.focus();
        return;
      }

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }

      var onBlurredState = {
        isFocused: false,
        isOpen: false,
        isPseudoFocused: false
      };

      if (this.props.onBlurResetsInput) {
        onBlurredState.inputValue = this.handleInputValueChange('');
      }

      this.setState(onBlurredState);
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var newInputValue = event.target.value;

      if (this.state.inputValue !== event.target.value) {
        newInputValue = this.handleInputValueChange(newInputValue);
      }

      this.setState({
        isOpen: true,
        isPseudoFocused: false,
        inputValue: newInputValue
      });
    }
  }, {
    key: "handleInputValueChange",
    value: function handleInputValueChange(newValue) {
      if (this.props.onInputChange) {
        var nextState = this.props.onInputChange(newValue); // Note: != used deliberately here to catch undefined and null

        if (nextState != null && _typeof(nextState) !== 'object') {
          newValue = '' + nextState;
        }
      }

      return newValue;
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (this.props.disabled) return;

      if (typeof this.props.onInputKeyDown === 'function') {
        this.props.onInputKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      }

      switch (event.keyCode) {
        case 8:
          // backspace
          if (!this.state.inputValue && this.props.backspaceRemoves) {
            event.preventDefault();
            this.popValue();
          }

          return;

        case 9:
          // tab
          if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
            return;
          }

          this.selectFocusedOption();
          return;

        case 13:
          // enter
          if (!this.state.isOpen) return;
          event.stopPropagation();
          this.selectFocusedOption();
          break;

        case 27:
          // escape
          if (this.state.isOpen) {
            this.closeMenu();
            event.stopPropagation();
          } else if (this.props.clearable && this.props.escapeClearsValue) {
            this.clearValue(event);
            event.stopPropagation();
          }

          break;

        case 38:
          // up
          this.focusPreviousOption();
          break;

        case 40:
          // down
          this.focusNextOption();
          break;

        case 33:
          // page up
          this.focusPageUpOption();
          break;

        case 34:
          // page down
          this.focusPageDownOption();
          break;

        case 35:
          // end key
          if (event.shiftKey) {
            return;
          }

          this.focusEndOption();
          break;

        case 36:
          // home key
          if (event.shiftKey) {
            return;
          }

          this.focusStartOption();
          break;

        case 46:
          // backspace
          if (!this.state.inputValue && this.props.deleteRemoves) {
            event.preventDefault();
            this.popValue();
          }

          return;

        default:
          return;
      }

      event.preventDefault();
    }
  }, {
    key: "handleValueClick",
    value: function handleValueClick(option, event) {
      if (!this.props.onValueClick) return;
      this.props.onValueClick(option, event);
    }
  }, {
    key: "handleMenuScroll",
    value: function handleMenuScroll(event) {
      if (!this.props.onMenuScrollToBottom) return;
      var target = event.target;

      if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
        this.props.onMenuScrollToBottom();
      }
    }
  }, {
    key: "handleRequired",
    value: function handleRequired(value, multi) {
      if (!value) return true;
      return multi ? value.length === 0 : Object.keys(value).length === 0;
    }
  }, {
    key: "getOptionLabel",
    value: function getOptionLabel(op) {
      return op[this.props.labelKey];
    }
    /**
     * Turns a value into an array from the given options
     * @param	{String|Number|Array}	value		- the value of the select input
     * @param	{Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
     * @returns	{Array}	the value of the select represented in an array
     */

  }, {
    key: "getValueArray",
    value: function getValueArray(value, nextProps) {
      var _this2 = this;

      /** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
      var props = _typeof(nextProps) === 'object' ? nextProps : this.props;

      if (props.multi) {
        if (typeof value === 'string') value = value.split(props.delimiter);

        if (!Array.isArray(value)) {
          if (value === null || value === undefined) return [];
          value = [value];
        }

        return value.map(function (value) {
          return _this2.expandValue(value, props);
        }).filter(function (i) {
          return i;
        });
      }

      var expandedValue = this.expandValue(value, props);
      return expandedValue ? [expandedValue] : [];
    }
    /**
     * Retrieve a value from the given options and valueKey
     * @param	{String|Number|Array}	value	- the selected value(s)
     * @param	{Object}		props	- the Select component's props (or nextProps)
     */

  }, {
    key: "expandValue",
    value: function expandValue(value, props) {
      var valueType = _typeof(value);

      if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
      var options = props.options,
          valueKey = props.valueKey;
      if (!options) return;

      for (var i = 0; i < options.length; i++) {
        if (options[i][valueKey] === value) return options[i];
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var _this3 = this;

      if (this.props.autoBlur) {
        this.blurInput();
      }

      if (this.props.required) {
        var required = this.handleRequired(value, this.props.multi);
        this.setState({
          required: required
        });
      }

      if (this.props.onChange) {
        if (this.props.simpleValue && value) {
          value = this.props.multi ? value.map(function (i) {
            return i[_this3.props.valueKey];
          }).join(this.props.delimiter) : value[this.props.valueKey];
        }

        this.props.onChange(value);
      }
    }
  }, {
    key: "selectValue",
    value: function selectValue(value) {
      var _this4 = this;

      // NOTE: we actually add/set the value in a callback to make sure the
      // input value is empty to avoid styling issues in Chrome
      if (this.props.closeOnSelect) {
        this.hasScrolledToOption = false;
      }

      if (this.props.multi) {
        var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
        this.setState({
          focusedIndex: null,
          inputValue: this.handleInputValueChange(updatedValue),
          isOpen: !this.props.closeOnSelect
        }, function () {
          _this4.addValue(value);
        });
      } else {
        this.setState({
          inputValue: this.handleInputValueChange(''),
          isOpen: !this.props.closeOnSelect,
          isPseudoFocused: this.state.isFocused
        }, function () {
          _this4.setValue(value);
        });
      }
    }
  }, {
    key: "addValue",
    value: function addValue(value) {
      var valueArray = this.getValueArray(this.props.value);

      var visibleOptions = this._visibleOptions.filter(function (val) {
        return !val.disabled;
      });

      var lastValueIndex = visibleOptions.indexOf(value);
      this.setValue(valueArray.concat(value));

      if (visibleOptions.length - 1 === lastValueIndex) {
        // the last option was selected; focus the second-last one
        this.focusOption(visibleOptions[lastValueIndex - 1]);
      } else if (visibleOptions.length > lastValueIndex) {
        // focus the option below the selected one
        this.focusOption(visibleOptions[lastValueIndex + 1]);
      }
    }
  }, {
    key: "popValue",
    value: function popValue() {
      var valueArray = this.getValueArray(this.props.value);
      if (!valueArray.length) return;
      if (valueArray[valueArray.length - 1].clearableValue === false) return;
      this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
    }
  }, {
    key: "removeValue",
    value: function removeValue(value) {
      var valueArray = this.getValueArray(this.props.value);
      this.setValue(valueArray.filter(function (i) {
        return i !== value;
      }));
      this.focus();
    }
  }, {
    key: "clearValue",
    value: function clearValue(event) {
      // if the event was triggered by a mousedown and not the primary
      // button, ignore it.
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      this.setValue(this.getResetValue());
      this.setState({
        isOpen: false,
        inputValue: this.handleInputValueChange('')
      }, this.focus);
    }
  }, {
    key: "getResetValue",
    value: function getResetValue() {
      if (this.props.resetValue !== undefined) {
        return this.props.resetValue;
      } else if (this.props.multi) {
        return [];
      } else {
        return null;
      }
    }
  }, {
    key: "focusOption",
    value: function focusOption(option) {
      this.setState({
        focusedOption: option
      });
    }
  }, {
    key: "focusNextOption",
    value: function focusNextOption() {
      this.focusAdjacentOption('next');
    }
  }, {
    key: "focusPreviousOption",
    value: function focusPreviousOption() {
      this.focusAdjacentOption('previous');
    }
  }, {
    key: "focusPageUpOption",
    value: function focusPageUpOption() {
      this.focusAdjacentOption('page_up');
    }
  }, {
    key: "focusPageDownOption",
    value: function focusPageDownOption() {
      this.focusAdjacentOption('page_down');
    }
  }, {
    key: "focusStartOption",
    value: function focusStartOption() {
      this.focusAdjacentOption('start');
    }
  }, {
    key: "focusEndOption",
    value: function focusEndOption() {
      this.focusAdjacentOption('end');
    }
  }, {
    key: "focusAdjacentOption",
    value: function focusAdjacentOption(dir) {
      var options = this._visibleOptions.map(function (option, index) {
        return {
          option: option,
          index: index
        };
      }).filter(function (option) {
        return !option.option.disabled;
      });

      this._scrollToFocusedOptionOnUpdate = true;

      if (!this.state.isOpen) {
        this.setState({
          isOpen: true,
          inputValue: '',
          focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null)
        });
        return;
      }

      if (!options.length) return;
      var focusedIndex = -1;

      for (var i = 0; i < options.length; i++) {
        if (this._focusedOption === options[i].option) {
          focusedIndex = i;
          break;
        }
      }

      if (dir === 'next' && focusedIndex !== -1) {
        focusedIndex = (focusedIndex + 1) % options.length;
      } else if (dir === 'previous') {
        if (focusedIndex > 0) {
          focusedIndex = focusedIndex - 1;
        } else {
          focusedIndex = options.length - 1;
        }
      } else if (dir === 'start') {
        focusedIndex = 0;
      } else if (dir === 'end') {
        focusedIndex = options.length - 1;
      } else if (dir === 'page_up') {
        var potentialIndex = focusedIndex - this.props.pageSize;

        if (potentialIndex < 0) {
          focusedIndex = 0;
        } else {
          focusedIndex = potentialIndex;
        }
      } else if (dir === 'page_down') {
        var potentialIndex = focusedIndex + this.props.pageSize;

        if (potentialIndex > options.length - 1) {
          focusedIndex = options.length - 1;
        } else {
          focusedIndex = potentialIndex;
        }
      }

      if (focusedIndex === -1) {
        focusedIndex = 0;
      }

      this.setState({
        focusedIndex: options[focusedIndex].index,
        focusedOption: options[focusedIndex].option
      });
    }
  }, {
    key: "getFocusedOption",
    value: function getFocusedOption() {
      return this._focusedOption;
    }
  }, {
    key: "getInputValue",
    value: function getInputValue() {
      return this.state.inputValue;
    }
  }, {
    key: "selectFocusedOption",
    value: function selectFocusedOption() {
      if (this._focusedOption) {
        return this.selectValue(this._focusedOption);
      }
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      if (!this.props.isLoading) return;
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "Select-loading-zone",
        "aria-hidden": "true"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "Select-loading"
      }));
    }
  }, {
    key: "renderValue",
    value: function renderValue(valueArray, isOpen) {
      var _this5 = this;

      var renderLabel = this.props.valueRenderer || this.getOptionLabel;
      var ValueComponent = this.props.valueComponent;

      if (!valueArray.length) {
        return !this.state.inputValue ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "Select-placeholder"
        }, this.props.placeholder) : null;
      }

      var onClick = this.props.onValueClick ? this.handleValueClick : null;

      if (this.props.multi) {
        return valueArray.map(function (value, i) {
          return /*#__PURE__*/_react["default"].createElement(ValueComponent, {
            id: _this5._instancePrefix + '-value-' + i,
            instancePrefix: _this5._instancePrefix,
            disabled: _this5.props.disabled || value.clearableValue === false,
            key: "value-".concat(i, "-").concat(value[_this5.props.valueKey]),
            onClick: onClick,
            onRemove: _this5.removeValue,
            value: value
          }, renderLabel(value, i), /*#__PURE__*/_react["default"].createElement("span", {
            className: "Select-aria-only"
          }, "\xA0"));
        });
      } else if (!this.state.inputValue) {
        if (isOpen) onClick = null;
        return /*#__PURE__*/_react["default"].createElement(ValueComponent, {
          id: this._instancePrefix + '-value-item',
          disabled: this.props.disabled,
          instancePrefix: this._instancePrefix,
          onClick: onClick,
          value: valueArray[0]
        }, renderLabel(valueArray[0]));
      }
    }
  }, {
    key: "renderInput",
    value: function renderInput(valueArray, focusedOptionIndex) {
      var _classNames,
          _this6 = this;

      var className = (0, _classnames["default"])('Select-input', this.props.inputProps.className);
      var isOpen = !!this.state.isOpen;
      var ariaOwns = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

      var inputProps = _objectSpread(_objectSpread({}, this.props.inputProps), {}, {
        role: 'combobox',
        'aria-expanded': '' + isOpen,
        'aria-owns': ariaOwns,
        'aria-haspopup': '' + isOpen,
        'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
        'aria-describedby': this.props['aria-describedby'],
        'aria-labelledby': this.props['aria-labelledby'],
        'aria-label': this.props['aria-label'],
        className: className,
        tabIndex: this.props.tabIndex,
        onBlur: this.handleInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus,
        ref: function ref(_ref) {
          return _this6.input = _ref;
        },
        required: this.state.required,
        value: this.state.inputValue
      });

      if (this.props.inputRenderer) {
        return this.props.inputRenderer(inputProps);
      }

      if (this.props.disabled || !this.props.searchable) {
        var _this$props$inputProp = this.props.inputProps,
            inputClassName = _this$props$inputProp.inputClassName,
            divProps = _objectWithoutProperties(_this$props$inputProp, ["inputClassName"]);

        var _ariaOwns = (0, _classnames["default"])(_defineProperty({}, this._instancePrefix + '-list', isOpen));

        return /*#__PURE__*/_react["default"].createElement("div", _extends({}, divProps, {
          role: "combobox",
          "aria-expanded": isOpen,
          "aria-owns": _ariaOwns,
          "aria-activedescendant": isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
          className: className,
          tabIndex: this.props.tabIndex || 0,
          onBlur: this.handleInputBlur,
          onFocus: this.handleInputFocus,
          ref: function ref(_ref2) {
            return _this6.input = _ref2;
          },
          "aria-readonly": '' + !!this.props.disabled,
          style: {
            border: 0,
            width: 1,
            display: 'inline-block'
          }
        }));
      }

      if (this.props.autosize) {
        return /*#__PURE__*/_react["default"].createElement(_reactInputAutosize["default"], _extends({}, inputProps, {
          minWidth: "5"
        }));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("input", inputProps));
    }
  }, {
    key: "renderClear",
    value: function renderClear() {
      if (!this.props.clearable || this.props.value === undefined || this.props.value === null || this.props.multi && !this.props.value.length || this.props.disabled || this.props.isLoading) return;
      var clear = this.props.clearRenderer();
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "Select-clear-zone",
        title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
        "aria-label": this.props.multi ? this.props.clearAllText : this.props.clearValueText,
        onMouseDown: this.clearValue,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEndClearValue
      }, clear);
    }
  }, {
    key: "renderArrow",
    value: function renderArrow() {
      var onMouseDown = this.handleMouseDownOnArrow;
      var isOpen = this.state.isOpen;
      var arrow = this.props.arrowRenderer({
        onMouseDown: onMouseDown,
        isOpen: isOpen
      });
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "Select-arrow-zone",
        onMouseDown: onMouseDown
      }, arrow);
    }
  }, {
    key: "filterOptions",
    value: function filterOptions(excludeOptions) {
      var filterValue = this.state.inputValue;
      var options = this.props.options || [];

      if (this.props.filterOptions) {
        // Maintain backwards compatibility with boolean attribute
        var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _defaultFilterOptions["default"];
        return filterOptions(options, filterValue, excludeOptions, {
          filterOption: this.props.filterOption,
          ignoreAccents: this.props.ignoreAccents,
          ignoreCase: this.props.ignoreCase,
          labelKey: this.props.labelKey,
          matchPos: this.props.matchPos,
          matchProp: this.props.matchProp,
          valueKey: this.props.valueKey
        });
      } else {
        return options;
      }
    }
  }, {
    key: "onOptionRef",
    value: function onOptionRef(ref, isFocused) {
      if (isFocused) {
        this.focused = ref;
      }
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(options, valueArray, focusedOption) {
      if (options && options.length) {
        return this.props.menuRenderer({
          focusedOption: focusedOption,
          focusOption: this.focusOption,
          instancePrefix: this._instancePrefix,
          labelKey: this.props.labelKey,
          onFocus: this.focusOption,
          onSelect: this.selectValue,
          optionClassName: this.props.optionClassName,
          optionComponent: this.props.optionComponent,
          optionRenderer: this.props.optionRenderer || this.getOptionLabel,
          options: options,
          selectValue: this.selectValue,
          valueArray: valueArray,
          valueKey: this.props.valueKey,
          onOptionRef: this.onOptionRef
        });
      } else if (this.props.noResultsText) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "Select-noresults"
        }, this.props.noResultsText);
      } else {
        return null;
      }
    }
  }, {
    key: "renderHiddenField",
    value: function renderHiddenField(valueArray) {
      var _this7 = this;

      if (!this.props.name) return;

      if (this.props.joinValues) {
        var value = valueArray.map(function (i) {
          return stringifyValue(i[_this7.props.valueKey]);
        }).join(this.props.delimiter);
        return /*#__PURE__*/_react["default"].createElement("input", {
          type: "hidden",
          ref: function ref(_ref3) {
            return _this7.value = _ref3;
          },
          name: this.props.name,
          value: value,
          disabled: this.props.disabled
        });
      }

      return valueArray.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement("input", {
          key: 'hidden.' + index,
          type: "hidden",
          ref: 'value' + index,
          name: _this7.props.name,
          value: stringifyValue(item[_this7.props.valueKey]),
          disabled: _this7.props.disabled
        });
      });
    }
  }, {
    key: "getFocusableOptionIndex",
    value: function getFocusableOptionIndex(selectedOption) {
      var options = this._visibleOptions;
      if (!options.length) return null;
      var valueKey = this.props.valueKey;
      var focusedOption = this.state.focusedOption || selectedOption;

      if (focusedOption && !focusedOption.disabled) {
        var focusedOptionIndex = -1;
        options.some(function (option, index) {
          var isOptionEqual = option[valueKey] === focusedOption[valueKey];

          if (isOptionEqual) {
            focusedOptionIndex = index;
          }

          return isOptionEqual;
        });

        if (focusedOptionIndex !== -1) {
          return focusedOptionIndex;
        }
      }

      for (var i = 0; i < options.length; i++) {
        if (!options[i].disabled) return i;
      }

      return null;
    }
  }, {
    key: "renderOuter",
    value: function renderOuter(options, valueArray, focusedOption) {
      var _this8 = this;

      var menu = this.renderMenu(options, valueArray, focusedOption);

      if (!menu) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(_ref5) {
          return _this8.menuContainer = _ref5;
        },
        className: "Select-menu-outer",
        style: this.props.menuContainerStyle
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(_ref4) {
          return _this8.menu = _ref4;
        },
        role: "listbox",
        tabIndex: -1,
        className: "Select-menu",
        id: this._instancePrefix + '-list',
        style: this.props.menuStyle,
        onScroll: this.handleMenuScroll,
        onMouseDown: this.handleMouseDownOnMenu
      }, menu));
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var valueArray = this.getValueArray(this.props.value);
      var options = this._visibleOptions = this.filterOptions(this.props.multi ? this.getValueArray(this.props.value) : null);
      var isOpen = this.state.isOpen;
      if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
      var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);
      var focusedOption = null;

      if (focusedOptionIndex !== null) {
        focusedOption = this._focusedOption = options[focusedOptionIndex];
      } else {
        focusedOption = this._focusedOption = null;
      }

      var className = (0, _classnames["default"])('Select', this.props.className, {
        'Select--multi': this.props.multi,
        'Select--single': !this.props.multi,
        'is-clearable': this.props.clearable,
        'is-disabled': this.props.disabled,
        'is-focused': this.state.isFocused,
        'is-loading': this.props.isLoading,
        'is-open': isOpen,
        'is-pseudo-focused': this.state.isPseudoFocused,
        'is-searchable': this.props.searchable,
        'has-value': valueArray.length
      });
      var removeMessage = null;

      if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
        removeMessage = /*#__PURE__*/_react["default"].createElement("span", {
          id: this._instancePrefix + '-backspace-remove-message',
          className: "Select-aria-only",
          "aria-live": "assertive"
        }, this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey]));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(_ref7) {
          return _this9.wrapper = _ref7;
        },
        className: className,
        style: this.props.wrapperStyle
      }, this.renderHiddenField(valueArray), /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(_ref6) {
          return _this9.control = _ref6;
        },
        className: "Select-control",
        style: this.props.style,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onTouchEnd: this.handleTouchEnd,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "Select-multi-value-wrapper",
        id: this._instancePrefix + '-value'
      }, this.renderValue(valueArray, isOpen), this.renderInput(valueArray, focusedOptionIndex)), removeMessage, this.renderLoading(), this.renderClear(), this.renderArrow()), isOpen ? this.renderOuter(options, !this.props.multi ? valueArray : null, focusedOption) : null);
    }
  }]);

  return Select;
}(_react["default"].Component);

;
Select.propTypes = {
  'aria-describedby': _propTypes["default"].string,
  // HTML ID(s) of element(s) that should be used to describe this input (for assistive tech)
  'aria-label': _propTypes["default"].string,
  // Aria label (for assistive tech)
  'aria-labelledby': _propTypes["default"].string,
  // HTML ID of an element that should be used as the label (for assistive tech)
  addLabelText: _propTypes["default"].string,
  // placeholder displayed when you want to add a label on a multi-value input
  arrowRenderer: _propTypes["default"].func,
  // Create drop-down caret element
  autoBlur: _propTypes["default"].bool,
  // automatically blur the component when an option is selected
  autofocus: _propTypes["default"].bool,
  // autofocus the component on mount
  autosize: _propTypes["default"].bool,
  // whether to enable autosizing or not
  backspaceRemoves: _propTypes["default"].bool,
  // whether backspace removes an item if there is no text input
  backspaceToRemoveMessage: _propTypes["default"].string,
  // Message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
  className: _propTypes["default"].string,
  // className for the outer element
  clearAllText: stringOrNode,
  // title for the "clear" control when multi: true
  clearRenderer: _propTypes["default"].func,
  // create clearable x element
  clearValueText: stringOrNode,
  // title for the "clear" control
  clearable: _propTypes["default"].bool,
  // should it be possible to reset value
  closeOnSelect: _propTypes["default"].bool,
  // whether to close the menu when a value is selected
  deleteRemoves: _propTypes["default"].bool,
  // whether backspace removes an item if there is no text input
  delimiter: _propTypes["default"].string,
  // delimiter to use to join multiple values for the hidden field value
  disabled: _propTypes["default"].bool,
  // whether the Select is disabled or not
  escapeClearsValue: _propTypes["default"].bool,
  // whether escape clears the value when the menu is closed
  filterOption: _propTypes["default"].func,
  // method to filter a single option (option, filterString)
  filterOptions: _propTypes["default"].any,
  // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
  ignoreAccents: _propTypes["default"].bool,
  // whether to strip diacritics when filtering
  ignoreCase: _propTypes["default"].bool,
  // whether to perform case-insensitive filtering
  inputProps: _propTypes["default"].object,
  // custom attributes for the Input
  inputRenderer: _propTypes["default"].func,
  // returns a custom input component
  instanceId: _propTypes["default"].string,
  // set the components instanceId
  isLoading: _propTypes["default"].bool,
  // whether the Select is loading externally or not (such as options being loaded)
  joinValues: _propTypes["default"].bool,
  // joins multiple values into a single form field with the delimiter (legacy mode)
  labelKey: _propTypes["default"].string,
  // path of the label value in option objects
  matchPos: _propTypes["default"].string,
  // (any|start) match the start or entire string when filtering
  matchProp: _propTypes["default"].string,
  // (any|label|value) which option property to filter on
  menuBuffer: _propTypes["default"].number,
  // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
  menuContainerStyle: _propTypes["default"].object,
  // optional style to apply to the menu container
  menuRenderer: _propTypes["default"].func,
  // renders a custom menu with options
  menuStyle: _propTypes["default"].object,
  // optional style to apply to the menu
  multi: _propTypes["default"].bool,
  // multi-value input
  name: _propTypes["default"].string,
  // generates a hidden <input /> tag with this field name for html forms
  noResultsText: stringOrNode,
  // placeholder displayed when there are no matching search results
  onBlur: _propTypes["default"].func,
  // onBlur handler: function (event) {}
  onBlurResetsInput: _propTypes["default"].bool,
  // whether input is cleared on blur
  onChange: _propTypes["default"].func,
  // onChange handler: function (newValue) {}
  onClose: _propTypes["default"].func,
  // fires when the menu is closed
  onCloseResetsInput: _propTypes["default"].bool,
  // whether input is cleared when menu is closed through the arrow
  onFocus: _propTypes["default"].func,
  // onFocus handler: function (event) {}
  onInputChange: _propTypes["default"].func,
  // onInputChange handler: function (inputValue) {}
  onInputKeyDown: _propTypes["default"].func,
  // input keyDown handler: function (event) {}
  onMenuScrollToBottom: _propTypes["default"].func,
  // fires when the menu is scrolled to the bottom; can be used to paginate options
  onOpen: _propTypes["default"].func,
  // fires when the menu is opened
  onSelectResetsInput: _propTypes["default"].bool,
  // whether input is cleared on select (works only for multiselect)
  onValueClick: _propTypes["default"].func,
  // onClick handler for value labels: function (value, event) {}
  openOnClick: _propTypes["default"].bool,
  // boolean to control opening the menu when the control is clicked
  openOnFocus: _propTypes["default"].bool,
  // always open options menu on focus
  optionClassName: _propTypes["default"].string,
  // additional class(es) to apply to the <Option /> elements
  optionComponent: _propTypes["default"].func,
  // option component to render in dropdown
  optionRenderer: _propTypes["default"].func,
  // optionRenderer: function (option) {}
  options: _propTypes["default"].array,
  // array of options
  pageSize: _propTypes["default"].number,
  // number of entries to page when using page up/down keys
  placeholder: stringOrNode,
  // field placeholder, displayed when there's no value
  required: _propTypes["default"].bool,
  // applies HTML5 required attribute when needed
  resetValue: _propTypes["default"].any,
  // value to use when you clear the control
  scrollMenuIntoView: _propTypes["default"].bool,
  // boolean to enable the viewport to shift so that the full menu fully visible when engaged
  searchable: _propTypes["default"].bool,
  // whether to enable searching feature or not
  simpleValue: _propTypes["default"].bool,
  // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
  style: _propTypes["default"].object,
  // optional style to apply to the control
  tabIndex: _propTypes["default"].string,
  // optional tab index of the control
  tabSelectsValue: _propTypes["default"].bool,
  // whether to treat tabbing out while focused to be value selection
  value: _propTypes["default"].any,
  // initial field value
  valueComponent: _propTypes["default"].func,
  // value component to render
  valueKey: _propTypes["default"].string,
  // path of the label value in option objects
  valueRenderer: _propTypes["default"].func,
  // valueRenderer: function (option) {}
  wrapperStyle: _propTypes["default"].object // optional style to apply to the component wrapper

};
Select.defaultProps = {
  addLabelText: 'Add "{label}"?',
  arrowRenderer: _defaultArrowRenderer["default"],
  autosize: true,
  backspaceRemoves: true,
  backspaceToRemoveMessage: 'Press backspace to remove {label}',
  clearable: true,
  clearAllText: 'Clear all',
  clearRenderer: _defaultClearRenderer["default"],
  clearValueText: 'Clear value',
  closeOnSelect: true,
  deleteRemoves: true,
  delimiter: ',',
  disabled: false,
  escapeClearsValue: true,
  filterOptions: _defaultFilterOptions["default"],
  ignoreAccents: true,
  ignoreCase: true,
  inputProps: {},
  isLoading: false,
  joinValues: false,
  labelKey: 'label',
  matchPos: 'any',
  matchProp: 'any',
  menuBuffer: 0,
  menuRenderer: _defaultMenuRenderer["default"],
  multi: false,
  noResultsText: 'No results found',
  onBlurResetsInput: true,
  onSelectResetsInput: true,
  onCloseResetsInput: true,
  openOnClick: true,
  optionComponent: _Option["default"],
  pageSize: 5,
  placeholder: 'Select...',
  required: false,
  scrollMenuIntoView: true,
  searchable: true,
  simpleValue: false,
  tabSelectsValue: true,
  valueComponent: _Value["default"],
  valueKey: 'value'
};
var _default = Select;
exports["default"] = _default;