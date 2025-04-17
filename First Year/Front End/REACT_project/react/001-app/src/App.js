import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {AppRouter} from './routes/approuter';
import {Header} from './components/header';
import { Footer } from './components/footer';
import {BandList} from './components/band-list'

function App() {
  return (
<BrowserRouter>
    <Header/>
    <AppRouter/>
    <Footer/>
</BrowserRouter>
  )
}

export default App;
