import styled from "styled-components";

export const TextWrapper = styled.p<{ color: string ,fontSize: number   }>`
font-size: ${(props) => props.fontSize};
background: ${(props) => props.color};
`