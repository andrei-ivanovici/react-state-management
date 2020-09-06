import styled from "styled-components";
import {Link} from "react-router-dom";
import React, {useMemo} from "react";
import {VanillaCartItem} from "./VanillaCart/VanillaCart";

const Container = styled.div`
  display:grid;
  background: #075e07;
  grid-template-rows: 1fr max-content;
  height: 25vh;
`;

const Branding = styled.div`
  font-size: 3rem;
  color: white;
`;

const Nav = styled.div`
  display: grid;
  background: #8fde72;
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

export interface VanillaHeaderProps {
    items: VanillaCartItem[];
}

function useCartTitle(items: VanillaCartItem[]) {
    const totalItems = useMemo(() => items.reduce((acc, item) => acc + item.count, 0), [items]);
    return useMemo(() => {
        return `Cart ${totalItems > 0 ? `(${totalItems})` : ""}`;
    }, [totalItems]);
}

export function VanillaHeader({items}: VanillaHeaderProps) {
    const cartTitle = useCartTitle(items);

    return <Container>
        <Branding>
            Vanilla Shop
        </Branding>
        <Nav>
            <StyledLink to={"/"}> Home</StyledLink>
            <StyledLink to={""}> Products</StyledLink>
            <StyledLink to={"cart"}> {cartTitle}</StyledLink>
        </Nav>
    </Container>;
}
