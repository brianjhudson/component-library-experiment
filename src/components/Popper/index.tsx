import React from 'react';
import { usePopper } from 'react-popper';

import {
    StyledPopper,
    StyledArrow
} from './styled';

export interface Props {
    children: any;
    referenceElement: any;
    placement?: 'bottom' | 'top' | 'left' | 'right'
}

export const Popper: React.SFC<Props> = ( { 
    children
    , referenceElement
    , placement = 'bottom'
} ) => {
    const [popperElement, setPopperElement] = React.useState(null);
    const [arrowElement, setArrowElement] = React.useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement
        , modifiers: [
            { name: 'arrow', options: { element: arrowElement } },
            { name: 'offset', options: { offset: [0, 8] } }
        ],
    });
    const arrowStyles = React.useMemo( () => {
        switch (placement) {
            case 'top':
                return {
                    bottom: '-4px'
                    , left: '-2px'
                };
            case 'bottom':
                return {
                    top: '-4px'
                    , left: '-2px'
                };
            case 'left':
                return {
                    right: '-4px'
                    , top: '-2px'
                };
            case 'right':
                return {
                    left: '-4px'
                    , top: '-2px'
                };
            default: {
                return {};
            }
        }
    }, [placement] )
  return (
    <>
        {
            referenceElement &&
            <StyledPopper 
                ref={( el: any ) => setPopperElement(el)} 
                style={styles.popper} 
                {...attributes.popper}
            >
                {children}
                <StyledArrow
                    ref={( el: any ) => setArrowElement(el)} 
                    style={{
                        ...styles.arrow,
                        ...arrowStyles
                    }} 
                />
            </StyledPopper>
        }
    </>
  );
};

export default Popper;