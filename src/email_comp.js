import React from 'react';
import './email.css';
import axios from 'axios';

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

    axios.post('http://localhost:8000/email/', {'email': this.state.mail})
      .then(res => {
        console.log(res.data);
      })
  }

  render() {
    return(
        <div className='central'>
          <form onSubmit={this.mySubmitHandler}>
          <div className='email'>
              <div className='title'>Entrez votre mail</div>
              <input className='emailbody'type="email" name="mail" value={this.state.mail} onChange={this.myChangeHandler}></input>
              <input className='submitbutton' type="submit" value="Envoyer"></input>
          </div>
          </form>
        </div>
    );
  }
}

export default Email;
