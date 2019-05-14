import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Modal, Alert, ActivityIndicator,
} from 'react-native';

import { Creators as UsersActions } from '~/store/ducks/users';

import {
  Container, Wrapper, Title, Input, ButtonWrapper, Button, ButtonText,
  Separator, Error, ErrorText,
} from './styles';

class AddUser extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]).isRequired,
    loading: PropTypes.bool.isRequired,
    addUserRequest: PropTypes.func.isRequired,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
  }

  state = {
    githubuser: '',
  }

  get githubuser() {
    return this.state.githubuser;
  }

  handleConfirm = async () => {
    const { onConfirm, addUserRequest, coordinates } = this.props;

    console.tron.log(this.githubuser, coordinates);
    await addUserRequest(this.githubuser, coordinates);
  }

  render() {
    const {
      visible, onCancel, onConfirm, error, loading,
    } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <Container>
          <Wrapper>
            <Title>Adicionar novo dev</Title>

            {error && (
              <Error>
                <ErrorText>{error}</ErrorText>
              </Error>
            )}

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Usuário no Github"
              value={this.githubuser}
              error={error}
              onChangeText={text => this.setState({ githubuser: text })}
            />

            <ButtonWrapper>
              <Button
                onPress={onCancel}
              >
                <ButtonText>Cancelar</ButtonText>
              </Button>

              <Separator />

              <Button
                color="primary"
                onPress={this.handleConfirm}
              >
                {loading
                  ? <ActivityIndicator size="small" color="#fff" />
                  : <ButtonText>Salvar</ButtonText>
                }
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  error: state.users.error,
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(UsersActions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
