import { createGlobalStyle } from 'styled-components';

import Img from '../../assets/images/covid.jpg';

const GlobalStyle = createGlobalStyle`
* {
  outline:none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: normal;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: serif;
  font-size: 16px;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}

html, body {
  width: 100%;
  min-height: 100%;
  display:flex;
}

#root {
  background: url(${Img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.mb-2 {
margin-bottom: 16px;
}

.pt-2{
  padding-top:16px;
}

.cursor{
  cursor: pointer;
}
`;

export default GlobalStyle;
