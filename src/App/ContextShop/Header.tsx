import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display:grid;
  grid-template-columns: max-content 1fr 2em;
  background: rebeccapurple;
  height: 25vh;
`;

const Branding = styled.div`
  font-size: 3rem;
  color: white;
`;

export function Header() {
    return <Container>
        <Branding>
            Context Shop
        </Branding>
    </Container>;
}
