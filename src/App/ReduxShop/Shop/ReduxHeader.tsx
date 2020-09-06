import React, {useMemo} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppState} from "../store.model";

const Container = styled.div`
  display:grid;
  background: #1263dd;
  grid-template-rows: 1fr max-content;
  height: 25vh;
`;

const Branding = styled.div`
  font-size: 3rem;
  color: white;
`;

const Nav = styled.div`
  display: grid;
  background: #75a9ef;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 1em;
  width: 100vw;
  color: white;
  padding: 2px;
`;
const StyledLink = styled(Link)`
font-size: 2em;
color: white;
padding: 2px
`;

export function ReduxHeader() {
    const totalItems = useSelector<AppState>(state => state.cart.totalItems);
    const cartTitle = useMemo(() => {
        return `Cart ${totalItems > 0 ? `(${totalItems})` : ""}`;
    }, [totalItems]);
    return <Container>
        <Branding>
            Redux Shop
        </Branding>
        <Nav>
            <StyledLink to={"/"}> Home</StyledLink>
            <StyledLink to={""}> Products</StyledLink>
            <StyledLink to={"cart"}> {cartTitle}</StyledLink>
        </Nav>
    </Container>;
}
