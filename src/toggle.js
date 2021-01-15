import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme, grayTheme } from './theme';
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: auto;
  overflow: visible;
  padding: 1rem;
  position: relative;
  width: 6rem;
  height: 3rem;
  top: 1.2rem;

  svg {
    height: 2rem;
    width: 1.5rem;
    transition: all 1s linear;
    

    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(70px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-70px)' : 'translateY(0)'};
    }
    &:nth-child(3) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-70px)' : 'translateY(30px)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;