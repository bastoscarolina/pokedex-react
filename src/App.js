import CreateStyle from './styles/global';
import Layout from './components/Layout';
import AppRouter from './routes/index';
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <CreateStyle />
    </Layout>
  );
};

export default App;
