import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Ttitle = styled.div`
 font-size: 2em;
 font-weight: bold;
`;
const Root = styled.div`
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2em;
`;

export function Home() {
    return <Root>
        <Ttitle>Welcome</Ttitle>
        <div>
            <Link to={"/vanilla"}>
                Vanilla Example
            </Link>
        </div>
        <div>
            <Link to={"/context"}>
                Context example
            </Link>
        </div>
        <div>
            <Link to={"/redux"}>
                Redux example
            </Link>
        </div>
    </Root>;
}
