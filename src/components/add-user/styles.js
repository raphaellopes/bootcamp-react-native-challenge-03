import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: rgba(0,0,0, 0.5);
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Wrapper = styled.View`
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  flex: 1;
  margin: 0 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  border: 1px solid #999;
`;
