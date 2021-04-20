import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme/MyTheme';
import MyTable from './Components/MyTable';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MyTable />
      </ThemeProvider>
    </div>
  );
}

export default App;
