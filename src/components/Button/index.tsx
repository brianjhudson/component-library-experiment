import React from 'react';

import StyledButton from './styled';

export interface Props {
    type?: 'button' | 'submit' | 'reset';
    children?: any;
    disabled?: boolean
    onClick?: ( e?: React.MouseEvent | any ) => void;
};


export const Button: React.SFC<Props> = ( {
    type
    , children = 'Submit'
    , disabled
    , onClick
} ) => {
    return (
        <StyledButton
            type={ type }
            onClick={ onClick }
            disabled={ disabled }
        >
            { children }
        </StyledButton>
    )
};

export default Button;