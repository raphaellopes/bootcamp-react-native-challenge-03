import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Alert,
} from 'react-native';

import {
  Container, Wrapper, Title, Input, ButtonWrapper, Button, ButtonText, Separator,
} from './styles';

export default class AddUser extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
  }

  state = {
    githubuser: '',
  }

  render() {
    const { visible, onCancel, onConfirm } = this.props;
    const { githubuser } = this.state;

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
              value={githubuser}
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
                onPress={onConfirm}
              >
                <ButtonText>Salvar</ButtonText>
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </Container>
      </Modal>
    );
  }
}
