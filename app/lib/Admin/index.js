'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDomServer = require('react-dom/server');
var ProjectForm = require('../../lib/Admin/ProjectForm');

var AdminApp = function (_React$Component) {
  _inherits(AdminApp, _React$Component);

  function AdminApp(props) {
    _classCallCheck(this, AdminApp);

    var _this = _possibleConstructorReturn(this, (AdminApp.__proto__ || Object.getPrototypeOf(AdminApp)).call(this, props));

    _this.state = {
      projects: props.projects,
      companies: props.companies,
      skills: props.skills
    };
    return _this;
  }

  _createClass(AdminApp, [{
    key: 'render',
    value: function render() {
      var _state = this.state;
      var companies = _state.companies;
      var skills = _state.skills;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(ProjectForm, {
          companies: companies,
          skilss: skills
        })
      );
    }
  }]);

  return AdminApp;
}(React.Component);

AdminApp.propTypes = {
  projects: React.PropTypes.object,
  companies: React.PropTypes.object,
  skills: React.PropTypes.object
};

module.exports = {
  App: AdminApp,
  html: function html(_ref) {
    var projects = _ref.projects;
    var companies = _ref.companies;
    var skills = _ref.skills;
    return ReactDomServer.renderToString(React.createElement(AdminApp, {
      projects: projects,
      companies: companies,
      skilss: skills
    }));
  }
};