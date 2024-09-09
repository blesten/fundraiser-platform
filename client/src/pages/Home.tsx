import Highlight from './../components/home/Highlight'
import Statistic from './../components/home/Statistic'
import HeadInfo from './../utils/HeadInfo'
import Navbar from './../components/general/Navbar'
import Banner from './../components/home/Banner'
import Footer from './../components/general/Footer'
import Start from './../components/home/Start'

const Home = () => {
  return (
    <>
      <HeadInfo title='Home' />
      
      <div className='px-24 py-7'>
        <Navbar />
        <Banner />
        <Start />
        <Highlight />
        <Statistic />
        <Footer />
      </div>
    </>
  )
}

export default Home