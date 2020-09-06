import React from 'react';
import styled from 'styled-components';

import Popper from './components/Popper';
import Button from './components/Button';

const StyledContainer = styled.div`
    min-height: 100vh;
    background-color: #282c34;
    color: #FFFFFF;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledPre = styled.pre`
    padding: 0.5rem;
    background: #222222;
    color: orange;
`;

const StyledHeader = styled.header`
    font-size: calc(10px + 2vmin);
`;

const StyledInstruction = styled.div`
    margin-bottom: 2rem;
`;

const StyledLink = styled.a`
    text-decoration: none;
    & pre:hover {
        color: #4CB1F7;
    }
`;

function App() {
    const [ referenceElement, setReferenceElement ] = React.useState<any>(null)
  return (
    <StyledContainer>
        <StyledHeader>
            <h1>
                Component Library
            </h1>
        </StyledHeader>
        <main>
            <StyledInstruction>
                Run the documentation server with 
                <StyledPre>
                    <code>
                        npm run storybook
                    </code>
                </StyledPre>
            </StyledInstruction>
            <StyledInstruction>
                View the documentation at 
                <StyledLink href="http://localhost:6006">
                    <StyledPre>
                        <code>
                            http://localhost:6006
                        </code>

                    </StyledPre>
                </StyledLink>

            </StyledInstruction>
            <StyledInstruction>
                <h2>
                    Popper
                </h2>
                <div>
                    <i>
                        Just realized Storybook has an issue with Popper. I'll just paste that example here:
                    </i>
                </div>
            </StyledInstruction>
            <StyledInstruction>
                <div>
                    <Button
                        onClick={ e => setReferenceElement( (referenceElement:any) => referenceElement ? null : e.currentTarget )}
                    >
                        Open Popper
                    </Button>

                    <Popper
                        referenceElement={ referenceElement }
                    >
                        Popper!
                    </Popper>

                </div>
                <StyledPre
                    style={{ textAlign: 'left' }}
                >
                    <code>{
`<div onClick={ e => {
    setReferenceElement( (referenceElement:any) => {
        return referenceElement 
            ? null 
            : e.currentTarget 
    } )
}
>
    Test
</div>

<Popper
    referenceElement={ referenceElement }
>
    Test
</Popper>`
                    }</code>
                </StyledPre>
            </StyledInstruction>
        </main>
    </StyledContainer>
  );
}

export default App;
