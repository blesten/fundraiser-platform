import HeadInfo from './../../utils/HeadInfo'
import Navbar from './../../components/general/Navbar'
import Header from './../../components/fundraiser/Header'
import Notes from './../../components/fundraiser/Notes'
import Footer from '../../components/general/Footer'

const FundraiserDetail = () => {
  return (
    <>
      <HeadInfo title='Fundraiser Title' />

      <div className='lg:px-24 py-7 px-6'>
        <Navbar />
        <Header />
        <Notes />
        <Footer />
      </div>
    </>
  )
}

export default FundraiserDetail