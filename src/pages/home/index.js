import React, { Component } from 'react';

import MapBox from '~/components/mapbox';
import AddUser from '~/components/add-user';
import { Container } from './styles';

export default class Home extends Component {
  state = {
    showModal: false,
  }

  handlePress = (longitude, latitude) => {
    console.tron.log('Home page', { longitude, latitude });
    this.setState({ showModal: true });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Container>
        <AddUser visible={this.state.showModal} onClose={this.handleClose} />
        <MapBox onLongPress={this.handlePress} />
      </Container>
    );
  }
}
