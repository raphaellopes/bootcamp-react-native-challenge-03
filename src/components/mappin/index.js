import React from 'react';
import PropTypes from 'prop-types';

import { Container, Avatar } from './styles';

const MapPin = ({ avatar }) => (
  <Container>
    <Avatar source={{ uri: avatar }} />
  </Container>
);

MapPin.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default MapPin;
