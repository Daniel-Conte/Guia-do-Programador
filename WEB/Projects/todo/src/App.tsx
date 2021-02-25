import { BrowserRouter } from 'react-router-dom'

import Menu from './components/template/Menu'
import Nav from './components/template/Nav'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App container">
        <Menu />
        <Nav />
      </div>
    </BrowserRouter>
  )
}

export default App;
