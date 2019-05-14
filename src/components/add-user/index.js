import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Text, TouchableHighlight, Alert,
} from 'react-native';

import {
  Container, Wrapper, Title, Input,
} from './styles';

export default class AddUser extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  state = {
    githubuser: '',
  }

  render() {
    const { visible, onClose } = this.props;
    const { username } = this.state;

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

            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Usuário no Github"
              value={username}
              onChangeText={text => this.setState({ username: text })}
            />

            <TouchableHighlight
              onPress={onClose}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </Wrapper>
        </Container>
      </Modal>
    );
  }
}
