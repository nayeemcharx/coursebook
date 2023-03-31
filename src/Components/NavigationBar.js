import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';
import { useNavigate } from 'react-router-dom'
const NavigationBar = () => {
  const navigate = useNavigate()
  const onClickToLinearAlgebra = () => {
    navigate('/LinearAlgebra')
  }
  return (
    
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink onClick={onClickToLinearAlgebra}>
            Agorithms
          </NavLink>
          <NavLink to='/Quizz' activeStyle>
            Quizz
          </NavLink>
          <NavLink to='/Question' activeStyle>
            Questions
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default NavigationBar
