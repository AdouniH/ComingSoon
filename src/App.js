import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return(
        <div class='central'>
          <form action="/action_page.php">
          <div class='email'>
              <div class='title'>Entrez votre mail</div>
              <div class='emailbody'><input class='emailbody'type="text" name="firstname" value="Mickey"></input></div>
              <div class='submitbutton'><input type="submit" value="Submit"></input></div>
          </div>
          </form>
        </div>
    );
  }
}

export default App;
