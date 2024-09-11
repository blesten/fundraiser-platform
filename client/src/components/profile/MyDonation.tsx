import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'
import FundraiserCard from '../general/FundraiserCard'

interface IProps {
  openMyDonation: boolean
  setOpenMyDonation: React.Dispatch<React.SetStateAction<boolean>>
}

const MyDonation = ({ openMyDonation, setOpenMyDonation }: IProps) => {
  const myDonationRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openMyDonation && myDonationRef.current && !myDonationRef.current.contains(e.target as Node)) {
        setOpenMyDonation(false)
      }
    }
    
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openMyDonation, setOpenMyDonation])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.8)] flex items-center justify-center ${openMyDonation ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} z-30 transition`}>
      <div ref={myDonationRef} className={`w-[68vw] bg-white rounded-xl ${openMyDonation ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-20 pointer-events-none'} delay-150 transition max-h-[90vh]`}>
        <div className='flex items-center justify-between px-6 py-4 border-b border-gray-300'>
          <div className='flex items-center gap-4'>
            <FaHeart className='text-red-500 text-xl' />
            <h1 className='font-medium'>My Donation</h1>
          </div>
          <AiOutlineClose onClick={() => setOpenMyDonation(false)} className='text-gray-500 cursor-pointer' />
        </div>
        <div className='px-6 py-5'>
          <div className='flex items-center gap-5 w-full'>
            <div className='w-full'>
              <label htmlFor='search' className='text-sm font-medium'>Search</label>
              <input type='text' className='outline-none border border-gray-300 rounded-lg px-3 py-3 text-sm w-full mt-3' placeholder='Title' autoComplete='off' />
            </div>
            <div className='w-full'>
              <label htmlFor='from' className='text-sm font-medium'>From</label>
              <input type='date' className='outline-none border border-gray-300 rounded-lg px-3 py-3 text-sm w-full mt-3' />
            </div>
            <div className='w-full'>
              <label htmlFor='to' className='text-sm font-medium'>To</label>
              <input type='date' className='outline-none border border-gray-300 rounded-lg px-3 py-3 text-sm w-full mt-3' />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-7 mt-7 h-[60vh] overflow-auto hide-scrollbar'>
            <FundraiserCard
              title='Fundraiser Title Will Goes Here In Future'
              image=''
              description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
              collectedFund={0}
              goals={100000}
              donatorCount={45800}
            />
            <FundraiserCard
              title='Fundraiser Title Will Goes Here In Future'
              image=''
              description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
              collectedFund={0}
              goals={100000}
              donatorCount={45800}
            />
            <FundraiserCard
              title='Fundraiser Title Will Goes Here In Future'
              image=''
              description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
              collectedFund={0}
              goals={100000}
              donatorCount={45800}
            />
            <FundraiserCard
              title='Fundraiser Title Will Goes Here In Future'
              image=''
              description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet'
              collectedFund={0}
              goals={100000}
              donatorCount={45800}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyDonation