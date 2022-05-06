import styled, { keyframes } from 'styled-components';
import { styles } from './styles';

const { colors } = styles;

interface PageProps {
  flexDirection: string;
}

interface InputProps {
  inputWidth: string;
  inputRadius: string;
  inputMargin: string;
}

interface WrapperProps {
  direction: string;
  wrapperMargin: string;
}

interface TitleProps {
  margin: string;
}

interface BoxProps {
  flexDirection: string;
  justifyContent: string;
}

interface TextProps {
  backgroundColor: string;
}

export const PageLayout = styled.main<PageProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-grow: 1;
  height: 100vh;
  // overflow
  width: 100vw;
`

export const HeaderLayout = styled.header`
  display: flex;
  background-color: ${colors.primary.red};
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

export const InputLayout = styled.input<InputProps>`
  border: 1px solid ${colors.primary.gray};
  border-radius: ${props => props.inputWidth};
  font-size: 0.8em;
  margin: ${props => props.inputMargin};
  padding: 0.6em;
  transition: 200ms ease;
  width: ${props => props.inputRadius};
  &:focus {
    border: 1px solid ${colors.primary.red};
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
    background-color: ${colors.primary.blue};
    color: white;
    cursor: pointer;
  }
  &:hover {
    background-color: ${colors.secondary.blue};
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

export const PokeSelectorLayout = styled.aside`
  align-items: space-around;
  background-color: ${colors.primary.red};
  color: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 2;
  height: 100%;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1em;
  transition: 200ms;
  ::-webkit-scrollbar {
  width: 0.6em;
}

  ::-webkit-scrollbar-track {
  background: #f1f1f1; 
  }
 
  ::-webkit-scrollbar-thumb {
  background: ${colors.secondary.blue}; 
  }

  ::-webkit-scrollbar-thumb:hover {
  background: ${colors.primary.blue}; 
  }
  p {
    font-size: 0.8em;
    text-align: center;
  }
  ul {
    list-style-type: none;
    text-transform: capitalize;
  }
  li {
    margin-bottom: 0.2em;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
    &:selected {
      text-decoration: underline;
    }
  }
  width: 20%;
`

export const PokeDisplayLayout = styled.article`
  // align-items: center;
  background-color: ${colors.terciary.blue};
  display: flex;
  height: 100vh;
  justify-content: space-around;
  padding: 4em;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 80%;
`

export const Wrapper = styled.div<WrapperProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: space-between;
  margin: ${props => props.wrapperMargin};
`

export const DisplayWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${props => props.direction};
  height: 100vh;
  margin: ${props => props.wrapperMargin};
  width: 40%
`

export const Title = styled.h1<TitleProps>`
  color: white;
  font-size: 3em;
  letter-spacing: 0.02em;
  margin: ${props => props.margin};
  text-transform: uppercase;
`

export const Box = styled.div<BoxProps>`
  align-items: center;
  align-content: center;
  background-color: white;
  border-radius: 0.2em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent};
  margin: 0.6em;
  padding: 0.6em;
  img {
    height: 16em;
  }
`

export const Text = styled.p`
  margin: 0 1em 0 0;
  text-transform: uppercase;
`

export const TextBox = styled.div<TextProps>`
  background-color: {props => props.backgroundColor};
`
