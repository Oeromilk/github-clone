var React = require('react');
var $ = require('jquery');

var GitHubNavTemplate = require('../templates/github-nav.jsx').GitHubNavTemplate;

var ProfileContainer = React.createClass({
  getInitialState: function(){
    return {
      userProfile: {}
    }
  },

  render: function(){
    return (
      <GitHubNavTemplate>

      </GitHubNavTemplate>
    )
  }
});

module.exports = {
  ProfileContainer: ProfileContainer
};
