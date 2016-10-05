'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function main(require) {
  var _require = require('./Admin');

  var App = _require.App;

  var ReactDom = require('react-dom');
  var async = require('async');

  var _require2 = require('superagent');

  var get = _require2.get;

  var React = require('react');

  async.parallel([function (callback) {
    get('http://localhost:3002/projects').then(function (_ref) {
      var body = _ref.body;
      return callback(null, body.data);
    }).catch(callback);
  }, function (callback) {
    get('http://localhost:3002/companies').then(function (_ref2) {
      var body = _ref2.body;
      return callback(null, body.data);
    }).catch(callback);
  }, function (callback) {
    get('http://localhost:3002/skills').then(function (_ref3) {
      var body = _ref3.body;
      return callback(null, body.data);
    }).catch(callback);
  }], function (err, _ref4) {
    var _ref5 = _slicedToArray(_ref4, 3);

    var projects = _ref5[0];
    var companies = _ref5[1];
    var skills = _ref5[2];

    if (err) throw err;
    return ReactDom.render(React.createElement(App, {
      projects: projects,
      companies: companies,
      skills: skills
    }), document.getElementById('admin-app'));
  });
})(require);