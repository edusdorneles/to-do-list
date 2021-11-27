import ReactDOM from 'react-dom';
import App from './App';
import { GlobalProvider } from 'providers/Global';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);