import React from 'react';
import ItemForm from './ItemForm';
import Items from './Items';
import { Button } from 'semantic-ui-react';

class Menus extends React.Component {
  state = {items: []}

  newItem = () => {

  }

  updateItem = () => {

  }

  deleteItem = () => {

  }


  render () {
    return(
      <div>
        <div>{this.props.menu.name}</div>
        <Button onClick={() => this.props.deleteMenu(this.props.menu.id)}>DELETE</Button>
      </div>
    )
  }
}

export default Menus;
