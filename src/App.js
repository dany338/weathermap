/* eslint-disable import/no-cycle */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BASE_FONT_SIZE } from './infraestructure/config/const';
import themes from './themes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import ErrorBoundary from './components/ErrorBoundary';
/* Pages */
const Weather = lazy(() => import('./pages/Weather'));

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&display=swap');
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App {
    font-size: ${props => props.fontSize};
    font-family: "Nunito", sans-serif;
    width: 100%;
    height: auto;
  }

  .app__page {
    display: flex;
  }

  body {
    --color-3: #ffbc00;
    --color-5: #e7e8ec;
  }

  a {
    text-decoration: none;
  }

  i {
    cursor: pointer;
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  .modal-rodal-container {
    z-index: 9999 !important;
    font-size: ${props => props.fontSize};
    font-family: "Nunito", sans-serif;
  }

  .swal2-container {
    z-index: 10000 !important;
    font-family: "Nunito", sans-serif;
  }
`;

const themeContext = {
  theme: themes.light,
  toogleTheme: () => {}
};

export const ThemeContext = React.createContext(themeContext);

const App = () => {
  return (
    <ThemeProvider theme={themeContext.theme}>
      <GlobalStyle fontSize={BASE_FONT_SIZE} />
      <BrowserRouter>
        <div className="App">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <div className="app__page">
                <Sidebar />
                <hr />
                <Nav />
                <Switch>
                  <Route exact path="/" component={Weather} />
                </Switch>
              </div>
            </Suspense>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
