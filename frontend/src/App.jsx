import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { Send } from './pages/SendMoney'
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/signup' element = {<Signup />}/>
          <Route path = '/signin' element = {<Signin />}/>
          <Route path = '/dashboard' element = {<Dashboard />}/>
          <Route path = '/send' element = {<Send />}/>
        </Routes>
      </BrowserRouter>
      navigate('/signup');
    </div>
  )
}

export default App
