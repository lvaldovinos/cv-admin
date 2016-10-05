'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var LocationForm = function (_React$Component) {
  _inherits(LocationForm, _React$Component);

  function LocationForm(props) {
    _classCallCheck(this, LocationForm);

    var _this = _possibleConstructorReturn(this, (LocationForm.__proto__ || Object.getPrototypeOf(LocationForm)).call(this, props));

    _this.state = {
      address: '',
      zip: '',
      city: '',
      state: ''
    };
    _this.handleAddressChange = _this.handleAddressChange.bind(_this);
    _this.handleZipChange = _this.handleZipChange.bind(_this);
    _this.handleCityChange = _this.handleCityChange.bind(_this);
    _this.handleStateChange = _this.handleStateChange.bind(_this);
    return _this;
  }

  _createClass(LocationForm, [{
    key: 'handleAddressChange',
    value: function handleAddressChange(_ref) {
      var target = _ref.target;

      this.setState({
        address: target.value
      });
      this.props.onChange(this.state);
    }
  }, {
    key: 'handleZipChange',
    value: function handleZipChange(_ref2) {
      var target = _ref2.target;

      this.setState({
        zip: target.value
      });
      this.props.onChange(this.state);
    }
  }, {
    key: 'handleCityChange',
    value: function handleCityChange(_ref3) {
      var target = _ref3.target;

      this.setState({
        city: target.value
      });
      this.props.onChange(this.state);
    }
  }, {
    key: 'handleStateChange',
    value: function handleStateChange(_ref4) {
      var target = _ref4.target;

      this.setState({
        state: target.value
      });
      this.props.onChange(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var address = _state.address;
      var zip = _state.zip;
      var city = _state.city;
      var state = _state.state;

      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'form-group col-md-6' },
          React.createElement(
            'label',
            { htmlFor: 'locationAddress' },
            'Address:'
          ),
          React.createElement('input', {
            type: 'text',
            id: 'locationAddress',
            className: 'form-control',
            placeholder: 'Location address',
            value: address,
            onChange: this.handleAddressChange
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group col-md-6' },
          React.createElement(
            'label',
            { htmlFor: 'locationZip' },
            'Zip:'
          ),
          React.createElement('input', {
            type: 'text',
            id: 'locationZip',
            className: 'form-control',
            placeholder: 'Location zip',
            value: zip,
            onChange: this.handleZipChange
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group col-md-6' },
          React.createElement(
            'label',
            { htmlFor: 'locationCity' },
            'City:'
          ),
          React.createElement('input', {
            type: 'text',
            id: 'locationCity',
            className: 'form-control',
            placeholder: 'Location city',
            value: city,
            onChange: this.handleCityChange
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group col-md-6' },
          React.createElement(
            'label',
            { htmlFor: 'locationState' },
            'State:'
          ),
          React.createElement('input', {
            type: 'text',
            id: 'locationState',
            className: 'form-control',
            placeholder: 'Location state',
            value: state,
            onChange: this.handleStateChange
          })
        )
      );
    }
  }]);

  return LocationForm;
}(React.Component);

LocationForm.propTypes = {
  onChange: React.PropTypes.func
};

module.exports = LocationForm;