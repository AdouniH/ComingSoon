import React from 'react';
import './email.css';

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: ''
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("hello " + this.state.mail);
  }

  render() {
    return(
        <div class='central'>
          <form onSubmit={this.mySubmitHandler}>
          <div class='email'>
              <div class='title'>Entrez votre mail</div>
              <input class='emailbody'type="email" name="mail" value={this.state.mail} onChange={this.myChangeHandler}></input>
              <input class='submitbutton' type="submit" value="Envoyer"></input>
          </div>
          </form>
        </div>
    );
  }
}

export default Email;
