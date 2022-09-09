import React from 'react';
import { TextWrapper } from './Text.styles';
import { TextProps } from './Text.types';

const Text = (props:TextProps) => {
    let {color ,fontSize} = props;
    return (
        <TextWrapper color={color} fontSize={fontSize}>
            Hello
        </TextWrapper>
    );
};

export default Text;
