import styled, { keyframes } from 'styled-components';

const styles = {
  colors: {
    primary: {
      red: '#D94A4A',
      gray: '#F2F2F2',
      blue: '#0460D9'
    },
    secondary: {
      blue: '#5F94D9'
    }
  }
}

export const PageLayout = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow
  width: 100vw;
`

export const HeaderLayout = styled.header`
  display: flex;
  background-color: ${styles.colors.primary.red};
  height: 4em;
  justify-content: space-between;
  padding: 0.6em 2em;
  width: 100%;
`

export const LoginLayout = styled.div`
  align-items: center;
  // background-color: red;
  display: flex;
  flex-direction: column;
  height: 20em;
  justify-content: space-around;
  margin-top: 10%;
  width: 20em;
`

export const InputLayout = styled.input`
  border: 1px solid ${styles.colors.primary.gray};
  border-radius: 0.2em;
  padding: 0.6em;
  transition: 200ms ease;
  width: 80%;
  &:focus {
    border: 1px solid ${styles.colors.primary.red};
    outline: none;
  }
`

export const ButtonLayout = styled.button`
  border: none;
  border-radius: 0.2em;
  font-weight: bold;
  padding: 0.6em;
  width: 40%;
  transition: 200ms ease;
  &:disabled {
    cursor: not-allowed;
  }
  &:enabled {
    background-color: ${styles.colors.primary.blue};
    color: white;
    cursor: pointer;
  }
  &:hover {
    background-color: ${styles.colors.secondary.blue};
    color: white;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 10s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
`;