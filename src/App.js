import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
        <Route path='/contact' component={Contact} />
        <h1>Hello</h1>
        <button className="btn btn-success">OK</button>
      </BrowserRouter>
    </div>
  );
}

export default App;
