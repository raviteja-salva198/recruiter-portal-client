import React, { useState } from 'react';
import { Dashboard, Work, People, Assignment, Menu, ChevronLeft } from '@styled-icons/material';
import { NavContainer, TopSection, Logo, ToggleButton, StyledIcon, NavList, NavItem, NavLink, IconWrapper, LinkText } from './Navbar.styles';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer isOpen={isOpen}>
      <TopSection>
        <Logo isOpen={isOpen}>{isOpen ? 'RecruiterPortal' : 'RP'}</Logo>
        <ToggleButton onClick={toggleNavbar} isOpen={isOpen}>
          <StyledIcon as={isOpen ? ChevronLeft : Menu} />
       </ToggleButton>
      </TopSection>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <IconWrapper isOpen={isOpen}><StyledIcon as={Dashboard} /></IconWrapper>
            <LinkText isOpen={isOpen}>Dashboard</LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/job-postings">
            <IconWrapper isOpen={isOpen}><StyledIcon as={Work} /></IconWrapper>
            <LinkText isOpen={isOpen}>Job Postings</LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/candidates">
            <IconWrapper isOpen={isOpen}><StyledIcon as={People} /></IconWrapper>
            <LinkText isOpen={isOpen}>Candidates</LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/subscription">
            <IconWrapper isOpen={isOpen}><StyledIcon as={Assignment} /></IconWrapper>
            <LinkText isOpen={isOpen}>Subscription</LinkText>
          </NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}

export default Navbar;

