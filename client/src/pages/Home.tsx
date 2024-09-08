import HeadInfo from './../utils/HeadInfo'
import Navbar from './../components/general/Navbar'
import Banner from './../components/home/Banner'

const Home = () => {
  return (
    <>
      <HeadInfo title='Home' />
      
      <div className='px-24 py-7'>
        <Navbar />
        <Banner />
      </div>
    </>
  )
}

export default Home