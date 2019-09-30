import React, { Component } from 'react';
import {
  Col, Container, Row, Form
} from 'react-bootstrap'
import { Redirect } from 'react-router-dom';

class NewCharacter extends Component {
    constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      world: '',
      enjoys: ''
    }
  }
}

    handleChange = (event) => {
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }

    handleSubmit = () => {
        this.props.submittedCharacter(this.state.form)
}

  render() {
      console.log(this.state)
    return (
      <Container class="specialcontainer">
          <Row>
            <Col>
            <div className="nes-container is-rounded">
                <h3>NAME</h3>
                <Form.Control
                  className="nes-input is-primary"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.form.name}
                />
            </div>
            <br />
            <div className="nes-container is-rounded">
                <h3>AGE</h3>
                <Form.Control
                  className="nes-input is-warning"
                  type="text"
                  name="age"
                  onChange={this.handleChange}
                  value={this.state.form.age}
                />
            </div>
            <br />
            <div className="nes-container is-rounded">
                <h3>WORLD</h3>
                <Form.Control
                  className="nes-input is-success"
                  type="text"
                  name="world"
                  onChange={this.handleChange}
                  value={this.state.form.world}
                />
            </div>
            <br />
            <div className="nes-container is-rounded">
                <h3>ENJOYS</h3>
                <Form.Control
                  className="nes-input is-error"
                  type="text"
                  name="enjoys"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
                />
            </div>
            <br />
            <div>
                <i className ="nes-icon is-large heart"></i>
                <button className ="nes-btn is-primary" type="submit" value="Submit" onClick={this.handleSubmit}>CREATE ACCOUNT</button>
                <i className ="nes-icon is-large heart"></i>
                {this.props.success &&
                <Redirect to="/newcharacters" />
                }
            </div>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default NewCharacter;
