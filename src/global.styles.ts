import { createGlobalStyle } from 'styled-components';
import {COLOR} from './constants/color';
export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${COLOR.GRAY};
  }
`