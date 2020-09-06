import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    background: ${ ( props ) => props.theme.colors.primary };
    color: white;
    border: 0;
    border-radius: 4px;
    &:hover {
        filter: brightness(115%);
        cursor: pointer;
    }
`;

export default StyledButton;