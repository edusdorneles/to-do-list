import { useGlobal } from 'providers/Global';

// Components
import Header from 'components/Header/Header';
import TaskInput from 'components/TaskInput/TaskInput';
import TaskContainer from 'components/TaskContainer/TaskContainer';
import Footer from 'components/Footer/Footer';
import { ThemeProvider, Box } from '@material-ui/core';

// Styles
import './App.css';


const App: React.FC = () => {
  const { theme } = useGlobal();  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{minHeight: '100vh', bgcolor: 'background.default'}}>
        <Header />
        
        <TaskInput />

        <TaskContainer />

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;