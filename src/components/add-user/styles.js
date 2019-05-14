import styled from 'styled-components';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.darkTransparent};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Wrapper = styled.View`
  background: ${colors.white};
  padding: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
  flex: 1;
  margin: 0 ${metrics.baseMargin}px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: ${metrics.baseMargin * 2}px;
  text-align: center;
  color: ${colors.darker};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: 0 ${metrics.basePadding}px;
  height: 42px;
  font-size: 16px;
  color: ${({ error }) => (error ? colors.danger : colors.regular)};
  border: 1px solid ${({ error }) => (error ? colors.danger : colors.regular)};
  margin-bottom: ${metrics.baseMargin}px;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  border-radius: ${metrics.baseRadius}px;
  background: ${({ color = 'regular' }) => colors[color]};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${colors.white};
`;

export const Separator = styled.View`
  width: ${metrics.baseMargin}px;
`;

export const Error = styled.View`
  background: ${colors.danger};
  padding: ${metrics.basePadding}px;
  margin-bottom: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
`;

export const ErrorText = styled.Text`
  color: ${colors.white};
`;
