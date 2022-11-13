import { Global, css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      h2 {
        color: #61dafb;
      }
    `}
  />
);