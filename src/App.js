import React, { Component } from 'react';
import './App.css';
import { Index, Users, About } from './components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: '#282c34' }
  }

  changeColor = color => {
    this.setState({ color })
  }

  render() {
    return (
      <div style={{ background: this.state.color }} id="main">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => this.changeColor("#282c34")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => this.changeColor("#bc27b0")}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/users" onClick={() => this.changeColor('#007bff')} >Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
          </div>
        </Router>
      </div >
    );
  }

}

export default App;
