import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import mapboxConfig from '~/config/mapbox';
import styles from './styles';

MapboxGL.setAccessToken(mapboxConfig.accessToken);

const MapBox = ({ onLongPress }) => (
  <MapboxGL.MapView
    onLongPress={(data) => {
      const { geometry: { coordinates: [longitude, latitude] } } = data;

      onLongPress(longitude, latitude);
    }}
    centerCoordinate={[-49.6446024, -27.2108001]}
    style={styles.container}
    showUserLocation
    styleURL={MapboxGL.StyleURL.Dark}
  >
    <MapboxGL.PointAnnotation
      id="rocketseat"
      coordinate={[-49.6446024, -27.2108001]}
    >
      <View style={styles.annotationContainer}>
        <View style={styles.annotationFill} />
      </View>
      <MapboxGL.Callout title="Rocketseat House" />
    </MapboxGL.PointAnnotation>
  </MapboxGL.MapView>
);

MapBox.propTypes = {
  onLongPress: PropTypes.func.isRequired,
};

export default MapBox;
