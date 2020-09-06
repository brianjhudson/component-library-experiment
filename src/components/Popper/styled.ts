import styled from 'styled-components';

export const StyledPopper = styled.div`
    padding: 4px 8px;
    background: ${ props => props.theme.colors.white };
    color: ${ props => props.theme.colors.text };
    border-radius: 4px;

`;
export const StyledArrow = styled.div`
    position: absolute;
    &:before {
        position: absolute;
        content: '';
        width: 8px;
        height: 8px;
        z-index: -1;
        transform: rotate(45deg);
        background: ${ props => props.theme.colors.white };
    }

`;

export default StyledPopper;