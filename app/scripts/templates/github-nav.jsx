var React = require('react');
var $ = window.jQuery = require('jquery');
require('bootstrap-sass');

var GitHubNavTemplate = React.createClass({
  getInitialState: function(){
    return {
      userInfo: {},
      orgs: []
    }
  },
  componentWillMount: function(){
    var self = this;
    $.ajax('https://api.github.com/users/Oeromilk').then(function(response){
      self.setState({userInfo: response});
        $.ajax(response.organizations_url).then(function(response){
          self.setState({orgs: response});
        })
    });
  },
  render: function(){
    console.log(this.state.userInfo);
    var orgsListing = this.state.orgs.map(function(org){
      return <a key={org.id}  href={org.url}><img src={org.avatar_url} className="img-rounded org-avatar" /></a>
    })
    var user = this.state.userInfo;
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="col-md-12">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search GitHub" />
                </div>
              </form>
              <ul className="nav navbar-nav">
                <li><a href="#">Pull requests</a></li>
                <li><a href="#">Issues</a></li>
                <li><a href="#">Gist</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="">Test</a></li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">New repository</a></li>
                    <li><a href="#">Import repository</a></li>
                    <li><a href="#">New gist</a></li>
                    <li><a href="#">New organization</a></li>
                  </ul></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li className="navbar-text">Signed in as {user.login}</li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Your profile</a></li>
                    <li><a href="#">Your stars</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Intergrations</a></li>
                    <li><a href="#">Help</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Sign out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="col-md-3">
            <div>
              <img src={user.avatar_url} className="img-rounded" />
              <h2>{user.name}</h2>
              <h4>{user.login}</h4>
              <div>{user.bio}</div>
            </div>
            <div>
              <div>{user.location}</div>
              <div><a href={user.email}>{user.email}</a></div>
              <div><a href={user.blog}>{user.blog}</a></div>
              <div>{user.created_at}</div>
            </div>
            <div>
              <h3>Organizations</h3>
              {orgsListing}
            </div>


          </div>
          <div className="col-md-9">{this.props.children}</div>
        </div>
      </div>
    )
  }
});

module.exports = {
  GitHubNavTemplate: GitHubNavTemplate
};
