import React, { Component } from 'react';

import MapBox from '~/components/mapbox';
import { Container } from './styles';

export default class Home extends Component {
  handlePress = (longitude, latitude) => {
    console.tron.log('Home page', { longitude, latitude });
  }

  render() {
    return (
      <Container>
        <MapBox onLongPress={this.handlePress} />
      </Container>
    );
  }
}
