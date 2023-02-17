
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Login from './components/Login'
import './style/components/app.sass'
function App() {
  return (
    <div id="container">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
     </Routes>
      </BrowserRouter>
     
    </div>
  )
  
}

export default App
