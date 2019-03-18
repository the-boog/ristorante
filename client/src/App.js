import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Menus from './components/Menus';
import MenuForm from './components/MenuForm';
import axios from 'axios'

class App extends Component {
  state = { menus: [],}

  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data, })
    })
    .catch( err => {
      console.log(err)
    })

  }

  addMenu = (name) => {
    axios.post('/api/menus', { name})
    .then( res => {
      const {menus, } = this.state;
      this.setState({ menus: [...menus, res.data],  })
    })

  }

  updateMenu = (id) => {
    axios.put(`/api/items/${id}`)
    .then ( res => {
      const menus = this.state.menus.map( m => {
        if (m.id === id)
        return res.data;
        return m;
      })
    })

  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const {menus, } = this.state;
      this.setState({ menus: menus.filter(m => m.id !== id,) })
    })

  }

  render() {
    return (
      <Container>
        <MenuForm addMenu={this.addMenu} />
        <div>{this.state.menus.map(menu => 
          <Menus
            menu={menu}
            updateMenu={this.updateMenu}
            deleteMenu={this.deleteMenu}
        />)}
        </div>
        
      </Container>
    );
  }
}

export default App;

