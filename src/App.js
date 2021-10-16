import React from 'react';
import { useAuth } from './providers/Auth';
import { ThemeProvider, Box } from '@material-ui/core';
import Header from './components/Header/Header';
import TaskInput from './components/TaskInput/TaskInput';

import './App.css';

function App() {
  const { theme } = useAuth();  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{minHeight: '100vh', bgcolor: 'background.default'}}>
        <Header />
        
        <TaskInput />
      </Box>
    </ThemeProvider>
  );
}

export default App;