import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './index.css'
import { Reducer } from './Reducer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFB900",
    },
    secondary: {
      main: "#720087",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff"
    }
  },
  typography: {
    fontFamily: "Kosugi Maru",
    h2: {
      fontSize: "2.8rem",
    },
    body1: {
      fontSize: "1.4rem"
    }
  }
})

const store = createStore(Reducer)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
