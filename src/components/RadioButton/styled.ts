import styled from 'styled-components';

export const StyledRadioButton = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    padding: .25rem;
    background-clip: content-box;
    border: ${ props => `1px solid ${ props.theme.colors.primary}`};
    border-radius: 50%;
    &:checked {
        background-color: ${ props => props.theme.colors.primary };
    }
    &:disabled {
        border: ${ props => `1px solid ${ props.theme.colors.disabled}`};
        background-color: ${ props => props.theme.colors.disabled };
    }
`;

export default StyledRadioButton;
// export default styled.input``;