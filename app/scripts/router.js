var React = require('react');
var ReactDom = require('react-dom');
var Backbone = require('backbone');

var ProfileContainer = require('./components/profile.jsx').ProfileContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDom.render(
      React.createElement(ProfileContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
