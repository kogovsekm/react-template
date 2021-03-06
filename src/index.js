import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      greeting: 'Hello and welcome!'
    };
  }

  changeGreeting(greeting) {
    this.setState({greeting});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar />
            <Header 
              greeting={this.state.greeting} 
              changeGreeting={this.changeGreeting.bind(this)} 
            />  
              <div>
                <p>If you are seeng this, then the body of the app is being rendered correctly!</p>
              </div>
          <Footer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
