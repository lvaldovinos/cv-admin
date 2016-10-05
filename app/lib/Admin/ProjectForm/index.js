'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var LocationForm = require('../LocationForm');

var _require = require('react-dates');

var DateRangePicker = _require.DateRangePicker;

var ProjectForm = function (_React$Component) {
  _inherits(ProjectForm, _React$Component);

  function ProjectForm(props) {
    _classCallCheck(this, ProjectForm);

    var _this = _possibleConstructorReturn(this, (ProjectForm.__proto__ || Object.getPrototypeOf(ProjectForm)).call(this, props));

    _this.state = {
      name: '',
      startDate: null,
      finishDate: null,
      client: '',
      location: {},
      description: '',
      duty: '',
      duties: [],
      focusInput: null,
      company: '',
      skills: []
    };
    _this.handleNameChange = _this.handleNameChange.bind(_this);
    _this.handleDatesChange = _this.handleDatesChange.bind(_this);
    _this.handleClientChange = _this.handleClientChange.bind(_this);
    _this.handleFocusChange = _this.handleFocusChange.bind(_this);
    _this.handleLocationChange = _this.handleLocationChange.bind(_this);
    _this.handleDescriptionChange = _this.handleDescriptionChange.bind(_this);
    _this.handleDutiesChange = _this.handleDutiesChange.bind(_this);
    _this.handleDutyChange = _this.handleDutyChange.bind(_this);
    _this.handleCompanyChange = _this.handleCompanyChange.bind(_this);
    return _this;
  }

  _createClass(ProjectForm, [{
    key: 'handleNameChange',
    value: function handleNameChange(_ref) {
      var target = _ref.target;

      this.setState({
        name: target.value
      });
    }
  }, {
    key: 'handleDatesChange',
    value: function handleDatesChange(_ref2) {
      var startDate = _ref2.startDate;
      var endDate = _ref2.endDate;

      this.setState({
        startDate: startDate,
        finishDate: endDate
      });
    }
  }, {
    key: 'handleClientChange',
    value: function handleClientChange(_ref3) {
      var target = _ref3.target;

      this.setState({
        client: target.value
      });
    }
  }, {
    key: 'handleFocusChange',
    value: function handleFocusChange(focusInput) {
      this.setState({ focusInput: focusInput });
    }
  }, {
    key: 'handleLocationChange',
    value: function handleLocationChange(location) {
      this.setState({ location: location });
    }
  }, {
    key: 'handleDescriptionChange',
    value: function handleDescriptionChange(_ref4) {
      var target = _ref4.target;

      this.setState({
        description: target.value
      });
    }
  }, {
    key: 'handleDutiesChange',
    value: function handleDutiesChange() {
      var duties = this.state.duties;
      var duty = this.state.duty;

      duties.push(duty);
      duty = '';
      this.setState({ duties: duties, duty: duty });
    }
  }, {
    key: 'handleDutyChange',
    value: function handleDutyChange(_ref5) {
      var target = _ref5.target;

      this.setState({
        duty: target.value
      });
    }
  }, {
    key: 'handleCompanyChange',
    value: function handleCompanyChange(_ref6) {
      var target = _ref6.target;

      this.setState({
        company: target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var name = _state.name;
      var client = _state.client;
      var description = _state.description;
      var duties = _state.duties;
      var duty = _state.duty;

      var dutiesHtml = duties.map(function (d, i) {
        return React.createElement(
          'li',
          { className: 'list-group-item', key: i },
          d
        );
      });
      var _props = this.props;
      var companies = _props.companies;
      var skills = _props.skills;

      var companyOptions = companies.rows.map(function (c) {
        return React.createElement(
          'option',
          { key: c.id, value: c.id },
          c.name
        );
      });
      var firstCompanyOptionId = companies.rows[0].id;
      return React.createElement(
        'form',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'form-group col-md-6' },
          React.createElement(
            'label',
            { htmlFor: 'projectName' },
            'Name:'
          ),
          React.createElement('input', {
            id: 'projectName',
            type: 'text',
            className: 'form-control',
            placeholder: 'Project\'s name',
            onChange: this.handleNameChange,
            value: name
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group col-md-6' },
          React.createElement(
            'label',
            { htmlFor: 'projectClient' },
            'Client:'
          ),
          React.createElement('input', {
            id: 'projectClient',
            type: 'text',
            className: 'form-control',
            placeholder: 'Project\'s client',
            onChange: this.handleClientChange,
            value: client
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group col-md-6' },
          React.createElement(DateRangePicker, {
            onDatesChange: this.handleDatesChange,
            onFocusChange: this.handleFocusChange,
            startDate: this.state.startDate,
            endDate: this.state.finishDate,
            focusedInput: this.state.focusInput
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group col-md-6' },
          React.createElement(
            'label',
            { htmlFor: 'projectCompany' },
            'Company:'
          ),
          React.createElement(
            'select',
            {
              className: 'form-control',
              id: 'projectCompany',
              value: firstCompanyOptionId,
              onChange: this.handleCompanyChange
            },
            companyOptions
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(LocationForm, { onChange: this.handleLocationChange })
        ),
        React.createElement(
          'div',
          { className: 'col-md-12 form-group' },
          React.createElement(
            'label',
            { htmlFor: 'projectDescription' },
            'Description:'
          ),
          React.createElement('textarea', {
            rows: '5',
            id: 'projectDescription',
            value: description,
            className: 'form-control',
            onChange: this.handleDescriptionChange,
            placeholder: 'Project\'s description'
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group col-md-12' },
          React.createElement(
            'label',
            { htmlFor: 'projectDuty' },
            'Duty:'
          ),
          React.createElement(
            'div',
            { className: 'input-group' },
            React.createElement('input', {
              type: 'text',
              className: 'form-control',
              id: 'projectDuty',
              value: duty,
              placeholder: 'Project\'s duty',
              onChange: this.handleDutyChange
            }),
            React.createElement(
              'span',
              { className: 'input-group-btn' },
              React.createElement(
                'button',
                {
                  className: 'btn btn-default',
                  type: 'button',
                  onClick: this.handleDutiesChange
                },
                'Add'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(
            'ul',
            { className: 'list-group' },
            dutiesHtml
          )
        )
      );
    }
  }]);

  return ProjectForm;
}(React.Component);

ProjectForm.propTypes = {
  companies: React.PropTypes.object,
  skills: React.PropTypes.object
};

module.exports = ProjectForm;