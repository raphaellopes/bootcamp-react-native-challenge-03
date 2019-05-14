import React, { Component } from 'react';

import MapBox from '~/components/mapbox';
import AddUser from '~/components/add-user';
import { Container } from './styles';

export default class Home extends Component {
  state = {
    showModal: false,
  }

  handlePress = (longitude, latitude) => {
    console.tron.log('Map pressed', { longitude, latitude });
    this.setState({ showModal: true });
  }

  handleCancel = () => {
    this.setState({ showModal: false });
  }

  handleConfirm = () => {
    console.tron.log('Confirm modal pressed!');
  }

  render() {
    return (
      <Container>
        <AddUser
          visible={this.state.showModal}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
        <MapBox onLongPress={this.handlePress} />
      </Container>
    );
  }
}
