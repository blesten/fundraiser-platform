import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResetPassword from './pages/ResetPassword'
import Fundraiser from './pages/Fundraiser'
import Home from './pages/Home'
import FundraiserDetail from './pages/Fundraiser/Detail'
import ScrollToTop from './utils/ScrollToTop'
import NotFound from './components/general/NotFound'
import FundraiserDashboard from './pages/FundraiserDashboard'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fundraiser' element={<Fundraiser />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/dashboard' element={<FundraiserDashboard />} />
        <Route path='/fundraiser/:id' element={<FundraiserDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App