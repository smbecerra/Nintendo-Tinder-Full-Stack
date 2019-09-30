import React, { Component } from 'react';
import {
  Col, Container, Row, ListGroup
} from 'react-bootstrap'
import { Redirect } from 'react-router-dom';

class Characters extends Component {
constructor(props){
    super(props)
    this.state = {
        redirect: false
    }
}

setRedirect = () => {
    this.setState({
        redirect: true
    })
}

handleChange = (event) => {
  let {form} = this.state
  form[event.target.name] = event.target.value
  this.setState({form: form})
}

handleDelete = () => {
    this.props.deletedCharacter(this.state.form)
}

  render() {
      console.log(this.props)
    return (
      <Container>
          <h2>Accounts</h2>
          <i className ="nes-icon is-large heart"></i>
      <br />
        <Row>
            <Col>
            <ListGroup>
            {this.props.characters.map((character, index) =>{
              return (
                <ListGroup.Item className="nes-container with-title is-centered" key={index}>
                    <br />
                    <h4>
                    <span className='character-name'>Name: {character.name}</span>
                    </h4>
                    <h4>
                    <span className='character-age'>Age: {character.age} years old</span>
                    </h4>
                    <h4>
                    <span className='character-world'>World: {character.world}</span>
                    </h4>
                    <h4>
                    <span className='character-enjoys'>Enjoys: {character.enjoys}</span>
                    </h4>
                        <button className ="nes-btn is-error" type="submit" value="Submit" onClick={this.handleDelete}>DELETE ACCOUNT</button>
                    <br />
                </ListGroup.Item>
              )
            })}
                </ListGroup>
            </Col>
        </Row>
        <div>
        {this.state.redirect && <Redirect to='/' />}

        <button type="button" className="nes-btn is-warning" onClick={this.setRedirect}>HOME</button>
        </div>
        <div>
        </div>
      </Container>
    );
  }
}

export default Characters;
