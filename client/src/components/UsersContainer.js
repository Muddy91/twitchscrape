import React, { Component } from 'react'
import logo from '../twitch.svg';
import axios from 'axios'

import ProfileView from './ProfileView'
import Loader from './Loader'

class UsersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      term: 'leveluplive',
      loading: true
    }
    this.submit = this.submit.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
  }

  componentDidMount() {
    this.refs.searchForm.click(); 
  }

  changeTerm(event) {
    this.setState({term: event.target.value});
  }


  submit(event) {
    event.preventDefault();
    this.setState({loading: true})
    let url = 'http://localhost:3001/api/v1/profiles.json';
    axios.get(url, {
      params: {
        user: this.state.term
      }
    })
      .then(response => {
        this.setState({users: response.data, loading: false})
        console.log(this.state.users)
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="">
      <header className="App-header">
          <div className="app-container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="App-title">
              <img src={logo} alt="logo"/>
            </h1>
              </div>

              <div className="col-md-6">
                <form className="search-form" onSubmit={this.submit}>
                  <input className="custom-input" onChange={this.changeTerm} value={this.state.term}/>
                  <button className="search-button" ref="searchForm" type="submit">
                    <svg width="16px" height="16px" viewBox="0 0 18 18" x="0px" y="0px">
                      <path d="M16.707,15.293l-1.414,1.414l-4.825-4.825C9.487,12.58,8.295,13,7,13c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6c0,1.295-0.42,2.487-1.118,3.468L16.707,15.293z M7,3C4.791,3,3,4.791,3,7s1.791,4,4,4s4-1.791,4-4S9.209,3,7,3z"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </header>
        {this.state.loading ?  <Loader /> : <ProfileView profile={this.state.users}/>}
        </div>
        
    )
  }
}

export default UsersContainer