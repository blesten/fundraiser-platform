import HeadInfo from './../../utils/HeadInfo'
import Navbar from './../../components/general/Navbar'
import Header from './../../components/fundraiser/Header'
import Notes from './../../components/fundraiser/Notes'

const FundraiserDetail = () => {
  return (
    <>
      <HeadInfo title='Fundraiser Title' />

      <div className='px-24 py-7'>
        <Navbar />
        <Header />
        <Notes />
      </div>
    </>
  )
}

export default FundraiserDetail