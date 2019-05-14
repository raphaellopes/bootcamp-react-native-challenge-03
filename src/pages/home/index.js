import React, { Component } from 'react';

import MapBox from '~/components/mapbox';
import AddUser from '~/components/add-user';
import { Container } from './styles';

export default class Home extends Component {
  state = {
    showModal: false,
    coordinates: {},
  }

  handlePress = (longitude, latitude) => {
    const coordinates = { latitude, longitude };
    console.tron.log('Map pressed', coordinates);
    this.setState({ showModal: true, coordinates });
  }

  handleCancel = () => {
    this.setState({ showModal: false });
  }

  handleConfirm = () => {
    console.tron.log('Confirm modal pressed!');
  }

  render() {
    const { showModal, coordinates } = this.state;

    return (
      <Container>
        <AddUser
          visible={showModal}
          coordinates={coordinates}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
        <MapBox onLongPress={this.handlePress} />
      </Container>
    );
  }
}
