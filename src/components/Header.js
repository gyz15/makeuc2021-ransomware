import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const Header = () => {
  const [firstButtonActive, setFirstButtonActive] = useState(false);
  const [secondButtonActive, setSecondButtonActive] = useState(false);
  const [thirdButtonActive, setThirdButtonActive] = useState(false);
  const [fourthButtonActive, setFourthButtonActive] = useState(false);
  return (
    <StyledHeader>
      <nav id="navbar" className="nav-menu">
        <NavItemContainer>
          <NavItem>
            <a
              href="/#what_is_it"
              onMouseEnter={() => setFirstButtonActive(true)}
              onMouseLeave={() => setFirstButtonActive(false)}>
              <Icon />
              <NavText active={firstButtonActive}>What is it</NavText>
            </a>
          </NavItem>
          <NavItem>
            <a
              href="/#what_does_it_do"
              onMouseEnter={() => setSecondButtonActive(true)}
              onMouseLeave={() => setSecondButtonActive(false)}>
              <Icon />
              <NavText active={secondButtonActive}>What does it do?</NavText>
            </a>
          </NavItem>
          <NavItem>
            <a
              href="/#demonstration"
              onMouseEnter={() => setThirdButtonActive(true)}
              onMouseLeave={() => setThirdButtonActive(false)}>
              <Icon />
              <NavText active={thirdButtonActive}>Demonstration</NavText>
            </a>
          </NavItem>
          <NavItem>
            <a
              href="/#what_can_you_do"
              onMouseEnter={() => setThirdButtonActive(true)}
              onMouseLeave={() => setThirdButtonActive(false)}>
              <Icon />
              <NavText active={fourthButtonActive}>What can you do</NavText>
            </a>
          </NavItem>
        </NavItemContainer>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  padding: 15px 50px 15px 15px;
  overflow-y: auto;
`;

const NavItemContainer = styled.ul`
  /* list-style: none;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 0px; */
`;

const NavItem = styled.li`
  position: relative;
  white-space: nowrap;
  display: block;
  border-radius: 50%;
  font-size: 1.2rem;
  a {
    text-decoration: none;
  }
`;

const NavText = styled.span`
  ${(props) => (props.active ? "" : "display:none")}
`;
