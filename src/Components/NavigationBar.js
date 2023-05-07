import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';
const NavigationBar = ({ algoPath,quizPath,questionPath}) => {
  return (
    
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to={algoPath} activeStyle>
            Agorithms
          </NavLink>
          <NavLink to={quizPath} activeStyle>
            Quizz
          </NavLink>
          <NavLink to={questionPath} activeStyle>
            Questions
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Home</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default NavigationBar
