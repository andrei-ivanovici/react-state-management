import React, {useMemo} from 'react';
import styled from "styled-components";
import {useAppState} from "./ShopState";
import {Link} from "react-router-dom";

const Container = styled.div`
  display:grid;
  background: #2c009f;
  grid-template-rows: 1fr max-content;
  height: 25vh;
`;

const Branding = styled.div`
  font-size: 3rem;
  color: white;
`;

const Nav = styled.div`
  display: grid;
  background: #613db0;
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


function useCartTitle() {
    const {cartItems} = useAppState();
    const computeTotals = items => items.reduce((acc, item) => acc + item.count, 0);
    const totalItems = useMemo(() => computeTotals(cartItems), [cartItems]);

    return useMemo(() => {
        return `Cart ${totalItems > 0 ? `(${totalItems})` : ""}`;
    }, [totalItems]);
}

export function ContextHeader() {
    const cartTitle = useCartTitle();

    return <Container>
        <Branding>
            Context Shop
        </Branding>
        <Nav>
            <StyledLink to={"/"}> Home</StyledLink>
            <StyledLink to={""}> Products</StyledLink>
            <StyledLink to={"cart"}> {cartTitle}</StyledLink>
        </Nav>
    </Container>;
}
