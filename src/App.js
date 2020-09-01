import React from 'react';
import './App.css';
import HomePageComponent from "./Components/HomePageComponent.js";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002266',
      contrastText: '#fff',
    },
    secondary: {
      main: '#cc6600',
      contrastText: '#fff',
    },
  },
  spacing: 4,
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePageComponent className="homePage"/>
      </ThemeProvider>
    </div>
  );
}

export default App;
