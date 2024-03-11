import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Footer from './components/footer1';
import Header from './components/header';
import AppRouter from './routes/approuter';


function App() {
  return (
    <BrowserRouter>

      <Header/>
      <AppRouter/>   
      <Footer/>

    </BrowserRouter>
    );
}

export default App;
