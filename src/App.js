import MainContainer from './container/MainContainer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Hello From react-router V6 demo</h1>
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
