import React from 'react';
import { HeaderWrapper } from './Header.styles';
import { HeaderProps } from './Header.types';

const Header = (props:HeaderProps) => {
    let {color} = props;
    return (
        <HeaderWrapper color={color}>
            
        </HeaderWrapper>
    );
};

export default Header;
