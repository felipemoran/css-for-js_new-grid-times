import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import {QUERIES} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const HeaderButtons = () => {
    return (
        <ActionGroup>
            <button>
                <Search size={24}/>
            </button>
            <button>
                <Menu size={24}/>
            </button>
        </ActionGroup>
    )
}

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <HeaderButtons/>
                    <ActionGroup>
                        <button>
                            <User size={24}/>
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <DesktopActionGroup>
                    <HeaderButtons/>
                </DesktopActionGroup>
                <Logo/>
                <SubscribeWrapper>
                    <Button>Subscribe</Button>
                    <ExistingSubscriberLink href={"/"}>Already a subscriber?</ExistingSubscriberLink>
                </SubscribeWrapper>
            </MainHeader>
        </header>
    );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 78px;
    height: 98px;
    
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-items: center;
    justify-content: stretch;
    align-items: center;
  }
  
  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
`;

const DesktopActionGroup = styled.div`
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    display: revert;
    justify-self: start;
  }
`

const SubscribeWrapper = styled.div`
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
  }
`

const ExistingSubscriberLink = styled.a`
  padding-top: 8px;
  
  text-decoration: underline;
  font-style: italic;
  font-weight: var(--font-weight-normal);
  font-family: var(--font-family-serif);
  color: var(--color-gray-900);
  font-size: ${14 / 16}rem;
  
  position: absolute;
  width: 100%;
  text-align: center;
`

export default Header;
