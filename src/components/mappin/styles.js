import styled from 'styled-components';

import { colors } from '~/styles';

const roundSize = 50;

export const Container = styled.View`
  background: ${colors.primary};
  align-items: center;
  background-color: #FFF;
  border-radius: ${roundSize / 2}px;
  height: ${roundSize}px;
  justify-content: center;
  width: ${roundSize}px;
`;

export const Avatar = styled.Image`
  background: ${colors.danger};
  border-radius: ${roundSize / 2}px;
  height: ${roundSize}px;
  transform: scale(0.8);
  width: ${roundSize}px;
`;
