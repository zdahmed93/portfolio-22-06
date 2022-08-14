import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container mt-5'>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
