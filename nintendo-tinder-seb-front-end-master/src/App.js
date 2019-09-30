import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { getCharacters } from './api'
import { createCharacter } from './api'

import Characters from './pages/Characters'
import NewCharacter from './pages/NewCharacter'

class App extends Component {
    constructor(props){
    super(props)
    this.state = {
        successCharacter: false,
        deleteCharacter: false,
        characters: []
    }
  }

componentDidMount() {
    getCharacters()
    .then(APIcharacters => {
        this.setState({
            characters: APIcharacters
        })
    })
}

handleNewCharacter = (newCharacterInfo) => {
    createCharacter(newCharacterInfo)
    .then(successCharacter => {
        this.setState({
            successCharacter: true
        })
        getCharacters()
        .then(successCharacter =>{
            this.setState({
                characters: successCharacter
            })
        })
        console.log("SUCCESS! New character: ", successCharacter);
    })
  }

  handleDeletedCharacter = (deletedCharacter) => {
      createCharacter(deletedCharacter)
      .then(deleteCharacter => {
          this.setState({
              deleteCharacter: true
          })
          getCharacters()
          .then(deleteCharacter =>{
              this.setState({
                  characters: deleteCharacter
              })
          })
          console.log("AWWW! Character deleted: ", deleteCharacter);
      })
    }

    render() {
      return (
        <div>
          <Header />
            <Router>
                <Switch>
                    <Route exact path="/newcharacters" render={( props ) => <Characters characters={this.state.characters}/> } />
                    <Route exact path="/" render={( props ) =>
                        <NewCharacter success={this.state.successCharacter} submittedCharacter={this.handleNewCharacter}/> } />
                </Switch>
            </Router>
        </div>
      );
    }
}

export default App;
