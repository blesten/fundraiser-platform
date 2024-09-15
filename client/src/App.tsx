import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResetPassword from './pages/ResetPassword'
import Fundraiser from './pages/Fundraiser'
import Home from './pages/Home'
import FundraiserDetail from './pages/Fundraiser/Detail'
import ScrollToTop from './utils/ScrollToTop'
import NotFound from './components/general/NotFound'
import FundraiserDashboard from './pages/FundraiserDashboard'
import CharityProgram from './pages/CharityProgram'
import WithdrawalAccount from './pages/WithdrawalAccount'
import FundraiserApproval from './pages/FundraiserApproval'
import CharityProgramApproval from './pages/CharityProgramApproval'
import WithdrawAccountApproval from './pages/WithdrawAccountApproval'
import Category from './pages/Category'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fundraiser' element={<Fundraiser />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/dashboard' element={<FundraiserDashboard />} />
        <Route path='/charity-program' element={<CharityProgram />} />
        <Route path='/withdrawal-account' element={<WithdrawalAccount />} />
        <Route path='/fundraiser-approval' element={<FundraiserApproval />} />
        <Route path='/charity-program-approval' element={<CharityProgramApproval />} />
        <Route path='/withdrawal-account-approval' element={<WithdrawAccountApproval />} />
        <Route path='/category' element={<Category />} />
        <Route path='/fundraiser/:id' element={<FundraiserDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App