import React from 'react';
import { Form } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = {name: "",};

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMenu(this.state.name)
    this.setState({name: ""})

  }

  handleChange = (e) => {
    this.setState({name: e.target.value})

  }
  

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Menu"
          placeholder="Create a New Menu"
          required
          value={this.state.name}
          onChange={this.handleChange}
          />
      </Form>
    )
  }
}

export default MenuForm;