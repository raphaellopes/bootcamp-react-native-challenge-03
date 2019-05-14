import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapBox from '~/components/mapbox';
import AddUser from '~/components/add-user';
import { Creators as UsersActions } from '~/store/ducks/users';
import { Container } from './styles';

class Home extends Component {
  static propTypes = {
    addUserOpenModal: PropTypes.func.isRequired,
    users: PropTypes.shape({
      loding: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      isModalOpen: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        bio: PropTypes.string,
        avatar: PropTypes.string,
        coordinates: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      })),
    }).isRequired,
  }

  state = {
    coordinates: {},
  }

  handlePress = (longitude, latitude) => {
    const coordinates = { latitude, longitude };
    this.props.addUserOpenModal();
    this.setState({ coordinates });
  }

  render() {
    const { coordinates } = this.state;
    const { users } = this.props;

    return (
      <Container>
        <AddUser
          visible={users.isModalOpen}
          coordinates={coordinates}
        />
        <MapBox pins={users.data} onLongPress={this.handlePress} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(UsersActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
