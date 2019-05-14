import React from 'react';
import PropTypes from 'prop-types';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import MapPin from '~/components/mappin';
import mapboxConfig from '~/config/mapbox';
import styles from './styles';

MapboxGL.setAccessToken(mapboxConfig.accessToken);

const MapBox = ({ onLongPress, pins }) => (
  <MapboxGL.MapView
    onLongPress={(data) => {
      const { geometry: { coordinates: [longitude, latitude] } } = data;

      onLongPress(longitude, latitude);
    }}
    centerCoordinate={[-49.6446024, -27.2108001]}
    style={styles.container}
    showUserLocation
    styleURL={MapboxGL.StyleURL.Light}
  >
    {pins && pins.map(({
      id, bio, name, avatar, coordinates,
    }) => (
      <MapboxGL.PointAnnotation
        key={id}
        id={`${id}`}
        coordinate={[coordinates.longitude, coordinates.latitude]}
      >
        <MapPin avatar={avatar} />
        <MapboxGL.Callout title={`${name} \n${bio || ''}`} />
      </MapboxGL.PointAnnotation>
    ))}
  </MapboxGL.MapView>
);

MapBox.propTypes = {
  onLongPress: PropTypes.func.isRequired,
  pins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    bio: PropTypes.string,
    avatar: PropTypes.string,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  })),
};

MapboxGL.defaultProps = {
  pins: [],
};

export default MapBox;
