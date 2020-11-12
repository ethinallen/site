import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react';

export default class MenuComponent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='personal'
            active={activeItem === 'personal'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}
