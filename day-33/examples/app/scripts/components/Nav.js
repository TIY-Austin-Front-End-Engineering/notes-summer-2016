import React from 'react';
import { Link, hashHistory } from 'react-router'

const Nav = React.createClass({
  colorClickHandler: function(e) {
    hashHistory.push('/colors/98df67');
  },
  render: function() {
    return (
      <nav>
        <ul>
          {this.props.children}
          <li><Link to="/">home</Link></li>
          <li><Link to="/colors/ffccff">pink</Link></li>
          <li><Link to="/colors/9834fa">purple</Link></li>
          <li><Link to="/colors/49fedc">Mystery</Link></li>
          <li><Link to="/posts">All Posts</Link></li>
          <li><input
            type="button"
            value="Try a new color"
            onClick={this.colorClickHandler}/></li>
        </ul>
      </nav>
    )
  }
});

export default Nav;
