import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResetPassword from './pages/ResetPassword'
import Fundraiser from './pages/Fundraiser'
import Home from './pages/Home'
import FundraiserDetail from './pages/Fundraiser/Detail'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fundraiser' element={<Fundraiser />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/fundraiser/:id' element={<FundraiserDetail />} />
      </Routes>
    </Router>
  )
}

export default App