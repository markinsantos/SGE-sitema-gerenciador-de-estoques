import './App.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from './components/templates/Logo'
import Main from './components/templates/Main';
import Nav from './components/templates/Nav';
import Footer from './components/templates/Footer';
import './App.css';
import RoutesApp from './config/routes';


const App = () => {
  return (
    <div className="app">
      
      <Logo/>
      <Nav/>
      <RoutesApp/>
      <Footer/>

    </div>
  )
}

export default App;
